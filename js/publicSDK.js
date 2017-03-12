var wechatSDKObj =
{
    shareData:{},
    apiList:['onMenuShareTimeline', 'onMenuShareAppMessage']
}

wechatSDKObj.initWXShare = function(title, desc, link, imgurl, callback)
{
    if (wx)
    {
    	console.log("url:" + encodeURIComponent(location.href.split('#')[0]));
        $.ajax({
            //url: '/mcd_angrybird/get_jssdk.php?url='+encodeURIComponent(location.href.split('#')[0]),
            url: '/get_jssdk.php?url='+encodeURIComponent(location.href.split('#')[0]),
            type: 'GET',
            cache: false,
            async : false,
            dataType: 'json',
            success: function(data)
            {
                wx.config({
                    debug: false,
                    appId: data.appId,
                    timestamp: data.timestamp,
                    nonceStr: data.nonceStr,
                    signature: data.signature,
                    jsApiList: wechatSDKObj.apiList
                });
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
            		console.log("XMLHttpRequest:" + XMLHttpRequest);
            		console.log("textStatus:" + textStatus);
            		console.log("errorThrown:" + errorThrown);
            },
        });

        wechatSDKObj.shareData =
        {
            title: title,
            desc: desc,
            link: link,
            imgUrl: imgurl,
            shareCallBack: callback
        }
        wx.ready(function()
        {
            wechatSDKObj.setShareData(wechatSDKObj.shareData.title, wechatSDKObj.shareData.desc, wechatSDKObj.shareData.link, wechatSDKObj.shareData.imgUrl, wechatSDKObj.shareData.shareCallBack);
        });
    }
    else {alert("jweixin.js未加载");}
}

wechatSDKObj.setShareData = function(title, desc, link, imgurl, callback)
{
    wechatSDKObj.shareData =
    {
        title: title,
        desc: desc,
        link: link,
        imgUrl: imgurl,
        shareCallBack: callback
    }
    
    //朋友圈
    wx.onMenuShareTimeline({
        title: wechatSDKObj.shareData.title,    	// 分享标题
        link: wechatSDKObj.shareData.link,      	// 分享链接
        imgUrl: wechatSDKObj.shareData.imgUrl,  	// 分享图标
        success: function() {
            // 用户确认分享后执行的回调函数
            if (wechatSDKObj.shareData.shareCallBack)
            {
                wechatSDKObj.shareData.shareCallBack('pyq');
            }
        },
        cancel: function() {
            //用户取消分享后执行的回调函数
        }
    });

    //朋友
    wx.onMenuShareAppMessage({
        title: wechatSDKObj.shareData.desc,     	// 分享标题
        desc: wechatSDKObj.shareData.title,     	// 分享描述
        link: wechatSDKObj.shareData.link,      	// 分享链接
        imgUrl: wechatSDKObj.shareData.imgUrl,  	// 分享图标
        type: 'link',               				// 分享类型,music、video或link，不填默认为link
        dataUrl: wechatSDKObj.shareData.dataUrl, 	// 如果type是music或video，则要提供数据链接，默认为空
        success: function() {
            // 用户确认分享后执行的回调函数
            if (wechatSDKObj.shareData.shareCallBack)
            {
                wechatSDKObj.shareData.shareCallBack('py');
            }
            
            
        },
        cancel: function() {
            //用户取消分享后执行的回调函数
        }
    });
}