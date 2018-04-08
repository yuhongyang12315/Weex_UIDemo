// pages/ui/siteDetails/siteDetails.js
//获取应用配置的常量
const app = getApp();
const base = getApp().constants;
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    icon_address: base.icon_address,
    navigation: base.navigation,
    icon_tel: base.icon_tel,
	  icon_elec: base.icon_elec,
    equipmentNumber:'003',
    distance:'345米',
    name:'杭州智慧信息产业园杭州智慧信息产业园',
    address:'杭州智慧信息产业园慧信息产业园杭州智慧信息产业园',
    phoneNumber:'0517-89304789',
    state:'快充',
    freebattery:'2',
    usebattery:'1',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  navigationAction: function () {
    wx.openLocation({
      latitude: 30.27339933753095,
      longitude: 120.1551987460327,
      scale: 16,//缩放比例
      name: '啦啦啦啦',//终点名称
      address: '我是地址说明哟',//终点地址详细说明
    })
  },
  useTip: function () {
    console.log('使用说明');
    wx.navigateTo({
      url: base.uiPath + 'myhelp/myhelp?navTitle=使用说明',
    })
  }
})