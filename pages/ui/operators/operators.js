
var that;
Page({

	/**
	 * 页面的初始数据
	 */
  data: {
    floatBtn: false,//悬浮球显示
    dialogShow: true,//提示弹窗是否显示
    cityDialogShow: false,//城市选择弹窗是否显示
    selectedType: '全部',//当前选中筛选条件
    citySelected: '杭州',//默认城市选择
    citySelectedId: 1,//默认城市下标
    selectArrays: [
      {
        id: 1,
        name: '全部',
        selected: true,
      },
      {
        id: 2,
        name: '报名中',
        selected: false,
      },
      {
        id: 3,
        name: '进行中',
        selected: false,
      },
      {
        id: 4,
        name: '已结束',
        selected: false,
      },
    ],
    cityArrays: [
      {
        id: 1,
        name: '杭州'
      }, {
        id: 2,
        name: '成都'
      }, {
        id: 3,
        name: '银川'
      }
       
    ]
  },

	/**
	 * 生命周期函数--监听页面加载
	 */
  onLoad: function (options) {
    that = this;
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

  //隐藏dialog
  hideDialog: function () {
    that.setData({
      dialogShow: false,
      floatBtn: true,
    })
  },

  //显示dialog
  floatBtn: function () {
    that.setData({
      dialogShow: true,
      floatBtn: false,
    })
  },

  //显示状态赛选
  selectBtn: function () {
    that.setData({
      selectDialogShow: true,
    })
  },

  //筛选状态item点击
  selectTypeClick: function (e) {
    var selectedId = e.currentTarget.dataset.idx;
    var selectedName = e.currentTarget.dataset.sname;

    var newSelectedArrays = new Array();
    for (var i = 0; i < that.data.selectArrays.length; i++) {
      var sle = that.data.selectArrays[i];
      if (sle.id == selectedId) {
        sle.selected = true;
      } else {
        sle.selected = false;
      }
      newSelectedArrays.push(sle);
    }

    that.setData({
      selectDialogShow: false,
      selectedType: selectedName,//当前选中筛选条件
      selectArrays: newSelectedArrays,
    })
  },

  //点击城市选择
  cityBtn: function () {
    that.setData({
      cityDialogShow: true,
    })
  },

  //城市item选择
  cityItemClick: function (e) {
    var cityId = e.currentTarget.dataset.id;
    var cityName = e.currentTarget.dataset.name;
    console.log(cityId + '/' + cityName);

    that.setData({
      citySelected: cityName,
      citySelectedId: cityId,
      cityDialogShow: false,
    })
  },

  //点击活动item
  cilckItem: function (e) {
    wx.navigateTo({
      url: '../activityinfo/activityinfo',
    })
  }


})