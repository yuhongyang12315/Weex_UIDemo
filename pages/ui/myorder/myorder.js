// pages/ui/myorder/myorder.js
//获取应用配置的常量
const base = getApp().constants;

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		iconRight: base.icon_right_red,
		icon_r_r: base.icon_r_r,
		icon_r_g: base.icon_r_g,
		datas: [
			{
				id: 1,
				orderType: 0,
				siteName: '杭州鸟山明站点杭州智慧产业园站点杭州智慧产业园站点杭州智慧产业园站点',
				time: '2017.09.05  13:30',
				money: 10,
				totaltime: 10,
			}, 
			{
				id: 2,
				orderType: 1,
				siteName: '杭州万山站点',
				time: '2017.09.05  13:30',
				money: 10,
				totaltime: 10,
			},
			{
				id: 3,
				orderType: 2,
				siteName: '杭州智慧产业园站点',
				time: '2017.09.05  13:30',
				money: 10,
				totaltime: 10,
			},
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