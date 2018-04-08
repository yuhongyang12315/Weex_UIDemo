// pages/characteristicsList/characteristicsList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleArray: [
      { id: 0, title: '推荐' },
      { id: 1, title: '景点' },
      { id: 2, title: '美食' },
      { id: 3, title: '特色小吃' },
      { id: 4, title: '温泉' },
      { id: 5, title: '游泳馆' },
      { id: 6, title: '特色小镇' },
      { id: 7, title: '其它' },
      { id: 8, title: '温泉' },
      { id: 9, title: '游泳馆' },
      { id: 10, title: '特色小镇' },
      { id: 11, title: '其它' },

    ],
    //控制展示页
    currentIndex: 0,
    navColor_p: '#00C87D',//tab选中颜色
    navLineColor_n: '#ffffff',//未选中的线颜色
    navLineHeight_n: 0,//tab线未选中高度
    navLineHeight_p: 7,//tab线选中高度
    normalSrc: '../../images/star_n.png',
    selectedSrc: '../../images/star_s.png',
    halfSrc: '../../images/star_b.png',
    features: [
      {
        id: 1,
        stars: 3.5,
        name: '什么鬼什么鬼什么鬼什么鬼什么鬼什么鬼什么鬼什么鬼',
        address: '杭州哪里我也不知道杭州哪里我也不知道'
      },
      {
        id: 2,
        stars: 4.5,
        name: '什么鬼',
        address: '杭州哪里我也不知道杭州哪里我也不知道'
      }
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
  indexAction: function (e) {
    
    console.log(e.currentTarget.dataset.index)
    this.setData({
      currentIndex: e.currentTarget.dataset.index
    })

  },
  SwiperChange: function (e) {

    console.log(e.detail.current)
    this.setData({
      currentIndex: e.detail.current
    })
  }
})