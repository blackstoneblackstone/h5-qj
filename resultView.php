<?php
$openid = $_GET['openid'];

error_reporting(E_ALL ^ E_DEPRECATED);
$con = mysql_connect("localhost", "root", "lihb123456");
if (!$con) {
    die('Could not connect: ' . mysql_error());
}

mysql_select_db("test", $con);

$result1 = mysql_query("SELECT * FROM wfj51 WHERE openid='" . $openid . "'");
$row = mysql_fetch_array($result1);
if (empty($row)) {
    header("Location: http://www.wexue.top/qj/51.php?openid=" . $openid);
}
$result2 = mysql_query("SELECT count(*) FROM wfj51 WHERE sudu<=" . $row['sudu']);
$paiming = mysql_fetch_array($result2);
$prize = "无";
$prizeImg = "";
$p = $paiming[0];
$info='<p>请在<span class="line">5月1日</span>到<span class="line">5月3日</span>期间，光临<span class="line">王府井百货大兴店</span>五层会员中心，</p>'.

    '<p>领取您的奖品，感谢您的支持。</p></div>';
if ($p == 1) {
    $prize = "500元购物卡";
    $prizeImg = "img/card.jpg";

}
if (1 < $p && $p < 7) {
    $prize = "200元购物卡";
    $prizeImg = "img/card.jpg";
}
if (6 < $p && $p < 16) {
    $prize = "100元购物卡";
    $prizeImg = "img/card.jpg";
}
if (15 < $p && $p < 316) {
    $prize = "减压锤";
    $prizeImg = "img/tui.jpg";
}

if (317 < $p ) {
    $prize = "<span style='color: #000000;font-size: 16px'>来自王府井百货最真挚的节日祝福</span>";
    $info='<span class="line" style="color: #f75741;margin-bottom: 50px">五一快乐</span>';
}

$result3 = mysql_query("SELECT sudu FROM wfj51 ORDER by sudu ASC limit 0,6 ");
$sudus=array();
while($row3 = mysql_fetch_array($result3)){
    array_push($sudus,$row3['sudu']);
}
mysql_close($con);
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
    <link href="css/animate.css" rel="stylesheet" type="text/css">
    <script src="js/zepto.min.js"></script>
    <style>
        html {
            font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;
        }

        body {
            text-align: center;
            padding: 0;
        }

        p {
            text-align: center;
            font-size: 15px;
            margin-top: 5px;
            margin-bottom: 5px;
        }

        .bottom p {
            text-align: left;
        }

        .line {
            font-size: 24px;
            color: #6cb130;
        }

        .prize {
            margin-top: 20px;
        }

        .text > p:nth-child(1) {
            font-size: 16px;
        }

        .top img {
            width: 100%;
        }

        .hidden {
            display: none;
        }

        button {
            background-color: #6db131;
            height: 40px;
            width: 80%;
            color: #ffffff;
            font-size: 18px;
            border: solid #f2f2f2 1px;
            border-radius: 50px;
        }

        .table {
            border: solid #6db131 1px;
            border-radius: 10px;
            margin: 10px 20px 10px 20px;
        }

        .bottom {
            width: 100%;
        }

        .bottom p {
            margin-left: 20px;
        }

        .prize-text {
            position: absolute;
            z-index: 50;
            height: 100%;
            width: 100%;
            text-align: center;
            background-color: rgba(0, 0, 0, .5);
        }

        .prize-text > img {
            width: 80%;
            margin: 60px auto 0 auto;
        }
        .table>p>span{
            margin-right: 40px;
        }
    </style>
</head>
<body>

<div class="top">
    <img src="img/zan.jpg"></div>
<div class="text">
    <p><span class="line" style="color: #f75741">活动结束了</span></p>
    <p>恭喜小主，您只花了<span class="line"><?php echo $row['sudu']; ?></span>毫秒就拯救了小宇哥，</p>

    <p>您的最终排名是第<span class="line"><?php echo $p; ?></span>位，小宇哥给你点赞，</p>

    <p>你获得了<span class="line"><?php echo $prize; ?></span></p>

    <div>
        <img id="chui" src="<?php echo $prizeImg; ?>">
    </div>
     <?php echo  $info;?>


