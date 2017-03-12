var farLoArr = [];          //远距离位置
var mediumLoArr = [];       //中距离位置
var nearLoArr = [];         //近距离位置

var pDefArr = [];           //3d猪对象数组
var qDefArr = [];           //所有猪位置

var pigArr = [];            //当前选择3D猪对象数组
var qArr = [];              //当前选择猪位置

//var bf = new birdFire();    //小鸟射击对象
var defy = 0;               //按下记录y坐标

var n_alpha = 0;            //alpha
var n_beta = 0;             //beta
var n_gamma = 0;            //gamma
var b_life = 3;             //小鸟生命值
var forceani = null;        //拉动弹弓动画
var shotani = null;         //射击动画

var isGameOver = false;     //是否结束游戏
var overInt = 0;            //结束星星循环
var prizenum = [];          //得到奖品

var userId = ''             //用户id
var platform = ''           //来源平台

var musicPlayType = true;

//share
var SHARE_LINK = 'http://2016mcd.angrybirds.nimads.com/';
var SHARE_IMG = 'http://2016mcd.angrybirds.nimads.com/html/mobile/panorama/img/share.jpg';
var SHARE_TITLE = '麦当劳被绿猪攻占了！';
var SHARE_DESK = "王府井五一庆，到家来给小宇哥打鸡血";

var HTTP_LOTTERY = '/lottery.php';
var HTTP_INFO = "/getinfo.php";
var HTTP_SHARE = "/share.php";


$(function () {

    //if(!getcookie('source') || getcookie('source') != 'home')
    //{
    //    window.location.href = 'http://2016mcd.angrybirds.nimads.com/';
    //    return;
    //}
    //addcookie('source', '');

    /*
     * 初始化 预加载图片
     *
     * */
    //loading(window, startGame, function (p) {
    //    $('#progress').html(p + '%');
    //});
    //根据平台设定分享方式  微信分享
    //if (isWeiXinFun()) {
    //    wechatSDKObj.initWXShare(SHARE_DESK, SHARE_TITLE, SHARE_LINK, SHARE_IMG, function (from) {
    //        var shareType;
    //        (from == "pyq") ? shareType = "circle" : shareType = "friend"
    //        $.ajax({
    //            url: HTTP_SHARE,
    //            type: "post",
    //            dataType: "json",
    //            data: {target: shareType},
    //            success: function (data) {
    //            }, error: function (data) {
    //            }
    //        });
    //    });
    //}
    //;
    //if (isZhifubao()) {
    //    document.addEventListener('AlipayJSBridgeReady', function () {
    //        AlipayJSBridge.call("hideOptionMenu")
    //    });
    //}

    //var shareType;
    //(from == "pyq")?shareType = "circle":shareType = "friend"
    //$.ajax({
    //    url: HTTP_SHARE,
    //    type: "post",
    //    dataType: "json",
    //    data: {target: shareType},
    //    success: function(data) {}, error: function(data) {}
    //});
    //if(isWeibo()) {initWeiboSdk();}

    setTitle();
    //musicFunc();

    //$.ajax({
    //    url: HTTP_INFO,
    //    type: "post",
    //    dataType: 'json',
    //    data: {date: new Date()},
    //    success: function (data) {
    //        if (data.result == 'success') {
    //            if (data.userid) {
    //                userId = data.userid;
    //                platform = data.from;
    //                if (data.city == '') {
    //                    window.location.href = '../home';
    //                    return;
    //                }
    //                wechatSDKObj.setShareData(SHARE_DESK, SHARE_TITLE, SHARE_LINK + '?state=' + userId, SHARE_IMG, function () {
    //                });
    //            }
    //        }
    //        else {
    //            if (data.messsage == 'plase login') {
    //                window.location.href = 'http://2016mcd.angrybirds.nimads.com/';
    //            }
    //            else alert(data.message);
    //
    //            return;
    //        }
    //    },
    //    error: function (data) {
    //    }
    //});


});

function musicFunc() {

    $("#music_con").on("touchstart", function (e) {
        e.stopPropagation();
    })
    $("#music_con").on("touchend", function (e) {
        e.stopPropagation();
        if (musicPlayType) {
            $("#bg_m")[0].pause();
            musicPlayType = false;
            $(".music_on").hide();
            $(".music_off").show();
        } else {
            $("#bg_m")[0].play();
            musicPlayType = true;
            $(".music_on").show();
            $(".music_off").hide();
        }
    })
}

