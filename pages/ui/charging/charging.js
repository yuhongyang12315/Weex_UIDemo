// pages/ui/charging/charging.js
//获取应用配置的常量
const base = getApp().constants;
var that;
//倒计时相关
var counTime = 60 * 10;//倒计时总时长
var timer;//计时器
var strM = ''//分
var strS = ''//秒

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		orderNo: '10000001',
		charging: base.charging,
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		that = this;
		that.countdown();
		//计时开始 后面的1000是毫秒 每1000毫秒跳一次  
		timer = setInterval(that.countdown, 1000);
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
		counTime = 30;
		clearInterval(timer);
		timer = null;
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

	//倒计时
	countdown() {
		//分  
		strM = this.zeroFill('' + parseInt(counTime / 60 % 24), 2)
		//秒  
		strS = this.zeroFill('' + parseInt(counTime % 60), 2)
		//赋值给text内容  
		that.setData({
			timeText: strM + ':' + strS
		})
		//当时间归零停止计时器  
		if (counTime == 0) {
			clearInterval(timer);
			//去充电成功页面
			wx.redirectTo({
				url: base.uiPath + 'resultPage/resultPage?messageTitle=充电成功&messageText=充电成功',
			})
			return;
		}
		//每秒递减  
		counTime--;
	},

	//字符串补0
	zeroFill(str, n) {
		//补零方法，str为数字字符串 n为需要的位数，不够补零  
		if (str.length < n) {
			str = '0' + str
		}
		return str
	}
})