<button id="more" style="background-color: #f75741">查看五一大促，赢取更多优惠</button>
<div class="prize-text hidden" id="prize">
    <img src="img/prize.png" id="prizeImg">
</div>
<div class="bottom">
    <p style="margin-left:0px;margin-top:20px;text-align:center;font-size: 20px;color: #f75741;font-weight: bolder">奖品</p>

    <div style="border: solid #f75741 1px;
			border-radius: 10px;
			margin: 10px 20px 10px 20px;">
        <p>一等奖500元购物卡1份（1元购买资格）</p>

        <p>二等奖200元购物卡5份（1元购买资格）</p>

        <p>三等奖100元购物卡10份（1元购买资格）</p>

        <p>还有300份减压锤等着亲呢哦!</p>

        <p><span style="color: #f75741;font-weight: bolder">兑奖时间：</span>5月1日-5月3日</p>

        <p><span style="color: #f75741;font-weight: bolder">兑奖地点：</span>王府井百货大兴店 五层会员中心</p>
    </div>
</div>
<div class="prize">
    <span class="line">前6名</span>

    <div class="table">
        <p  style="color: #6cb130;margin-left: 40px"><span>名次 </span> <span>用时(毫秒)</span></p>

        <p><span>第一名 </span> <span><?php echo $sudus[0];?></span></p>

        <p><span>第二名 </span> <span><?php echo $sudus[1];?></span></p>

        <p><span>第三名 </span> <span><?php echo $sudus[2];?></span></p>

        <p><span>第四名 </span> <span><?php echo $sudus[3];?></span></p>

        <p><span>第五名 </span> <span><?php echo $sudus[4];?></span></p>

        <p><span>第六名 </span> <span><?php echo $sudus[5];?></span></p>
    </div>
</div>
<div>
    <img style="height: 50px" src="img/wlogo.png">
</div>

<?php

$wxParams = curlGet("http://www.wexue.top/v5/weixinjs.php?url=" . base64_encode('http://www.wexue.top' . $_SERVER["REQUEST_URI"]));
// $wxParams = curlGet("http://localhost/v5/weixinjs.php?url=http://wx.widalian.com:8082".$_SERVER["REQUEST_URI"]);


function curlGet($url)
{
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
    curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (compatible; MSIE 5.01; Windows NT 5.0)');
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($ch, CURLOPT_AUTOREFERER, 1);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $info = curl_exec($ch);

    if (curl_errno($ch)) {
        echo 'Errno' . curl_error($ch);
    } else {
        // echo 'success!!!';

        curl_close($ch);

        return $info;
    }
}
?>
<script type="text/javascript" src="js/jweixin-1.0.0.js"></script>

<script>
    $(function () {
        $("#more").on("tap", function () {
            window.location.href = "http://viewer.maka.im/k/1HL2HE7A";
        });
    });

    wx.config(
        <?php echo $wxParams;?>
    );
    wx.ready(function(){
        wx.onMenuShareTimeline({
            title: '据说把这款网红扶起来，能奖励500元购物卡？快来看看！', // 分享标题
            link: 'http://www.wexue.top/qj/', // 分享链接
            imgUrl: 'http://www.wexue.top/qj/img/p5-ren.jpg', // 分享图标
            success: function () {
            },
            cancel: function () {
            }
        });
        wx.onMenuShareAppMessage({
            title: '据说把这款网红扶起来，能奖励500元购物卡？快来看看！', // 分享标题
            desc: '找齐10个品牌logo即可拯救网红，动动手指大奖到碗里来，欢乐过五一，速度点开！', // 分享描述
            link: 'http://www.wexue.top/qj/', // 分享链接
            imgUrl: 'http://www.wexue.top/qj/img/p5-ren.jpg', // 分享图标
            type: 'link', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
    });
</script>
<script type="text/javascript" src="http://pingjs.qq.com/h5/stats.js" name="MTAH5" sid="500092775"></script>
</body>

</html>