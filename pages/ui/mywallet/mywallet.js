// pages/ui/mywallet/mywallet.js
//获取应用配置的常量
const base = getApp().constants;

Page({

  /**
   * 页面的初始数据
   */
  data: {
	  iconRight: base.icon_right,
	  headBg: base.charging,
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

  //我的优惠卷
  mycoupons: function () {
	  wx.navigateTo({
		  url: base.uiPath + 'mycoupons/mycoupons',
	  })
  },
  //我的优惠卷
  transactionDetailsAction: function () {
    wx.navigateTo({
      url: base.uiPath + 'transactionDetails/transactionDetails',
    })
  }
})