// pages/ui/main/main.js
const app = getApp();
const base = getApp().constants;
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // select 0代表充电中，1代表空闲，2，代表选中
    dataArray: [
      // { id: 0, name: '我的活动', url: 'myActivities/myActivities' },
      { id: 0, name: '登陆', url: 'loginTwo/loginTwo' },
      { id: 1, name: '云马运营商', url: 'operators/operators' },
      { id: 2, name: '云马骑行币', url: 'ridingCoin/ridingCoin' },
      { id: 3, name: '周边玩乐', url: 'characteristicsList/characteristicsList' },
      { id: 4, name: '地图工具', url: 'mapTool/mapTool' },
      { id: 5, name: '登陆', url: 'login/login' },
      { id: 6, name: '充电选择', url: 'chooseBattery/chooseBattery' },
      { id: 7, name: '运维测试', url: 'testEquipment/testEquipment' },
      { id: 8, name: '充电中', url: 'charging/charging' },
      { id: 9, name: '站点详情', url: 'siteDetails/siteDetails' },
      { id: 10, name: '站点列表', url: 'siteList/siteList' },
      { id: 11, name: '我的订单', url: 'myorder/myorder' },
      { id: 12, name: '我的钱包', url: 'mywallet/mywallet' },
      { id: 13, name: '我的优惠券', url: 'mycoupons/mycoupons' },
      
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
    console.log(e.currentTarget.dataset.url)
    // wx.showModal({
    //   title: '你觉得',
    //   content: '子璇是傻子吗？',
    //   cancelText:'不是',
    //   confirmText: '是',
    //   success: function (res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
          wx.navigateTo({
            url: base.uiPath + e.currentTarget.dataset.url
          })
    //     } else if (res.cancel) {
    //       wx.showToast({
    //         image: base.icon_warning,
    //         title: '请点击【是】',
    //       })
    //     }
    //   }
    // })
    
  }

})