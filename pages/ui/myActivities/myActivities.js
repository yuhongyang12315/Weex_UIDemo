// pages/myActivities/myActivities.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //控制展示页
    currentIndex: 0,
    navColor_p: '#00C87D',//tab选中颜色
    navLineColor_n: '#ffffff',//未选中的线颜色
    navLineHeight_n: 0,//tab线未选中高度
    navLineHeight_p: 6,//tab线选中高度
    titleArray: [
      { id: 0, title: '报名中' },
      { id: 1, title: '进行中' },
      { id: 2, title: '已结束' },

    ],
    activitys: [
      {
        id: 1,
        name: '赏秋之季，环西湖一日骑游',
        place: '西湖区满觉陇路24号西湖区满觉陇路24号',
        type: 1,
        fullType: 1,//满额
        enrolcount: 10,
        monty: 98,
      },
      {
        id: 2,
        name: '赏秋之季，环西湖一日骑游',
        place: '西湖区满觉陇路25号西湖区满觉陇路24号',
        type: 2,
        fullType: 0,
        enrolcount: 10,
        monty: 98,
      },
      {
        id: 3,
        name: '赏秋之季，环西湖一日骑游',
        place: '西湖区满觉陇路25号西湖区满觉陇路24号',
        type: 3,
        fullType: 0,
        enrolcount: 10,
        monty: 98,
      },
      {
        id: 4,
        name: '赏秋之季，环西湖一日骑游',
        place: '西湖区满觉陇路25号西湖区满觉陇路24号',
        type: 1,
        fullType: 0,
        enrolcount: 10,
        monty: 98,
      },
      {
        id: 5,
        name: '赏秋之季，环西湖一日骑游',
        place: '西湖区满觉陇路25号西湖区满觉陇路24号',
        type: 1,
        fullType: 0,
        enrolcount: 10,
        monty: 98,
      },
      {
        id: 6,
        name: '赏秋之季，环西湖一日骑游',
        place: '西湖区满觉陇路25号西湖区满觉陇路24号',
        type: 1,
        fullType: 0,
        enrolcount: 10,
        monty: 98,
      }
    ],
    
  
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
  //处理title点击
  indexAction: function (e) {

    console.log(e.currentTarget.dataset.index)
    this.setData({
      currentIndex: e.currentTarget.dataset.index
    })

  }
})