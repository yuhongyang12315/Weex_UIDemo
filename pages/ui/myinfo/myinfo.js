// pages/ui/myinfo/myinfo.js
//获取应用配置的常量
const app = getApp();
const base = getApp().constants;
var that;

Page({

  /**
   * 页面的初始数据
   */
  data: {
	  iconRight: base.icon_right,
	  userHead: base.icon_head_n,
	  userName: '***',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  console.log(app.globalData.userInfo)
	  that = this;
	  that.setData({
		  userHead: app.globalData.userInfo.avatarUrl,
		  userName: app.globalData.userInfo.nickName,
	  })
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
  //我的订单
  myOrder: function (){
	  wx.navigateTo({
		  url: base.uiPath + 'myorder/myorder',
    })
  },
  //我的钱包
  myWallte: function () {
	  wx.navigateTo({
		  url: base.uiPath + 'mywallet/mywallet',
	  })
  },
  //我的客服
  myService: function () {
	  wx.makePhoneCall({
		  phoneNumber: base.service_phone,
		  success: function () {
			  console.log('拨打电话成功！')
		  },
		  fail: function () {
			  console.log('拨打电话失败！')
		  }
	  })
  },
  //我要合作
  addCoop: function () {
	  wx.navigateTo({
		  url: base.uiPath + 'cooperation/cooperation',
	  })
  },
  //使用说明
  useTip: function () {
	  wx.navigateTo({
		  url: base.uiPath + 'myhelp/myhelp?navTitle=使用说明',
	  })
  }
})