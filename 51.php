<?php

// $wxParams = curlGet("http://www.wexue.top/v5/weixinjs.php?url=" . base64_encode('http://www.wexue.top' . $_SERVER["REQUEST_URI"]));
// // $wxParams = curlGet("http://localhost/v5/weixinjs.php?url=http://wx.widalian.com:8082".$_SERVER["REQUEST_URI"]);


// function curlGet($url)
// {
// 	$ch = curl_init();

// 	curl_setopt($ch, CURLOPT_URL, $url);
// 	curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
// 	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
// 	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
// 	curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (compatible; MSIE 5.01; Windows NT 5.0)');
// 	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
// 	curl_setopt($ch, CURLOPT_AUTOREFERER, 1);
// 	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// 	$info = curl_exec($ch);

// 	if (curl_errno($ch)) {
// 		echo 'Errno' . curl_error($ch);
// 	} else {
// 		// echo 'success!!!';

// 		curl_close($ch);

// 		return $info;
// 	}
// }
?>
<!DOCTYPE html>
<html>
<head lang="en">
	<meta charset="UTF-8">
	<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport"
	      content="width=device-width, initial-scale=1,initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta name="format-detection" content="telephone=no">
	<meta name="keywords" content="找齐10个品牌logo即可拯救网红，动动手指大奖到碗里来，欢乐过五一，速度点开">
	<meta name="description" content="据说把这款网红扶起来，能奖励500元购物卡？来看看！">
	<title>据说把这款网红扶起来，能奖励500元购物卡？来看看！</title>

	<script>
		// var openid = getQueryString("openid") || false;
		// if (!openid) {
		// 	window.location.href = "http://www.wexue.top/qj/";
		// }
		function getQueryString(name) {
			var result = this.location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
			if (result == null || result.length < 1) {
				return "";
			}
			return decodeURIComponent(result[1]);
		}
	</script>
	<link href="css/video-js.min.css" rel="stylesheet" type="text/css">
	<link href="css/animate.css" rel="stylesheet" type="text/css">
	<link href="css/animatestyle.css" rel="stylesheet" type="text/css">
	<link href="css/index.css" rel="stylesheet" type="text/css">
	<script src="js/jquery.1.7.1.min.js" type="text/javascript"></script>
	<script src="js/three.min.js" type="text/javascript"></script>
	<script src="js/DeviceOrientationControls.js" type="text/javascript"></script>
	<script src="js/CSS3DRenderer.js" type="text/javascript"></script>
	<script src="js/animateSprite.js" type="text/javascript"></script>
	<script src="js/preload.js" type="text/javascript"></script>
	<script src="js/hammer.min.js"></script>

</head>
<body>
<div class="page load" id="loading">
	<div class="load-run">
		<img src="img/wfjlogogreen.png">

		<div id="progress"></div>

	</div>
	<div class="preload-img hidden">
	</div>
</div>
<audio class="hidden" src="video/coin.mp3" id="coina" preload="preload"></audio>
<audio class="hidden" src="video/game.mp3" id="gamea" preload="preload"></audio>
<div class="page page1 hidden" id="p1">
	<div class="page1-a"></div>
	<video id="video_1" class="page1-b" x-webkit-airplay="true" webkit-playsinline="true"
	       preload="auto">
		<source src="video/wfl.mp4" type='video/mp4'/>
	</video>
	<script src="js/video.min.js" type="text/javascript"></script>
	<script>
		videojs.options.flash.swf = "js/video-js.swf";
	</script>
</div>

<div class="page page2 hidden" id="p2">
	<!--<img class="logo-top" src="img/wlogo.png">-->
	<img src="img/p2-ren.jpg" class="p2-ren">

	<div class="p-text">
		<p>辛勤的wuli小宇哥眩晕倒下了,</p>

		<p>亲们只要在页面中找到<span class="line">10</span>个品牌logo,</p>

		<p>就可以给小宇哥打满鸡血继续工作了，</p>

		<p>当然拯救了小宇哥也是有<span class="line">大礼</span>的好不!</p>

		<p class="line">你还在等什么？</p>
		<button id="priceBtn">查看奖品</button>
		<button id="beginBtn" style="background-color: #6cb130">开&nbsp;&nbsp;始</button>
	</div>
	<div class="prize-text hidden" id="prize">
		<img src="img/prize.png" id="prizeImg">
	</div>