function setTitle() {
    //if (isWeiXinFun()) {
    //    $(document).attr("title", ' ');
    //    return;
    //}
    //else if (isZhifubao()) {
    //    $(document).attr("title", ' ');
    //    return;
    //}
    //else {
        $("title").html(SHARE_DESK);
    //}
}

////alipay
//function onShareAlipay() {
//    if (isZhifubao()) {
//        if ((Ali.alipayVersion).slice(0, 3) >= 8.1) {
//            Ali.share({
//                //渠道名称。支持以下几种：Weibo/LaiwangContacts/LaiwangTimeline/Weixin/WeixinTimeLine/SMS/CopyLink
//                'channels': [{
//                    name: 'ALPContact',   //支付宝联系人,9.0版本
//                    param: {   //请注意，支付宝联系人仅支持一下参数
//                        contentType: 'url',    //必选参数,目前支持支持"text","image","url"格式
//                        content: SHARE_DESK,    //必选参数,分享描述
//                        iconUrl: SHARE_IMG,   //必选参数,缩略图url，发送前预览使用,
//                        imageUrl: SHARE_IMG, //图片url
//                        url: SHARE_LINK,   //必选参数，卡片跳转连接
//                        title: SHARE_TITLE,    //必选参数,分享标题
//                        memo: "",   //透传参数,分享成功后，在联系人界面的通知提示。
//                        otherParams: {    //透传参数，额外的分享入参
//                        }
//                    }
//                }]
//            }, function (result) {
//                if (result.errorCode) {
//                    //没有成功分享的情况
//                    //errorCode=10，分享失败或取消
//                    //alert('error:'+result.errorCode);
//                } else {
//                    //成功分享的情况
//                }
//            });
//        }
//    }
//}

function startGame() {
    //$('#loading').hide();
    //isGameOver = false;
    //b_life = 3;
    //$('#life1').show();
    //$('#life2').show();
    //$('#life3').show();

    //bf.init();

    createFarLo();
    createPigLo();
    createPig();
    //getRandomPig();

    $(document.body).bind('touchstart', onTouchStart);
    $(document.body).bind('touchend', onTouchEnd);

}

function quaternionSub(q1, q2) {
    var q3 = new THREE.Quaternion(q1.x, q1.y, q1.z, q1.w).inverse();
    var q4 = q3.multiply(q2);

    var subx = Math.abs(q4.x * 10000);
    var suby = Math.abs(q4.y * 10000);
    var subz = Math.abs(q4.z * 10000);
    var subw = Math.abs(10000 - (q4.w * 10000));

    //$('#alpha').html('x:  ' + subx);
    //$('#beta').html('y:  ' + suby);
    //$('#gamma').html('z:  ' + subz);
    //$('#orient').html('w:  ' + subw);

    if (subw < 50 && subz < 1500 && suby < 1500 && subx < 1500) {
        return true;
    } else {
        return false;
    }
}

function quaternionSubBig(q1, q2) {
    var q3 = new THREE.Quaternion(q1.x, q1.y, q1.z, q1.w).inverse();
    var q4 = q3.multiply(q2);
    var subx = Math.abs(q4.x * 10000);
    var suby = Math.abs(q4.y * 10000);
    var subz = Math.abs(q4.z * 10000);
    var subw = Math.abs(10000 - (q4.w * 10000));
    if (subw < 100 && subz < 2000 && suby < 2000 && subx < 2000) {
        return true;
    } else {
        return false;
    }
}

function onTouchStart(event) {
    event.preventDefault();
    alert(event.originalEvent.changedTouches[0].clientX+"==="+event.originalEvent.changedTouches[0].clientY);

    //if (!isGameOver) {
    //    $('#hit_m')[0].pause();
    //    $('#miss_m')[0].pause();
    //    $('#pull_m')[0].currentTime = 0;
    //    $('#pull_m')[0].play();
    //
    //    $('#gametipscon').hide();
    //
    //    defy = Math.floor(event.originalEvent.touches[0].pageY);
    //
    //    $('#tape').hide();
    //    forceani = new animateSprite($('#container'), 'slingshotForce', {x: 165, y: 682});
    //    forceani.init();
    //    $(forceani.con).bind("webkitAnimationEnd", forceEnd);
    //}
}

