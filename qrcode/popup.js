
var backgroundPageConnection = chrome.runtime.connect({name: "devtools-page"});

backgroundPageConnection.onMessage.addListener(function (message) {
	//获得消息
});

window.addEventListener("load", function() {
    chrome.tabs.query({
        currentWindow: true,
        active: true
    }, function(tabs) {
    	initQrcode(tabs[0].url)
    })
});
var initQrcode = function(url) {
	var pre = {
		'web': url,
		'map': 'baidumap://map/cost_share?url=' + url,
        'carowner': 'baidumap://map/component?comName=carowner&target=open_web_page&popRoot=no&param=' +
        encodeURIComponent(JSON.stringify({'url':url, 'from':"chrome-qrcode", "showShare":"0"})),
        'shoubai': 'baiduboxapp://v1/easybrowse/open?url=' + encodeURIComponent(url),
		'nuo': 'bainuo://component?url=' + encodeURIComponent(url),
		'nuoweb': 'bainuo://web?url=' + encodeURIComponent(url),
        'lbc': 'baidumap://map/component?comName=lbc&target=webshell_login_page&param=' +
        encodeURIComponent(JSON.stringify({'url':url})),
	};
	// 正常浏览器url
	jQuery('#qrcodeWeb').qrcode({
		text: pre.web
	});

	// 百度地图url 
	jQuery('#qrcodeMap').qrcode({
		text: pre.map
	});

    // 百度地图车主壳浏览器url
    jQuery('#qrcodeCarowner').qrcode({
        text: pre.carowner
    });

    // 手机百度轻浏览url
    jQuery('#shoubai').qrcode({
        text: pre.shoubai
    });

	// 百度糯米浏览器组件版本
	jQuery('#qrcodeNuo').qrcode({
		text: pre.nuo
	});	

	// 百度糯米浏览器web版本 
	jQuery('#qrcodeNuoWeb').qrcode({
		text: pre.nuoweb
	});

    // lbc壳浏览器url
    jQuery('#qrcodeLbc').qrcode({
        text: pre.lbc
    });
}