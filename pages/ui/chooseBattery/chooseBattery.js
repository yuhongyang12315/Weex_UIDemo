// pages/ui/chooseBattery/chooseBattery.js
//获取应用配置的常量
const app = getApp();
const base = getApp().constants;
var that;
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		state_c: 'rgba(255, 130, 0, 0.50)',//充电中背景颜色
		state_c_text: '#FFFFFF',///充电中字体颜色

		state_K: '#FFFFFF',//非充电中颜色
		state_K_text: '#999999',//非充电中字体颜色
		rightImage: base.icon_right,
		// select 0代表充电中，1代表空闲，2，代表选中
		dataArray: [
			{ id: 0, number: '0', state: '充电中' },
			{ id: 1, number: '1', state: '快充' },
			{ id: 2, number: '2', state: '充电中' },
			{ id: 3, number: '3', state: '快充' },
			{ id: 4, number: '4', state: '充电中' },
			{ id: 5, number: '5', state: '充电中' },
			{ id: 6, number: '6', state: '充电中' },
			{ id: 7, number: '6', state: '充电中' },
			{ id: 8, number: '', state: '' },
			{ id: 9, number: '', state: '' },
		],
		selectShow: '无',
		selectShowState: '无',
		timeArray: [
			{
				id: 0,
				time: '10分钟',
				money: '1.00'
			},
			{
				id: 1,
				time: '20分钟',
				money: '3.00'
			},
			{
				id: 2,
				time: '30分钟',
				money: '3.00'
			},
			{
				id: 3,
				time: '40分钟',
				money: '4.00'
			}
		],
		timeArrayIndex: 0,
		payMoney: '2.00'
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		that = this;

		that.setData({
			payMoney: that.data.timeArray[that.data.timeArrayIndex].money,
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
	batteryBoxAction: function (options) {
		// console.log(options.currentTarget.dataset.index);
		// console.log(that.data.selectShow);
		if (options.currentTarget.dataset.index == that.data.selectShow) {
			that.setData({
				selectShow: '无',
			})
		} else {
			if (that.data.dataArray[options.currentTarget.dataset.index].state != '' && that.data.dataArray[options.currentTarget.dataset.index].state != '' && that.data.dataArray[options.currentTarget.dataset.index].state != '充电中') {
				that.setData({
					selectShow: options.currentTarget.dataset.index,
					selectShowState: that.data.dataArray[options.currentTarget.dataset.index].state + ' 选中'
				})
			}
		}
		// console.log(that.data.selectShow);
	},
	TimePickerChange: function (options) {
		// console.log(options.detail.value);
		this.setData({
			timeArrayIndex: options.detail.value,
			payMoney: that.data.timeArray[options.detail.value].money

		})
	},

	//去支付
	pay: function () {
		
    wx.requestPayment({
      'timeStamp': '',
      'nonceStr': '',
      'package': '',
      'signType': 'MD5',
      'paySign': '',
      'success': function (res) {
        console.log('成功')
        wx.redirectTo({
          url: base.uiPath + 'charging/charging',
        })
      },
      'fail': function (res) {
        console.log('失败')
        wx.redirectTo({
          url: base.uiPath + 'charging/charging',
        })
      }
    })
    
	}
})