function forceEnd() {
    forceani.destory();
    $('#tape2').show();
    $('#tape').hide();
}

function shotEnd() {
    shotani.destory();
    $('#tape').show();
    $('#tape2').hide();
}

function onTouchEnd(event) {
    event.preventDefault();

    if (isGameOver) {
        return;
    }
    if (!bf) {
        return;
    }

    $(document.body).unbind('touchstart', onTouchStart);
    $(document.body).unbind('touchend', onTouchEnd);

    //皮筋动画
    if (forceani) {
        $(forceani.con).unbind("webkitAnimationEnd", forceEnd);
        forceani.destory();
        $('#tape').hide();
    }
    if (shotani) {
        $(shotani.con).unbind("webkitAnimationEnd", shotEnd);
    }
    $('#tape').hide();
    $('#tape2').hide();
    shotani = new animateSprite($('#container'), 'slingshotFire', {x: 145, y: 665});
    shotani.init();
    $(shotani.con).one("webkitAnimationEnd", shotEnd);

    var blooean = false;
    var dis = 'medium';
    var q2 = camera.quaternion;
    //blooean = quaternionSub(q1, q2);

    $('#alpha').html('x:  ' + camera.quaternion.x);
    $('#beta').html('y:  ' + camera.quaternion.y);
    $('#gamma').html('z:  ' + camera.quaternion.z);
    $('#orient').html('w:  ' + camera.quaternion.w);
    //$('#test').append('blooean123:  '+ q1.x + "</br>{}" + q1.y + '</br>{}'+ q1.z + '</br>{}' + q1.w);

    var hitpig = null;//击中猪对象

    //击中方法
    for (var i = 0; i < qArr.length; i++) {
        blooean = quaternionSub(qArr[i], q2);
        //$('#test').append("</br>" + quaternionSub(qArr[i], q2) + '|||' + i);
        if (blooean) {
            hitpig = pigArr[i];
            pigArr.splice(i, 1);
            qArr.splice(i, 1);
            break;
        }
    }

    $('#pull_m')[0].pause();
    if (blooean == true) {
        $('#hit_m')[0].currentTime = 0;
        $('#hit_m')[0].play();
    }
    else {
        $('#miss_m')[0].currentTime = 0;
        $('#miss_m')[0].play();
    }

    //获取射击距离
    dis = getDis();
    //bf.moveing(blooean, dis);
    bf.moveing(false, dis);
    bf = null;
    setTimeout(function () {
        if (blooean) {
            $.ajax({
                url: HTTP_LOTTERY,
                type: "post",
                dataType: 'json',
                data: {date: new Date()},
                success: function (data) {
                    if (data.result == 'success') {
                        if (data.isprize > 0) {
                            prizenum.push(data.isprize);
                        }

                        //alert(JSON.stringify(data));

                        //击中动画播放完毕
                        showShotAnimate(blooean, data.isprize);
                        if (hitpig) {
                            scene.remove(hitpig);
                        }
                        bf = new birdFire();
                        bf.init();
                        $(document.body).bind('touchstart', onTouchStart);
                        $(document.body).bind('touchend', onTouchEnd);

                    }
                    else {
                        window.location.href = '../home';
                        return;
                    }
                },
                error: function (data) {
                }
            });
        }
        else {
            showShotAnimate(blooean, 0);
            if (hitpig) {
                scene.remove(hitpig);
            }
            bf = new birdFire();
            bf.init();
            $(document.body).bind('touchstart', onTouchStart);
            $(document.body).bind('touchend', onTouchEnd);
        }

    }, 1000);

    setTimeout(function () {
        if (hitpig) {
            scene.remove(hitpig);
        }
    }, 700);

    //扣除生命
    b_life--;
    if (b_life > 1) {
        $('#life1').hide();
    }
    else if (b_life > 0) {
        $('#life2').hide();
    }
    else $('#life3').hide();

    $('#test').html(b_life)

    if (b_life <= 0) {
        gameOver();
    }
}

function gameOver() {
    isGameOver = true;
    $('#test').html('game over')
    $(document.body).unbind('touchstart', onTouchStart);
    $(document.body).unbind('touchend', onTouchEnd);
    setTimeout(gameOverAnimate, 2000);
}

