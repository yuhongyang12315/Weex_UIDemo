// pages/ui/login/login.js
//获取应用配置的常量
const base = getApp().constants;
var that;

//获取验证码相关
var count;
var re = /^1[3|4|5|7|8][0-9]\d{4,8}$/;
var timer;

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		icon_login_bg: base.icon_login_bg,
		phone: '',
		code: '',
		isdisable: false,
		verifyInfo: '获取验证码',
		verifyInfocolor: '#969697',
		getCodeSuc: false,
		phoneFocus: false,
		isShowToast: false,
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		that = this;
		count = 60;
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
		//重置倒计时器
		clearInterval(timer);
		that.setData({
			isdisable: false
		})
		count = 60;
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


	//手机号码输入
	phoneInput: function (e) {
		if (e.detail.value.length == 11) {
			if (!re.test(e.detail.value)) {
				wx.showModal({
					title: '错误提示',
					content: '手机号格式不正确',
					showCancel: false,
					confirmText: '我知道了',
					success: function (res) {
						if (res.confirm) {
							console.log('用户点击我知道了')
							that.setData({
								phoneFocus: true,
								phoneText: ''
							})
						}
					}
				})
			} else {
				//收起键盘
				wx.hideKeyboard()
				console.log("用户名：" + e.detail.value);
				that.setData({
					phone: e.detail.value,
					verifyInfocolor: '#F05B48'
				})
			}
		} else {
			that.setData({
				phone: e.detail.value,
				verifyInfocolor: '#969696'
			})
		}
	},

	//获取验证码
	getCode: function (e) {
		var mobile = that.data.phone;
		console.log("用户名：" + mobile);
		if (mobile == '' || mobile == null || mobile == undefined) {
			wx.showModal({
				title: '错误提示',
				content: '请输入手机号',
				showCancel: false,
				confirmText: '我知道了'
			})
		} else if (mobile.length != 11 || !re.test(mobile)) {
			wx.showModal({
				title: '错误提示',
				content: '手机号格式不正确',
				showCancel: false,
				confirmText: '我知道了'
			})
		} else {
			if (that.data.isdisable == false) {
				base.http.login({
					loading: '获取验证码',
					url: 'captcha/captcha',//请求路径
					param: {//参数 key:value
						mobile: mobile
					},
					complete: function (msg) { },
					success: function (result) {
						// wx.showToast({
						// 	title: '发送成功',
						// 	duration: base.toast_short
						// })

						// //倒计时器
						timer = setInterval(function () {
							count--;
							if (count >= 1) {
								that.setData({
									verifyInfo: count + ' s',
									verifyInfocolor: '#969696'
								})
							} else {
								that.setData({
									verifyInfo: '获取验证码',
									verifyInfocolor: '#F05B48'
								})
								clearInterval(timer);
								that.setData({
									isdisable: false
								})
								count = 60;
							}
						}, 1000);
						that.showToast('发送成功');
						that.setData({
							isdisable: true
						})
						setTimeout(function(){
							that.setData({
								getCodeSuc: true,
							})
						},2000)
						
					},
					fail: function (e) {
						// wx.showModal({
						// 	title: '错误提示',
						// 	content: e.data.sucinfo,
						// 	showCancel: false,
						// 	confirmText: '我知道了'
						// })
            console.log(e.data);
					}
				})
			}
		}
	},

	//验证码输入
	passInput: function (e) {
		//console.log("验证码：" + e.detail.value);
		if (e.detail.value.length == 6) {
			//收起键盘
			wx.hideKeyboard()
		}
		that.setData({
			code: e.detail.value,
		})
	},

	//登录
	login: function () {
		var mobile = that.data.phone;
		var code = that.data.code;
		if (mobile == '') {
			wx.showModal({
				title: '错误提示',
				content: '请输入手机号',
				showCancel: false,
				confirmText: '我知道了'
			})
		} else if (mobile.length != 11 || !re.test(mobile)) {
			wx.showModal({
				title: '错误提示',
				content: '手机号格式不正确',
				showCancel: false,
				confirmText: '我知道了'
			})
		} else if (that.data.code == '') {
			wx.showModal({
				title: '错误提示',
				content: '请输入验证码',
				showCancel: false,
				confirmText: '我知道了'
			})
		} else if (that.data.code.length != 6) {
			wx.showModal({
				title: '错误提示',
				content: '验证码格式不正确',
				showCancel: false,
				confirmText: '我知道了',
				success: function (res) {
					if (res.confirm) {
						console.log('用户点击我知道了')
						that.setData({
							getCodeSuc: true,
							codeCursor: that.data.code.length
						})
					}
				}
			})

		} else if (that.data.phone.length == 11 && re.test(that.data.phone) && that.data.code.length == 6) {
			wx.login({
				//获取用户的openid
				success: function (res) {
					if (res.code != null) {
						var js_code = res.code;
						console.log('jscode: ' + js_code)
						base.http.login({
							loading: '登录中',
							url: 'moyu/login',
							param: {
								mobile: mobile,
								code: code,
								js_code: js_code
							},
							complete: function (msg) { },
							success: function (result) {
								console.log(result);
								wx.setStorage({
									key: base.p_openID,
									data: result.data.datainfo.token == undefined ? null : result.data.datainfo.token,
									success: function () {
										console.log('setStorage openid suc');
										wx.showToast({
											title: '登录成功',
											duration: base.toast_short
										})
										//延时执行页面跳转 为了提示登录成功 好看
										setTimeout(function () {
											// wx.redirectTo({
											// 	url: base.uiPath + 'myinfo/myinfo',
											// })
											wx.reLaunch({
												url: base.uiPath + 'main/main',
											})
										}, base.toast_short);
									}, fail: function () {
										console.log('setStorage openid fail');
										wx.showModal({
											title: '登录失败',
											content: '登录失败，请重新登录',
											showCancel: false,
											confirmText: '我知道了'
										})
									}
								});
							},
							fail: function (e) {
								wx.showModal({
									title: '登录失败',
									content: e.data.sucinfo,
									showCancel: false,
									confirmText: '我知道了'
								})
							}
						});
					}
				}
			})
		}
	},

	//服务条款
	fuwu: function () {
		console.log('服务');
		wx.navigateTo({
			url: base.uiPath + 'protocal/protocal',
		})
	},

	//显示自定义toast
	showToast: function (msg) {
		that.setData({
			isShowToast: true,
			toastTip: msg,
		});
		setTimeout(
			function () {
				that.setData({
					isShowToast: false,
				})
			}, 2000
		);
	}
})