// pages/ui/chooseBattery/chooseBattery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    objectArray: [
      { id: 0, imageUrl: '../../images/ten.png', name: '我的商家' },
      { id: 1, imageUrl: '../../images/twelve.png', name: '站点信息' },
      { id: 2, imageUrl: '../../images/eleven.png', name: '新点录入' },
      { id: 3, imageUrl: '../../images/three.png', name: '故障告警' },
      { id: 4, imageUrl: '../../images/four.png', name: '故障上报' },
      { id: 5, imageUrl: '../../images/seven.png', name: '设备测试' },

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
  batteryBoxAction: function (options) {

    console.log(options.currentTarget.dataset.index);
  }

})