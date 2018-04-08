// pages/ui/chooseBattery/chooseBattery.js
//获取应用配置的常量
const app = getApp();
const base = getApp().constants;
var that;
Page({

	/**
	 * 页面的初始数据
	 */
  data: {
    modeType: '1',
    state_c: 'rgba(255, 130, 0, 0.50)',//充电中背景颜色
    state_c_text: '#FFFFFF',///充电中字体颜色

    state_K: '#FFFFFF',//非充电中颜色
    state_K_text: '#999999',//非充电中字体颜色

    state_K_S: '#f05b48',//选中红色
    rightImage: base.icon_right,
    //选中的index
    selectShow: '0',
    //选中的字体显示
    selectShowState: '选中',
    // select 0代表充电中，1代表空闲，2，代表选中
    dataArray: [
      // { id: 0, number: '0', state: '充电中' },
      // { id: 1, number: '1', state: '快充' },
      // { id: 2, number: '2', state: '充电中' },
      // { id: 3, number: '3', state: '快充' },
      // { id: 4, number: '4', state: '充电中' },
      // { id: 5, number: '5', state: '充电中' },
      // { id: 6, number: '6', state: '充电中' },
      // { id: 7, number: '6', state: '充电中' },
      // { id: 8, number: '', state: '' },
      // { id: 9, number: '', state: '' },
      { id: 0, number: '1', state: '' },
      { id: 1, number: '2', state: '' },
      { id: 2, number: '3', state: '' },
      { id: 3, number: '4', state: '' },
      { id: 4, number: '5', state: '' },
      { id: 5, number: '6', state: '' },
      { id: 6, number: '7', state: '' },
      { id: 7, number: '8', state: '' },
      { id: 8, number: '9', state: '' },
      { id: 9, number: '10', state: '' },
    ],
    //选中的index
    selectTimeShow: '0',
    //选中的字体显示
    selectTimeShowState: '分钟',
    timeArray: [
      { id: 0, number: '10', state: '分钟' },
      { id: 1, number: '20', state: '分钟' },
      { id: 2, number: '30', state: '分钟' },
      { id: 3, number: '40', state: '分钟' },
    ],
    erweimaString: '999900',


    // timeArray: [
    // 	{
    // 		id: 0,
    // 		time: '10分钟',
    // 		money: '1.00'
    // 	},
    // 	{
    // 		id: 1,
    // 		time: '20分钟',
    // 		money: '3.00'
    // 	},
    // 	{
    // 		id: 2,
    // 		time: '30分钟',
    // 		money: '3.00'
    // 	},
    // 	{
    // 		id: 3,
    // 		time: '40分钟',
    // 		money: '4.00'
    // 	}
    // ],
    // timeArrayIndex: 0,
    // payMoney: '2.00'
  },

	/**
	 * 生命周期函数--监听页面加载
	 */
  onLoad: function (options) {
    that = this;

    // that.setData({
    // 	payMoney: that.data.timeArray[that.data.timeArrayIndex].money,
    // })
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
  //九宫格点击事件
  batteryBoxAction: function (options) {
    // console.log(options.currentTarget.dataset.index);
    // console.log(that.data.selectShow);
    // 选中同一个，取消选中状态
    if (options.currentTarget.dataset.index == that.data.selectShow) {
      that.setData({
        selectShow: '无',
      })
    } else {
      //判断点击的是不是，‘’与‘充电中’的空格，不需要别的操作
      // if (that.data.dataArray[options.currentTarget.dataset.index].state != '充电中') {
      that.setData({
        selectShow: options.currentTarget.dataset.index,
        selectShowState: that.data.dataArray[options.currentTarget.dataset.index].state + ' 选中'
      })
      // }
    }
    console.log(that.data.selectShow);
  },
  //时间选择事件
  batteryTimeBoxAction: function (options) {
    // console.log(options.currentTarget.dataset.index);
    // console.log(that.data.selectShow);
    // 选中同一个，取消选中状态
    if (options.currentTarget.dataset.index == that.data.selectTimeShow) {
      that.setData({
        selectTimeShow: '无',
      })
    } else {

      that.setData({
        selectTimeShow: options.currentTarget.dataset.index,
        selectTimeShowState: that.data.timeArray[options.currentTarget.dataset.index].state
      })

    }
    console.log(that.data.timeArray[options.currentTarget.dataset.index].number);
  },
  //发送方式选择
  modeAction: function (e) {

    console.log(e.currentTarget.dataset.modeindex)
    that.setData({
      modeType: e.currentTarget.dataset.modeindex
    })
  },
  clickErWeiMa: function (e) {

    // 允许从相机和相册扫码
    wx.scanCode({
      scanType: ['qrCode', 'datamatrix', 'barCode', 'pdf417'],
      success: (res) => {
        console.log(res)
        var arr = res.result.split('/')
        console.log(arr[arr.length - 1])
        console.log(arr[arr.length - 1].length)
        that.setData({
          erweimaString: arr[arr.length - 1]
        })
      },
      fail: () => {
        console.log('失败')
      }
    })
  },
  testAction: function (e) {
    that = this;
    console.log(that.data.erweimaString)
    console.log(that.data.dataArray[that.data.selectShow].number)
    console.log(that.data.timeArray[that.data.selectTimeShow].number)
    console.log(e.currentTarget.dataset.action_type)
    console.log(that.data.modeType)
    if (that.data.erweimaString.length == 0) {
      wx.showModal({
        title: '提示',
        content: '请扫描设备二维码',
        showCancel: false,
        confirmText: '我知道了',
        success: function (res) {
          if (res.confirm) {

          }
        }
      })
      return;
    }
    base.http.post({
      loading: '加载中',
      url: 'fix/trecharge',
      param: {
        qrcode: that.data.erweimaString,
        port_id: that.data.dataArray[that.data.selectShow].number,
        time: that.data.timeArray[that.data.selectTimeShow].number,
        action_type: e.currentTarget.dataset.action_type,
        mode: that.data.modeType,
      },
      complete: function (msg) {
        wx.hideLoading();
      },
      success: function (result) {
        console.log(result);
        wx.showModal({
          title: '提示',
          content: '测试成功',
          showCancel: false,
          confirmText: '我知道了',
          success: function (res) {
            if (res.confirm) {

            }
          }
        })
        // that.setData({
        //   that.data.dataArray[that.data.selectShow].state:'充电中'
        // })
        if (e.currentTarget.dataset.action_type == 1) {
          var daArray = [];
          for (var index = 0; that.data.dataArray.length > index; index++) {
            if (index == that.data.selectShow) {
              that.data.dataArray[index].state = '充电中'
              daArray.push(that.data.dataArray[index])
            } else {
              daArray.push(that.data.dataArray[index])
            }
          }
          console.log(daArray)
          that.setData({
            dataArray: daArray
          })
        }
        if (e.currentTarget.dataset.action_type == 2) {
          var daArray = [];
          for (var index = 0; that.data.dataArray.length > index; index++) {
            if (index == that.data.selectShow) {
              that.data.dataArray[index].state = ''
              daArray.push(that.data.dataArray[index])
            } else {
              daArray.push(that.data.dataArray[index])
            }
          }
          console.log(daArray)
          that.setData({
            dataArray: daArray
          })
        }
        if (e.currentTarget.dataset.action_type == 3) {
          var daArray = [];
          for (var index = 0; that.data.dataArray.length > index; index++) {
              that.data.dataArray[index].state = '充电中'
              daArray.push(that.data.dataArray[index])
          }
          console.log(daArray)
          that.setData({
            dataArray: daArray
          })
        }
        if (e.currentTarget.dataset.action_type == 4) {
          var daArray = [];
            that.data.dataArray[index].state = ''
            daArray.push(that.data.dataArray[index])
        }

      },
      fail: function (e) {
        wx.showModal({
          title: '提示',
          content: '测试失败',
          showCancel: false,
          confirmText: '我知道了',
          success: function (res) {
            if (res.confirm) {

            }
          }
        })
      }
    })

  },
  equipmentTestAction:function(e) {
    if (that.data.erweimaString.length == 0) {
      wx.showModal({
        title: '提示',
        content: '请扫描设备二维码',
        showCancel: false,
        confirmText: '我知道了',
        success: function (res) {
          if (res.confirm) {

          }
        }
      })
      return;
    }
    wx.navigateTo({
      url: base.uiPath + 'equipmentTest/equipmentTest?qrcode=' + that.data.erweimaString,
  })
  }

})

