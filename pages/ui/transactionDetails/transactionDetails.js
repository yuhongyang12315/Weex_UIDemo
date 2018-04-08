// pages/ui/transactionDetails/transactionDetails.js
const app = getApp();
const base = getApp().constants;
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArray: [
      { id: 0, siteId: '01', name: '杭州智慧信息产业园杭州智慧杭州智慧信息产业杭州智慧信息产业信息产业园', equipmentNumber: '003', payMoney: '13.50', tradTime: '2017.09.05  09:30'},
      { id: 1, siteId: '01', name: '杭州智慧信息产业园', equipmentNumber: '003', payMoney: '13.50', tradTime: '2017.09.05  09:30' },
      { id: 2, siteId: '01', distance: '15m', name: '杭州智慧信息产业园', equipmentNumber: '003', payMoney: '13.50', tradTime: '2017.09.05  09:30'},
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
  
  }
})