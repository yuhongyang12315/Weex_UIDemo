// pages/ui/mapTool/mapTool.js
//获取应用配置的常量
const app = getApp();
const base = getApp().constants;
var that;
//地图相关
// 引入SDK核心类
var aMapjs = require('../../../libs/qqmap-wx-jssdk.min.js');//高德地图js
var amap;
var mapContext;
var mapScale = 16;
//中心点移动多少距离去请求
var centerPoniteMoveDistance = 1000;
//中心点移动多少后距离上次请求时间多少才能去请求
var centerMoveGetLastTime = 3;
//上次请求的时间	         
var lastTimestamp;
//maeker相关
var marker_width = 117 / 3;
var marker_height = 128 / 3;
var other_marker_width = 51 / 2;
var other_marker_height = 57 / 2;
var marker_multiple = 1.3;//marker放大的倍数
//选中marker相关
var lastSelectIndex = -1;
var selectMarker = null;
//定位坐标经纬度
var myLoc_lat = 0.0;
var myLoc_lon = 0.0;
//屏幕中心点坐标经纬度
var center_lat = 0.0;
var center_lon = 0.0;
//屏幕中心点坐标经纬度用于计算记录
var center_lat_d = 0.0;
var center_lon_d = 0.0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      iconPath: "../../images/2.jpeg",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 30,
      height: 30
    }],
    centerLat:'000',
    centerLon:'000'
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;//初始化that
    //获取高德地图并注册key
    // amap = new aMapjs.AMapWX({ key: base.aMapKey });
    
    // 实例化API核心类
    amap = new aMapjs({
      key: 'HEKBZ-YQF3V-EQYPF-UOOEP-XPV5E-BWFS2' // 必填
    });
    //获得地图
    that.mapContext = wx.createMapContext('map');

    //获取位置信息
    that.startLoaction();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  /**
	 * 开启定位
	 */
  startLoaction: function (e) {
    wx.showLoading({
      title: '定位中',
    })
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        wx.hideLoading()
        wx.getSystemInfo({
          success: (res) => {
            // console.log('中心店：' + res.windowHeight + ' / ' + res.screenHeight);
            var centerHeight = 39;//中心点的高度
            var centerWidth = 30;//中心点的宽度
            that.setData({
              controls: [
                {
                  id: 1,//地图中心点
                  iconPath: base.icon_loc_center,
                  position: {
                    width: centerWidth,
                    height: centerHeight,
                    top: res.windowHeight / 2 - (centerHeight * 2 - 10),//距离顶部的距离要减去地图的1/2在减去图片高度的两倍再减去图片内容距离图片底部的距离
                    left: res.windowWidth / 2 - (centerWidth / 2),
                  },
                  clickable: true
                },
              ]
            })
          }
        })
        that.setData({
          longitude: res.longitude,
          latitude: res.latitude,
          scale: mapScale,
        })
        myLoc_lat = res.latitude;
        myLoc_lon = res.longitude;
        // 逆地理编码，经纬度转位置信息
        that.mapReverseGeocoding(res.latitude, res.longitude)
        //获取设备列表-全部
        lastTimestamp = Date.parse(new Date()) / 1000 - 10;
        // that.httpGetSites(0);
        // that.getOtherSites();
      },
      cancel: function (res) {
        alert('用户拒绝授权获取地理位置');
      },
      fail: () => {
        wx.hideLoading()
        that.reGetLocationpermissions();
      }
    })
  },
  //重新获取定位权限
  reGetLocationpermissions: function () {
    wx.showModal({
      title: '友情提示',
      content: '您拒绝了定位授权,导致无法正常显示定位信息,确认点击重新获取授权并开启获取“地理位置”',
      showCancel: false,
      confirmText: '重新授权',
      success: function (res) {
        if (res.confirm) {
          wx.openSetting({
            success: (res) => {
              console.log('重新授权2');
              if (res.authSetting['scope.userLocation']) {////如果用户重新同意了授权定位
                that.startLoaction();
              }

              if (res.authSetting['scope.userInfo']) {////如果用户重新同意了授权登录
                wx.getUserInfo({
                  success: function (res) {
                    that.setData({
                      userHead: res.userInfo.avatarUrl,
                      userInfo: res.userInfo,
                    })
                    that.saveUserInfo(res.userInfo);
                  }
                })
              }
            }
          })
        }
      }
    })
  },
  // 逆地理编码，经纬度转位置信息
  mapReverseGeocoding: function (lat, lon) {
    // 调用接口
    amap.reverseGeocoder({
      location: {
        latitude: lat,
        longitude: lon
      },
      success: function (res) {
        console.log(res.result.address);
        console.log(res.result.formatted_addresses.recommend);
        that.setData({
          centerLat: lat,
          centerLon: lon,
          centerAddress: res.result.address,
          centerFormatted_addresses: res.result.formatted_addresses.recommend
        })
      },
      fail: function (res) {
        console.log('获逆地理编码失败');
        console.log(res);
      },
      complete: function (res) {
        
        // console.log(res);
      }
    })
  },
  //地图中心点位置移动事件
  mapCenterMove: function (e) {
    if (e.type == 'end') {//地图移动结束后获取中心点坐标
      // console.log(e);
      
      that.mapContext.getCenterLocation({
        success: function (res) {
          // console.log('中心点移动了' + that.getlineDistance(center_lat, center_lon, res.latitude, res.longitude) + '米');
          center_lat_d = res.latitude;
          center_lon_d = res.longitude;
          console.log(res)
          console.log('当前经纬度：' + res.latitude + res.longitude)
          // 逆地理编码，经纬度转位置信息
          that.mapReverseGeocoding(res.latitude, res.longitude)
          //没有选中marker才会去刷新
          if (lastSelectIndex == -1) {
            //当前请求的时间点距离上次请求的时间点大于大少才去请求
            var currentTimestamp = Date.parse(new Date()) / 1000;
            if ((currentTimestamp - lastTimestamp) > centerMoveGetLastTime) {
              //当前移动的点距离上次请求点的距离大于多少才去请求一次 避免每次移动都需要请求
              if (that.getlineDistance(center_lat, center_lon, res.latitude, res.longitude) > centerPoniteMoveDistance) {
                // that.httpGetSites(that.data.currentTab);
                center_lat = res.latitude;
                center_lon = res.longitude;
                lastTimestamp = currentTimestamp;
                // that.getOtherSites();
              } else {
                // that.showFailToast('请求过于频繁');
              }
            } else {
              // that.showFailToast('请求过于频繁');
            }
          }
        }
      })
    }
  },
  //获取两点之间的直线距离
  getlineDistance: function (lat1, lng1, lat2, lng2) {
    lat1 = lat1 || 0;
    lng1 = lng1 || 0;
    lat2 = lat2 || 0;
    lng2 = lng2 || 0;

    var rad1 = lat1 * Math.PI / 180.0;
    var rad2 = lat2 * Math.PI / 180.0;
    var a = rad1 - rad2;
    var b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;

    var r = 6378137;
    return r * 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(rad1) * Math.cos(rad2) * Math.pow(Math.sin(b / 2), 2)))
  }
})