</div>

<div class="page page3 hidden" id="qj">

	<div class="start hidden" id="start">
		<img id="s2" src="img/start-zi.png">
		<img id="s3" src="img/start-ren.png">
	</div>
	<div id="num" class="num">2</div>
	<div id="logo" class="logo hidden">
		<img src="img/logo/p5-ren.png">
	</div>
	<div id="qjdiv">

	</div>
</div>
<div class="page page4 hidden" id="p4">
	<img src="img/p4-ren.jpg" class="p2-ren">
    <audio class="hidden" src="video/fail.mp3" id="faila" preload="preload"></audio>
	<div class="p-text">
		<p>小宇哥鸡血不足，你离大奖只差一步了。</p>
		<button id="back">再来一次</button>
		<button id="more" style="background-color:#f75741">五一大促</button>
	</div>
</div>
<div class="page page5 hidden" id="p5">
	<img src="img/p5-ren.jpg" class="p2-ren" style="width: 80%;height: auto;max-height: 70%">
	<audio class="hidden" src="video/success.mp3" id="successa" preload="preload"></audio>
	<div class="p-text">
		<p>小宇哥满血复活，感谢小主相救，小宇哥无以为报，</p>

		<p>快去关注公众号 “<span class="big">王府井百货大兴店</span>”，</p>

		<p class="big">点击菜单，查看成绩，领取奖品吧。</p>
		<button id="fllow">关&nbsp;&nbsp;注</button>
		<button id="more1"  style="background-color:#f75741">五一大促</button>
	</div>
	<div class="qcode hidden" id="qcode">
		<img src="img/qcode.jpg">
	</div>
</div>
<script src="js/start.js" type="text/javascript"></script>
<script type="text/javascript" src="js/jweixin-1.0.0.js"></script>
<script type="text/javascript">
	// wx.config(
	// <?php echo $wxParams;?>
	// );
	// wx.ready(function(){
	// 	wx.onMenuShareTimeline({
	// 		title: '据说把这款网红扶起来，能奖励500元购物卡？快来看看！', // 分享标题
	// 		link: 'http://www.wexue.top/qj/', // 分享链接
	// 		imgUrl: 'http://www.wexue.top/qj/img/p2-ren.png', // 分享图标
	// 		success: function () {
	// 		},
	// 		cancel: function () {
	// 		}
	// 	});
	// 	wx.onMenuShareAppMessage({
	// 		title: '据说把这款网红扶起来，能奖励500元购物卡？快来看看！', // 分享标题
	// 		desc: '找齐10个品牌logo即可拯救网红，动动手指大奖到碗里来，欢乐过五一，速度点开！', // 分享描述
	// 		link: 'http://www.wexue.top/qj/', // 分享链接
	// 		imgUrl: 'http://www.wexue.top/qj/img/p2-ren.png', // 分享图标
	// 		type: 'link', // 分享类型,music、video或link，不填默认为link
	// 		dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
	// 		success: function () {
	// 			// 用户确认分享后执行的回调函数
	// 		},
	// 		cancel: function () {
	// 			// 用户取消分享后执行的回调函数
	// 		}
	// 	});
	// });
</script>
<script type="text/javascript" src="http://pingjs.qq.com/h5/stats.js" name="MTAH5" sid="500092775"></script>
<div class="hidden">
	<img src="img/1.jpg">
	<img src="img/2.jpg">
	<img src="img/3.jpg">
	<img src="img/4.jpg">
	<img src="img/5.jpg">
	<img src="img/6.jpg">
</div>
</body>
</html>