function gameOverAnimate() {
    //prizenum = [2];

    switch (prizenum.length) {
        case 0:

            $('#overfailedcon').show();
            $('.againbtn').show().css({opacity: 0, top: 800}).delay(300).animate({opacity: 1, top: 650}, 300);
            $('.sharebtn').show().css({opacity: 0, top: 800}).delay(400).animate({opacity: 1, top: 650}, 300);
            $('.mybagbtn').show().css({opacity: 0, top: 800}).delay(400).animate({opacity: 1, top: 720}, 300);
            break;

        case 1:
            $('#overcon').show();
            $('#bbdd').hide();
            TweenMax.to($('#oframe'), 0, {
                scale: .8, alpha: 0, onComplete: function () {
                    TweenMax.to($('#oframe'), .1, {
                        scale: 1.5, alpha: 1, onComplete: function () {
                            TweenMax.to($('#oframe'), .3, {scale: 1.01, alpha: 1});
                        }
                    });
                }
            });
            TweenMax.to($('#olight'), 0, {
                left: -500, alpha: 0, onComplete: function () {
                    TweenMax.to($('#olight'), .5, {scale: 1.01, alpha: 1, left: -30});
                }
            });

            $('#obird1').show();
            TweenMax.to($('#obird1'), 0, {
                top: 120, alpha: 0, dealy: 1, onComplete: function () {
                    TweenMax.to($('#obird1'), .2, {
                        alpha: 1, top: 30, ease: Circ.easeOut, onComplete: function () {
                            TweenMax.to($('#obird1'), .5, {top: 70, ease: Circ.easeOut});
                        }
                    });
                }
            });
            $('#contxt1').show();
            TweenMax.to($('#contxt1'), 0, {
                top: 280, scaleY: 0, alpha: 0, dealy: 1, onComplete: function () {
                    TweenMax.to($('#contxt1'), .3, {alpha: 1, scaleY: 1.01, ease: Circ.easeOut, delay: .3});
                }
            });
            $('#num1').show().css('opacity', '0').animate({opacity: 1}, 300);

            if (prizenum[0] == 1) {
                $('#oprize1').show().css({
                    top: 550,
                    opacity: 0,
                    '-webkit-transform': 'rotate(-7deg)'
                }).animate({top: 480, opacity: 1});
            }
            else {
                $('#oprize2').show().css({
                    top: 550,
                    opacity: 0,
                    '-webkit-transform': 'rotate(-7deg)'
                }).animate({top: 480, opacity: 1});
            }

            $('#txt').show().css('opacity', '0').animate({opacity: 1}, 300);
            $('.againbtn').show().css({opacity: 0, top: 900}).delay(300).animate({opacity: 1, top: 790}, 300);
            $('.sharebtn').show().css({opacity: 0, top: 900}).delay(400).animate({opacity: 1, top: 790}, 300);
            $('.mybagbtn').show().css({opacity: 0, top: 800}).delay(400).animate({opacity: 1, top: 860}, 300);
            //showOverStar();
            break;

        case 2:
            $('#overcon').show();
            $('#bbdd').hide();
            TweenMax.to($('#oframe'), 0, {
                scale: .8, alpha: 0, onComplete: function () {
                    TweenMax.to($('#oframe'), .1, {
                        scale: 1.5, alpha: 1, onComplete: function () {
                            TweenMax.to($('#oframe'), .3, {scale: 1.01, alpha: 1});
                        }
                    });
                }
            });
            TweenMax.to($('#olight'), 0, {
                left: -500, alpha: 0, onComplete: function () {
                    TweenMax.to($('#olight'), .5, {scale: 1.01, alpha: 1, left: -30});
                }
            });

            $('#obird2').show();
            TweenMax.to($('#obird2'), 0, {
                top: 120, alpha: 0, dealy: 1, onComplete: function () {
                    TweenMax.to($('#obird2'), .2, {
                        alpha: 1, top: 30, ease: Circ.easeOut, onComplete: function () {
                            TweenMax.to($('#obird2'), .5, {top: 70, ease: Circ.easeOut});
                        }
                    });
                }
            });
            $('#contxt2').show();
            TweenMax.to($('#contxt2'), 0, {
                top: 280, scaleY: 0, alpha: 0, dealy: 1, onComplete: function () {
                    TweenMax.to($('#contxt2'), .3, {alpha: 1, scaleY: 1.01, ease: Circ.easeOut, delay: .3});
                }
            });
            $('#num2').show().css('opacity', '0').animate({opacity: 1}, 300);


            for (var i = 0; i < prizenum.length; i++) {
                var img = new Image();
                (prizenum[i] == 1) ? img.src = 'img/attack_tips/ticket.png' : img.src = 'img/attack_tips/ticket2.png';
                $('#overcon').append(img);
                $(img).css({
                    'position': 'absolute',
                    top: 550,
                    left: 160 + i * 110,
                    opacity: 0
                }).delay(300 + i * 30).animate({top: 480, opacity: 1});
                switch (i) {
                    case 0:
                        $(img).css({'-webkit-transform': 'rotate(-20deg)'})
                        break;
                    case 1:
                        $(img).css({'-webkit-transform': 'rotate(0deg)'})
                        break;
                }
            }

            $('#txt').show().css('opacity', '0').animate({opacity: 1}, 300);
            $('.againbtn').show().css({opacity: 0, top: 900}).delay(300).animate({opacity: 1, top: 790}, 300);
            $('.sharebtn').show().css({opacity: 0, top: 900}).delay(400).animate({opacity: 1, top: 790}, 300);
            $('.mybagbtn').show().css({opacity: 0, top: 800}).delay(400).animate({opacity: 1, top: 860}, 300);
            //showOverStar();
            break;

        case 3:
            $('#overcon').show();
            $('#bbdd').hide();
            TweenMax.to($('#oframe'), 0, {
                scale: .8, alpha: 0, onComplete: function () {
                    TweenMax.to($('#oframe'), .1, {
                        scale: 1.5, alpha: 1, onComplete: function () {
                            TweenMax.to($('#oframe'), .3, {scale: 1.01, alpha: 1});
                        }
                    });
                }
            });
            TweenMax.to($('#olight'), 0, {
                left: -500, alpha: 0, onComplete: function () {
                    TweenMax.to($('#olight'), .5, {scale: 1.01, alpha: 1, left: -30});
                }
            });

            $('#obird3').show();
            TweenMax.to($('#obird3'), 0, {
                top: 120, alpha: 0, dealy: 1, onComplete: function () {
                    TweenMax.to($('#obird3'), .2, {
                        alpha: 1, top: 10, ease: Circ.easeOut, onComplete: function () {
                            TweenMax.to($('#obird3'), .5, {top: 40, ease: Circ.easeOut});
                        }
                    });
                }
            });

            $('#contxt3').show();
            TweenMax.to($('#contxt3'), 0, {
                top: 280, scaleY: 0, alpha: 0, dealy: 1, onComplete: function () {
                    TweenMax.to($('#contxt3'), .3, {alpha: 1, scaleY: 1.01, ease: Circ.easeOut, delay: .3});
                }
            });
            $('#num3').show().css('opacity', '0').animate({opacity: 1}, 300);
            for (var i = 0; i < prizenum.length; i++) {
                var img = new Image();
                (prizenum[i] == 1) ? img.src = 'img/attack_tips/ticket.png' : img.src = 'img/attack_tips/ticket2.png';
                $('#overcon').append(img);
                $(img).css({
                    'position': 'absolute',
                    top: 550,
                    left: 100 + i * 110,
                    opacity: 0
                }).delay(300 + i * 30).animate({top: 480, opacity: 1});
                switch (i) {
                    case 0:
                        $(img).css({'-webkit-transform': 'rotate(-20deg)'})
                        break;
                    case 1:
                        $(img).css({'-webkit-transform': 'rotate(-7deg)'})
                        break;
                    case 1:
                        $(img).css({'-webkit-transform': 'rotate(10deg)'})
                        break;
                }
            }
            $('#txt').show().css('opacity', '0').animate({opacity: 1}, 300);
            $('.againbtn').show().css({opacity: 0, top: 900}).delay(300).animate({opacity: 1, top: 790}, 300);
            $('.sharebtn').show().css({opacity: 0, top: 900}).delay(400).animate({opacity: 1, top: 790}, 300);
            $('.mybagbtn').show().css({opacity: 0, top: 800}).delay(400).animate({opacity: 1, top: 860}, 300);
            //showOverStar();
            break;
    }

    $('.againbtn').bind('touchend', function () {
        addcookie('source', 'home');
        window.location.reload();
    })

    $('.mybagbtn').bind('touchend', function () {
        window.location.href = '../51.php';
    })

    $('.sharebtn').bind('touchend', function () {
        if (isZhifubao()) {
            onShareAlipay();
            return;
        }

        $('#sharecon').show();
        TweenMax.to($('#sbrid'), 0, {
            top: 680, left: 30, scale: 0.8, alpha: .9, onComplete: function () {
                TweenMax.to($('#sbrid'), 1.5, {
                    bezier: [{top: 680, left: 30, scale: 0.8, alpha: .9}, {
                        top: 150,
                        left: 200,
                        scale: 0.5,
                        alpha: .8
                    }, {top: 50, left: 530, scale: 0, alpha: 0}],
                    ease: Strong.easeOut
                });
            }
        })

        setTimeout(function () {
            $('#shareboom').show();
            TweenMax.to($('#shareboom'), 0, {
                scale: 0, onComplete: function () {
                    TweenMax.to($('#shareboom'), .3, {
                        scale: 1.5, onComplete: function () {
                            TweenMax.to($('#shareboom'), .1, {scale: 1.01});
                        }
                    })
                }
            });

            $('#stxt2').css({left: 320, opacity: 0}).delay(500).animate({left: 300, opacity: 1});
            $('#stxt1').css({left: 260, opacity: 0}).delay(300).animate({left: 200, opacity: 1});
        }, 700);
    });

    $('#sharecon').bind('touchend', function () {
        $('#sharecon').hide();
    })
    //var bbd = new animateSprite($('#overcon'), 'bbd', {x:145, y:210});
    //bbd.init();
    //$(bbd.con).one("webkitAnimationEnd", function(){bbd.destory(); $('#bbdd').show();});
}

