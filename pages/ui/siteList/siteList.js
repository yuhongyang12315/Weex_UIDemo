// pages/ui/siteList/siteList.js
//获取应用配置的常量
const app = getApp();
const base = getApp().constants;
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    objectArray: [
      { id: 0, siteId:'01', distance: '998m', name: '杭州智慧信息产业园杭州智慧信息产业园', address: '杭州智慧信息产业园'},
      { id: 1, siteId: '01',distance: '1408km', name: '杭州智慧信息产业园', address: '杭州智慧信息产业园'},
      { id: 2, siteId: '01', distance: '15m', name: '杭州智慧信息产业园', address: '杭州智慧信息产业园'},
      { id: 3, siteId: '01',distance: '998m', name: '杭州智慧信息产业园', address: '杭州智慧信息产业园杭州智慧信息产业园'},
      { id: 4, siteId: '01',distance: '1408km', name: '杭州智慧信息产业园', address: '杭州智慧信息产业园'},
      { id: 5, siteId: '01',distance: '15m', name: '杭州智慧信息产业园', address: '杭州智慧信息产业园'},
    ]
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
  cellAction: function (e) {
    console.log(e)
    console.log(e.currentTarget.dataset.index)

    wx.navigateTo({
      url: base.uiPath + 'siteDetails/siteDetails?siteId=' + e.currentTarget.dataset.siteId,
    })
  }
})