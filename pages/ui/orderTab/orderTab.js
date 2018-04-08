// pages/ui/orderTab/orderTab.js
//获取应用配置的常量
const base = getApp().constants
var that;
var order_id = '';
var IsRefresh = false;
var stat = '0'

//下拉刷新下拉加载更多相关
var moveTop = true;
var Refresh = false;//是否执行刷新
var loadMore = false;//是都执行加载更多
//记录touch开始坐标y轴
var touchStartY;
var touchStartX = -100;

//未出账单
var orderArrays = new Array();
var currentPage = 1;

var searchState = 0;//默认搜全部订单 1搜今日订单

var oldFind = '';//记录上一次搜索的值

//获取应用实例
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
    datas: [{ addtime: "2018-02-25 16:38:06", id: 1002124, mobile: "18061999000", pay_stat: "0", pay_time: "0", qrcode: "1000000794", ride: "1", shop_money: 0, stat: "3", total_amount: "0.00", trip_journey: "6,079,138.80", trip_times: 25329745, user_id: "2507", user_name: "厉开波" }, { addtime: "2018-02-25 16:38:06", id: 1002124, mobile: "18061999000", pay_stat: "1", pay_time: "0", qrcode: "1000000794", ride: "3", shop_money: 0, stat: "3", total_amount: "0.00", trip_journey: "6,079,138.80", trip_times: 25329745, user_id: "2507", user_name: "厉开波" }]

    
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		console.log(options.stat)
		that = this;
		searchState = 0;

		//初始化数据
		//下拉刷新下拉加载更多相关
		moveTop = true;
		Refresh = false;//是否执行刷新
		loadMore = false;//是都执行加载更多
		//记录touch开始坐标y轴
		touchStartX = -100;
		//账单列表相关
		orderArrays = new Array();
		currentPage = 1;

		stat = options.stat;
		/**
			* 修改title
			*/
		if (stat == 1) {
			searchState = 1;
			wx.setNavigationBarTitle({
				title: '今日订单',
			})
		}

	},
	// 输入框数据获取
	inputText: function (options) {

		console.log(options.detail.value)
		var text = '';
		if (options.detail.value == null || options.detail.value == '' || options.detail.value == undefined) {
			text = '';
		} else {
			text = options.detail.value;
		}

		this.setData({
			inputText: text
		})
	},
	// 搜索点击
	cancelAction: function (options) {
		wx.navigateBack({});
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
		orderArrays = new Array();
    // 初始化页面数据
		// that.httpGetOrders(currentPage, false, false, that.data.inputText);
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

	search: function (e) {
		//当搜索的内容不同时 currentPage初始化为1
		if (oldFind != that.data.inputText){
			currentPage = 1;
		}
		that.httpGetOrders(currentPage, false, false, that.data.inputText);
	},
	//搜索订单信息
	httpGetOrders: function (page, isRefresh, isLoadMore, find) {
		that = this;
		wx.getStorage({
			key: base.p_openID,
			success: function (res) {
				var token = res.data;
				if (token != null) {
					//所有订单加载
					wx.showLoading({
						title: '加载中...',
					})
					console.log("参数：" + token + "/" + page + "/" + find + "/" + searchState);
					wx.request({
						url: base.baseUrl + 'shops/findlist?timestamp' + Date.parse(new Date()),
						data: {
							'_tk': token,
							'page': page,
							'find': find,
							'find_type': searchState
						},
						method: 'POST',
						header: {
							"Content-Type": "application/x-www-form-urlencoded"
						},
						complete: function (msg) {
							wx.hideLoading();
							if (isRefresh) {
								touchStartX == -100;
								Refresh = false;
								that.setData({
									loadRefresh: false,
								})
							}
						},
						success: function (res) {
							console.log(res);
							//如果是加载更多并成功请求后 currentPage+1
							if (isLoadMore) {
								loadMore = false;
								that.setData({
									loadMore: false,
									loadMoreEnd: true,
								})

								if (res.data.code == 2000) {
									++currentPage;
									console.log("page + 1////" + currentPage);
								}
							}

							if (res.data.code == 2000) {

								if (isRefresh) {
									orderArrays = new Array();
								}else if(oldFind != find){
									orderArrays = new Array();
								}
								//添加数据
								for (var i = 0; i < res.data.datainfo.dataList.length; i++) {
									orderArrays.push(res.data.datainfo.dataList[i]);
								}
								console.log("数组长度" + orderArrays.length);

								that.setData({
									datas: orderArrays,
									allPage: res.data.datainfo.totalPage,
								});
								console.log(orderArrays.length);

								oldFind = find;
							} else if (res.data.code == 1015) {
								wx.showToast({
									title: '去登陆',
									duration: base.toast_short
								})
								wx.reLaunch({
									url: base.uiPath + 'loading/loading',
								})
							} else if (res.data.code == 1011) {
								that.setData({
									datas: [],
									allPage: 1,
								});
							} else {
								wx.showToast({
									title: '无订单信息',
									duration: base.toast_short
								})
								that.setData({
									orderArrays: []
								});
							}
						},
						fail: function () {
							console.log('fail')
							//如果是加载更多请求失败 提示加载失败 currentpage不加1
							if (isLoadMore) {
								loadMore = false;
								that.setData({
									loadMore: false,
									loadMoreEnd: true,
								})
							}

							wx.showToast({
								title: '加载失败',
								duration: base.toast_short
							})
						},
					})
				} else {
					wx.showToast({
						title: '去登陆',
						duration: base.toast_short
					})
					wx.reLaunch({
						url: base.uiPath + 'loading/loading',
					})
				}
			},
			// 获取openid失败，重新登录
			fail: function (e) {
				wx.reLaunch({
					url: base.uiPath + 'loading/loading',
				})
			}
		})
	},

	//下拉刷新上拉加载相关
	//滑动到顶部事件
	scrolltop: function (e) {
		moveTop = true;
	},

	//滑动到底部事件
	scrollbottom: function (e) {
		if (Refresh) {
			wx.showToast({
				title: '正在刷新，请稍后再试',
			})
		} else {
			if (!that.data.loadMore) {
				if (currentPage <= that.data.allPage) {
					console.log('到底部了');
					loadMore = true;
					that.setData({
						loadMore: true,
						loadMoreEnd: true,
					})

					//加载第二页数据
					if (that.data.loadMoreEnd) {
						that.httpGetOrders(currentPage + 1, false, true, that.data.inputText);
						that.setData({
							loadMoreEnd: false,
						})
					}
				} else {//显示已加载所有
					that.setData({
						loadMoreNoData: true,
					})
				}
			}
		}
	},

	//滑动view 滑动事件
	scroll: function (e) {
		if (e.detail.scrollTop == 0) {
			moveTop = true;
			// console.log('到顶部了' + moveTop);
		} else {
			moveTop = false;
			// console.log('离开顶部了' + moveTop);
		}
	},

	//滑动事件开始记录滑动开始点
	touchStart: function (e) {
		// console.log(e)
		touchStartY = e.touches[0].pageY;
	},

	//滑动事件
	touchMove: function (e) {
		if (moveTop && e.touches[0].pageY > touchStartY && (e.touches[0].pageY - touchStartY) > 100 && !Refresh) {
			if (touchStartX == -100) {
				touchStartX = e.touches[0].pageX;
			}
			Refresh = true;
			that.setData({
				loadRefreshTip: true,
			})
		}
	},

	//滑动事件结束 刷新
	touchEnd: function (e) {
		if (loadMore) {
			wx.showToast({
				title: '正在加载更多，请稍后重试',
			})
		} else {
			if (moveTop && Refresh) {
				that.setData({
					loadRefreshTip: false,
					loadRefresh: true,
				})
				currentPage = 1;
				that.httpGetOrders(currentPage, true, false, that.data.inputText);

			}
		}
	},

	//确认还车按钮
	sureBikebtn: function (e) {
		that = this;
		wx.getStorage({
			key: base.p_openID,
			success: function (res) {
				var token = res.data;
				if (token != null) {
					//所有订单加载
					wx.showLoading({
						title: '加载中',
					})
					wx.request({
						url: base.baseUrl + 'shops/back?timestamp' + Date.parse(new Date()),
						data: {
							'_tk': token,
							'trip_id': e.currentTarget.dataset.id,
							'qrcode': e.currentTarget.dataset.tid,
						},
						method: 'POST',
						header: {
							"Content-Type": "application/x-www-form-urlencoded"
						},
						complete: function () {
							wx.hideLoading();
						},
						success: function (res) {
							console.log(res);
							if (res.data.code == 2000) {
								wx.navigateTo({
									url: base.uiPath + 'returnBikeInformation/returnBikeInformation?id=' + res.data.datainfo.id,
								})
							} else if (res.data.code == 1015) {
								wx.showToast({
									title: '去登陆',
									duration: base.toast_short
								})
								wx.reLaunch({
									url: base.uiPath + 'loading/loading',
								})
							} else if (res.data.code == 1009) {
								wx.showModal({
									title: '提示',
									content: '请先关锁',
									showCancel: false,
									confirmText: '我知道了'
								})
							} else {
								wx.showModal({
									title: '提示',
									content: res.data.sucinfo,
									showCancel: false,
									confirmText: '我知道了'
								})
							}
						},
						fail: function () {
							console.log('请求失败')
						}
					})
				} else {
					wx.showToast({
						title: '去登陆',
						duration: base.toast_short
					})
					wx.reLaunch({
						url: base.uiPath + 'loading/loading',
					})
				}
			},
			// 获取openid失败，重新登录
			fail: function (e) {
				wx.reLaunch({
					url: base.uiPath + 'loading/loading',
				})
			}
		})

	},

})
