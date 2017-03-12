
var HTTP_GETSDK_DATA = '/get_jssdk_wb.php';

function initWeiboSdk()
{
    $.ajax({
        //url: '/mcd_angrybird/get_jssdk.php?url='+encodeURIComponent(location.href.split('#')[0]),
        url: HTTP_GETSDK_DATA + '?url='+encodeURIComponent(location.href.split('#')[0]),
        type: 'GET',
        cache: false,
        async : false,
        dataType: 'json',
        success: function(data)
        {
            setWeiboSdkData(data.appId, data.timestamp, data.nonceStr, data.signature);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log("XMLHttpRequest:" + XMLHttpRequest);
            console.log("textStatus:" + textStatus);
            console.log("errorThrown:" + errorThrown);
        },
    });
}

function setWeiboSdkData(appkey, timestamp, noncestr, signature)
{
    window.WeiboJS.init({
        'appkey' : appkey,
        'debug': false,
        'timestamp': timestamp,
        'noncestr': noncestr,
        'signature': signature,
        'scope': ['setMenuItems']
    }, function(ret){
        alert('init done\n' + JSON.stringify(ret));
    });

    WeiboJS.invoke("setMenuItems", {
        menus : ["shareToWeibo", "follow"],
        content : "我是默认文案"
    }, function(params){
        safeAlert("setMenuItems 返回数据：" + JSON.stringify(params));
    });
}