function showOverStar() {
    var loarr = [{top: -50, left: 680}, {top: 600, left: 900}, {top: 1080, left: 700}, {
        top: 1300,
        left: 300
    }, {top: 700, left: -300}, {top: -330, left: -500}, {top: 1400, left: -150}]

    for (var i = 0; i < 7; i++) {
        var s = new star(loarr[i]);
        s.init();
    }
    overInt = setInterval(function () {
        for (var i = 0; i < 7; i++) {
            var s = new star(loarr[i]);
            s.init();
        }
    }, 1300)
}

function showShotAnimate(b, prize) {
    //var prize = 0;
    //b = false;
    if (b == true) {
        if (prize > 0) {
            showWinPrize(prize);
            $('#head1').show().delay(500).fadeOut();
        }
        else {
            showHit();
            $('#head1').show().delay(1500).fadeOut();
        }
    }
    else {
        showMiss();
        $('#head2').show().delay(1500).fadeOut();
    }
}

function setLo(alpha, beta, gamma) {
    n_alpha = alpha;
    n_beta = beta;
    n_gamma = gamma;
}

function getDis() {
    var dis = 'medium';
    if (n_beta < 0.5) {
        dis = 'near';
    }
    else if (n_beta > 2) {
        dis = 'far'
    }

    var q2 = camera.quaternion;

    for (var i = 0; i < farLoArr.length; i++) {
        var blooean = quaternionSubBig(farLoArr[i], q2);
        if (blooean) {
            dis = 'far'
            return dis;
        }
    }

    return dis;
}

