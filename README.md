# moyu_c
微信小程序——摩鱼

```
utils 中的http.js 包装了get和post请求 做了统一的处理  一些必要的常量放在了http.js中定义  使用
// 导出模块
module.exports = {
	get: httpGet,
	post: httpPost,
	toast_short: toast_short,
	toast_long: toast_long,
}
导出该js中的一些方法和常量


在app.js中使用以下方法引入http.js
var http = require('/utils/http.js');//网络请求


在请求是code为2000才会回调success  否则其他都回调fail  页面可以在fail方法中做出来

post请求实例
//post请求	
base.http.post({
	loading: '加载中',
	url:'shops/login',//请求路径
	param: {//参数 key:value
		mobile: '13675843980',
		code: '123456',
		js_code: '1323123213'
	},
	complete: function (msg) {
		//接口调用完成后执行（不论接口请求成功还是失败）
		console.log('complete');
		console.log(msg);
	},
	success: function (result) {
		//只有code为2000的时候才会回调success否则回调fail
		console.log('success');
		console.log(result);
	},
	fail: function (e) {
		//接口调用失败
		console.log('fail');
		console.log(e);
	}
})
```