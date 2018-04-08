// pages/ui/mycoupons/mycoupons.js
//获取应用配置的常量
const base = getApp().constants;

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		iconWarning: base.icon_warning,
		datas: [
			{
				id: 10001,
				name: '优惠券',
				money: 5,
				lastTime: '2017.12.12',
				confine: '仅限xxxxxxxx使用'
			},
			{
				id: 10002,
				name: '优惠券2',
				money: 15,
				lastTime: '2017.12.12',
        confine: '仅限xxxxxxxx使用'
			},
			{
				id: 10003,
				name: '优惠券2',
				money: 15,
				lastTime: '2017.12.12',
        confine: '仅限xxxxxxxx使用'
			},
			{
				id: 10004,
				name: '优惠券2',
				money: 15,
				lastTime: '2017.12.12',
        confine: '仅限xxxxxxxx使用'
			},
			{
				id: 10005,
				name: '优惠券2',
				money: 15,
				lastTime: '2017.12.12',
        confine: '仅限xxxxxxxx使用'
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

	}
})