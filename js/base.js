//返回一个全地址
function resolveUrl(url) {
	var a = document.createElement("a");
	a.href = url;
	return a.href;
}

//*************************************************
//*                                               *
//*  					cookie                    *
//*                                               *
//*************************************************
function addcookie(name, value, expireHours) {
    var cookieString = name + "=" + escape(value);
    //判断是否设置过期时间
    expireHours = expireHours || 10000;

    var date = new Date();
    date.setTime(date.getTime() + expireHours * 3600 * 1000);
    cookieString = cookieString + "; expires=" + date.toGMTString() + "; path=/";

    document.cookie = cookieString;
}

function getcookie(name) {
    var strcookie = document.cookie;
    var arrcookie = strcookie.split("; ");
    for (var i = 0; i < arrcookie.length; i++) {
        var arr = arrcookie[i].split("=");
        if (arr[0] == name) return arr[1];
    }
    return "";
}

/**
 * 验证用户浏览器是否是微信浏览器
 * @author	Terence
 *
 * @return	是微信浏览器返回true否则返回false
 */
function isWeiXinFun(){var ua = window.navigator.userAgent.toLowerCase();if(ua.match(/MicroMessenger/i) == 'micromessenger'){return true;}else{return false;}}

/**
 * 验证用户浏览器是否是微博内置浏览器
 * @author	Terence
 *
 * @return	是微博内置浏览器返回true否则返回false
 */
function isWeibo(){var ua = window.navigator.userAgent.toLowerCase();if(ua.match(/weibo/i) == 'weibo'){return true;}else{return false;}}

function isZhifubao(){var ua = window.navigator.userAgent.toLowerCase();if(ua.match(/ali/i) == 'ali'){return true;}else{return false;}}

//*************************************************
//*                                               *
//*  					query string              *
//*                                               *
//*************************************************

function getQueryStringByName(name) {
    var result = this.location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
    if (result == null || result.length < 1) {
        return "";
    }
    return decodeURIComponent(result[1]);
}


/**
 * 验证用户设备来源
 * @author	Terence
 *
 * @return	object
 */
function userAgent()
{
    var sUserAgent = navigator.userAgent.toLowerCase();

    var o = {};
    o.isIpad = /ipad/i.test(sUserAgent);
    o.isIphone = /iphone os/i.test(sUserAgent);
    o.isUc7 = /rv:1.2.3.4/i.test(sUserAgent);
    o.isUc = /ucweb/i.test(sUserAgent);
    o.isAndroid = /android/i.test(sUserAgent);
    o.isWM = /windows mobile/i.test(sUserAgent);

    o.isPhone = o.isIphone || o.isAndroid || o.isWM || o.isUc7 || o.isUc;
    o.isMobile = o.isIpad || o.isPhone || o.isAndroid;
    o.isPc = !o.isMobile;
    o.isIOS = o.isIpad || o.isIphone;

    return o;
}

/**
 * JS验证邮件地址是否合法
 * @author	Terence
 *
 * @param	email	
 * @return	合法返回true；不合法返回false
 */
function checkEmail(email){
	var re=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; 
	return re.test(email);
}

/**
 * JS获取字符串长度(区分中英文) 中文算2个字,英文一个
 * @author	Terence
 *
 * @param	string	电话号码
 * @return 返回字符串长度
 */
function getStrLength(str){  
    var cArr = str.match(/[^\x00-\xff]/ig);  
    return str.length + (cArr == null ? 0 : cArr.length);  
}

/**
 * 检查手机号码是否合法
 * @author	Terence
 *
 * @param	string	手机号码
 * @return 合法返回true；不合法返回flase
 */
function checkMobile(string){  
  return (/^1[3-9]+\d{9}$/.test(string));
}

/**
 * 验身份证号码是否正确
 * @author	Terence
 *
 * @param	num		身份证号码
 * @return 合法返回true；不合法返回flase
 */
function isIdCardNo(num){
    var factorArr = new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1);
    var error;
    var varArray = new Array();
    var intValue;
    var lngProduct = 0;
    var intCheckDigit;
    var intStrLen = num.length;
    var idNumber = num;
    // initialize
    if ((intStrLen != 15) && (intStrLen != 18)) {
        //error = "输入身份证号码长度不对！";
        //alert(error);
        //frmAddUser.txtIDCard.focus();
        return false;
    }
    // check and set value
    for(i=0;i<intStrLen;i++) {
        varArray[i] = idNumber.charAt(i);
        if ((varArray[i] < '0' || varArray[i] > '9') && (i != 17)) {
            //error = "错误的身份证号码！.";
            //alert(error);
            //frmAddUser.txtIDCard.focus();
            return false;
        } else if (i < 17) {
            varArray[i] = varArray[i]*factorArr[i];
        }
    }
    if (intStrLen == 18) {
        //check date
        var date8 = idNumber.substring(6,14);
        if (IsDate(date8) == false) {
            //error = "身份证中日期信息不正确！.";
            //alert(error);
            return false;
        }
        // calculate the sum of the products
        for(i=0;i<17;i++) {
            lngProduct = lngProduct + varArray[i];
        }
        // calculate the check digit
        intCheckDigit = 12 - lngProduct % 11;
        switch (intCheckDigit) {
            case 10:
                intCheckDigit = 'X';
                break;
            case 11:
                intCheckDigit = 0;
                break;
            case 12:
                intCheckDigit = 1;
                break;
        }
        // check last digit
        if (varArray[17].toUpperCase() != intCheckDigit) {
            //error = "身份证效验位错误!正确为： " + intCheckDigit + ".";
            //alert(error);
            return false;
        }
    }
    else{        //length is 15
        //check date
        var date6 = "19"+idNumber.substring(6,12);
        if (IsDate(date6) == false) {
            //alert("身份证日期信息有误！.");
            return false;
        }
    }
    //alert ("Correct.");
    return true;
}
















