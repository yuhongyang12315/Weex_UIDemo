//app.js
var http = require('/utils/http.js');//网络请求
var util = require('/utils/util.js');//工具js

App({
	onLaunch: function () {

		// 展示本地存储能力
		var logs = wx.getStorageSync('logs') || []
		logs.unshift(Date.now())
		wx.setStorageSync('logs', logs)

		// 登录
		wx.login({
			success: res => {
				// 发送 res.code 到后台换取 openId, sessionKey, unionId
			}
		})
		// 获取用户信息
		wx.getSetting({
			success: res => {
				if (res.authSetting['scope.userInfo']) {
					// 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
					wx.getUserInfo({
						success: res => {
							// 可以将 res 发送给后台解码出 unionId
							this.globalData.userInfo = res.userInfo

							// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
							// 所以此处加入 callback 以防止这种情况
							if (this.userInfoReadyCallback) {
								this.userInfoReadyCallback(res)
							}
						}
					})
				}
			}
		})
	},
	globalData: {
		userInfo: null
	},
	//一些全局配置
  // var http = require('/utils/http.js');//网络请求
  // var util = require('/utils/util.js');//工具js
	constants: {
		aMapKey: 'ebdf40e732c16c7f84c29a088a1cd2d1',//高德地图appkey
    //暴露封装的网络js，http.js,(赋值在上面)
		http: http,
    //暴露封装的工具js，util.js(赋值在上面)
		util: util,
		//本地存储
		p_loginStatus: 'moyu_loginStatus',//登录状态
		p_openID: http.token,//openid
		p_userInfo: 'moyu_c_userInfo',//用户信息
		p_selectCoupons: 'moyu_c_selectcoupons',//用户选择的优惠券
		//一些常用的判断值
		login_status_true: 'true',//已登录
		login_status_false: 'false',//未登录
		//UI路径下引用资源base路径
		resPath: '../../../resources/',
		uiPath: '../',
		//Toast时间
		toast_short: http.toast_short,
		toast_lang: http.toast_long,
		//一些常用的图片资源路径
    icon_login_bg: '../../images/icon_login_bg.png',
    icon_loc_center: '../../../resources/icon_loc_center.png',
    // charging: '../../../resources/charging.png',
    icon_all: '../../../resources/icon_all.png',
    icon_kuai: '../../../resources/icon_kuai.png',
    icon_man: '../../../resources/icon_man.png',
    icon_other: '../../../resources/icon_other.png',
    // icon_login_bg: '../../../resources/icon_login_bg.png',
    icon_search: '../../../resources/icon_search.png',
    icon_right: '../../../resources/icon_right.png',
    // icon_loc_center: '../../../resources/icon_loc_center.png',
    icon_result_sucess: '../../../resources/icon_result_sucess.png',
    icon_head_n: '../../../resources/icon_head.png',
    icon_all_p: '../../../resources/icon_all_p.png',
    icon_all_n: '../../../resources/icon_all_n.png',
    icon_kuai_p: '../../../resources/icon_kuai_p.png',
    icon_kuai_n: '../../../resources/icon_kuai_n.png',
    icon_man_p: '../../../resources/icon_man_p.png',
    icon_man_n: '../../../resources/icon_man_n.png',
    charging: '../../../resources/charging.png',
    icon_warning: '../../../resources/icon_warning.png',
    icon_address: '../../../resources/icon_address.png',
    icon_tel: '../../../resources/icon_tel.png',
    icon_elec: '../../../resources/icon_elec.png',
    navigation: '../../../resources/navigation.png',
    icon_r_r: '../../../resources/icon_round_red.png',
    icon_r_g: '../../../resources/icon_round_gray.png',
    icon_right_red: '../../../resources/icon_right_red.png',
    mywallet_bg: '../../../resources/wallet_bg.png',
    icon_help: '../../../resources/icon_help.png',
    icon_login: '../../images/logo.png',
		//客服电话
		service_phone: '4008331806',
	},
})