function getRandomPig() {
    for (var i = 0; i < 4; i++) {
        var j = Math.floor(Math.random() * pDefArr.length);
        pigArr.push(pDefArr[j]);
        qArr.push(qDefArr[j]);

        scene.add(pDefArr[j]);
        pDefArr.splice(j, 1);
        qDefArr.splice(j, 1);
    }
}

function createPigLo() {
    var q1 = new THREE.Quaternion(0.140, 0.319, 0.027, -0.936);
    var q2 = new THREE.Quaternion(-0.082, 0.304, 0.037, 0.948);
    //var q3 = new THREE.Quaternion(-0.290, -0.026, 0.0159, 0.956);
    //var q3 = new THREE.Quaternion(0.317, -0.016, 0.021, -0.951);
    var q4 = new THREE.Quaternion(-0.009, 0.995, -0.0280, -0.0891);
    var q5 = new THREE.Quaternion(-0.135, 0.865, 0.260, 0.415);
    var q6 = new THREE.Quaternion(-0.165, 0.635, 0.141, 0.743);
    var q7 = new THREE.Quaternion(-0.195, 0.421, 0.117, 0.877);
    var q8 = new THREE.Quaternion(0.150, 0.451, 0.082, -0.877);
    var q9 = new THREE.Quaternion(0.185, 0.77, 0.271, -0.537);
    var q10 = new THREE.Quaternion(-0.112, 0.165, 0.013, -0.979);
    //qDefArr.push(q1,q2,q3,q4,q5,q6,q7,q8,q9,q10);
    qDefArr.push(q1, q2, q4, q5, q6, q7, q8, q9, q10);
}

function createPig() {
    var pig1 = new animateSprite(null, 'pig1', {x: 0, y: 0});
    pig1.init();
    var object1 = new THREE.CSS3DObject(pig1.con[0]);
    object1.position.fromArray([380, -80, -510]);
    object1.rotation.fromArray([0, 0, 0]);

    var pig2 = new animateSprite(null, 'pig3', {x: 0, y: 0});
    pig2.init();
    var object2 = new THREE.CSS3DObject(pig2.con[0]);
    object2.position.fromArray([-380, -20, -510]);
    object2.rotation.fromArray([0, 0, 0]);

    var pig3 = new animateSprite(null, 'pig4', {x: 0, y: 0});
    pig3.init();
    var object3 = new THREE.CSS3DObject(pig3.con[0]);
    object3.position.fromArray([-30, -230, -510]);
    object3.rotation.fromArray([0, 0, 0]);

    var pig4 = new animateSprite(null, 'pig5', {x: 0, y: 0});
    pig4.init();
    var object4 = new THREE.CSS3DObject(pig4.con[0]);
    object4.position.fromArray([100, 120, 510])
    object4.rotation.fromArray([0, Math.PI, 0]);

    var pig5 = new animateSprite(null, 'pig1', {x: 0, y: 0});
    pig5.init();
    var object5 = new THREE.CSS3DObject(pig5.con[0]);
    object5.position.fromArray([-510, -300, 430]);
    object5.rotation.fromArray([0, -Math.PI / 2, 0]);

    var pig6 = new animateSprite(null, 'pig3', {x: 0, y: 0});
    pig6.init();
    var object6 = new THREE.CSS3DObject(pig6.con[0]);
    object6.position.fromArray([-510, -100, -70]);
    object6.rotation.fromArray([0, Math.PI / 2, 0]);

    var pig7 = new animateSprite(null, 'pig2', {x: 0, y: 0});
    pig7.init();
    var object7 = new THREE.CSS3DObject(pig7.con[0]);
    object7.position.fromArray([-480, -200, -380]);
    object7.rotation.fromArray([0, -Math.PI / 2, 0]);

    var pig8 = new animateSprite(null, 'pig5', {x: 0, y: 0});
    pig8.init();
    var object8 = new THREE.CSS3DObject(pig8.con[0]);
    object8.position.fromArray([510, -120, -380]);
    object8.rotation.fromArray([0, Math.PI / 2, 0]);

    var pig9 = new animateSprite(null, 'pig6', {x: 0, y: 0});
    pig9.init();
    var object9 = new THREE.CSS3DObject(pig9.con[0]);
    object9.position.fromArray([510, -300, 180]);
    object9.rotation.fromArray([0, -Math.PI / 2, 0]);

    var pig10 = new animateSprite(null, 'pig1', {x: 0, y: 0});
    pig10.init();
    var object10 = new THREE.CSS3DObject(pig10.con[0]);
    object10.position.fromArray([180, 220, -510]);
    object10.rotation.fromArray([0, -Math.PI, 0]);

    //scene.add( object1 );
    //scene.add( object2 );
    //scene.add( object3 );
    //scene.add( object4 );
    //scene.add( object5 );
    //scene.add( object6 );
    //scene.add( object7 );
    //scene.add( object8 );
    //scene.add( object9 );
    //scene.add( object10 );

    pDefArr.push(object1);
    pDefArr.push(object2);
    //pDefArr.push(object3);
    pDefArr.push(object4);
    pDefArr.push(object5);
    pDefArr.push(object6);
    pDefArr.push(object7);
    pDefArr.push(object8);
    pDefArr.push(object9);
    pDefArr.push(object10);
}

function createFarLo() {
    var q1 = new THREE.Quaternion(-0.102, 0.725, -0.051, -0.678);
    var q2 = new THREE.Quaternion(-0.003, 0.877, 0.020, -0.478);
    var q3 = new THREE.Quaternion(-0.01, 0.951, -0.025, 0.307);

    //farLoArr.push(q1, q2, q3);
}