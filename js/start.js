/**
 * Created by lihb on 4/20/16.
 */
var winW = window.screen.width;
var winH = document.body.height;
var pDefArr = [];
var time = 30;
var numss;
var logoHitNum = 0;
var p1c = true;
var p2c = true;
var p3c = true;
var p4c = true;
var p5c = true;
var p6c = true;
var p7c = true;
var p8c = true;
var p9c = true;
var p10c = true;
var p11c = true;
var p12c = true;
var p13c = true;
var p14c = true;
//$(function () {
loading(window, startGame, function (p) {
    $('#progress').html(p + '%');
});
//});

function startGame() {
    $("#loading").addClass("animated bounceOut");
    new Hammer(document.getElementById("more")).on("tap", function (event) {
        window.location.href = "http://viewer.maka.im/k/1HL2HE7A";
    });
    //显示第二页
    setTimeout(function () {
        $("#loading").remove();

        var extend = getQueryStringByName("extend");
        if (extend == 1) {
            $("#p1").remove();
            $("#p2").remove();
            qjS();
            return;
        }
        $("#p1").show();
        videojs("video_1").ready(function () {
            var myPlayer = this;
            $("video").css("width", winW + "px");
            $("video").css("height", winH + "px");
            myPlayer.play();
            $("body").bind('touchstart', function () {
                return;
            });
            $("body").bind('touchend', function () {
                return;
            });

            ////播放完成
            myPlayer.on("ended", function () {
                $("#p1").remove();
                $("#p2").show();
                new Hammer(document.getElementById("priceBtn")).on("tap", function () {
                    $("#prize").attr("class", "prize-text hidden");
                    $("#prize").addClass("animated bounceInDown");
                    $("#prize").show();

                    new Hammer(document.getElementById("prizeImg")).on("tap", function () {
                        $("#prize").removeClass("bounceInDown");
                        $("#prize").addClass("bounceOutDown");
                        setTimeout(function () {
                            $("#prize").hide();
                        }, 700);
                    });
                });
                new Hammer(document.getElementById("beginBtn")).on("tap", function () {
                    $("#p2").addClass("animated bounceOut");
                    setTimeout(function () {
                        $("#p2").remove();
                        qjS();
                    }, 500);
                });
            });
        });


    }, 700);


}

function hitLogo() {

    var coina = document.getElementById("coina");
    coina.play();
    $("#logo").show();
    $("#logo").addClass("animated lightSpeedIn");
    setTimeout(function () {
        $("#logo").hide();
        $("#logo").attr("class", "logo hidden");
    }, 800);

    logoHitNum++;
    if (logoHitNum == 10) {
        var successa = document.getElementById("successa");
        successa.play();
        $("#qj").hide();
        $("#p5").show();
        //$url = "save.php";
        //var openid = getQueryStringByName("openid");
        //$.ajax({
        //    url: $url,
        //    type: 'get',
        //    data: {
        //        "openid": openid,
        //        "sudu": 500 - time
        //    },
        //    success: function (data) {
        //
        //    }
        //});
        new Hammer(document.getElementById("fllow")).on("tap", function (event) {
            $("#qcode").addClass("animated bounceInDown");
            $("#qcode").show();
        });
        new Hammer(document.getElementById("more1")).on("tap", function (event) {
            window.location.href = "http://viewer.maka.im/k/1HL2HE7A";
        });

    }
}


function qjS() {


    $("#qj").show();
    $("#start").show();
    var qj = $("#qjdiv").html('<script id="main" src="js/main.js"></script>');
    createLogo();
    getRandomLogo();
    renderer.render(scene, camera);
    var gamea = document.getElementById("gamea");
    gamea.play();

    logoHitNum = 0;
    new Hammer(document.getElementsByClassName("pig1")[0]).on("tap", function (event) {
        if (p1c) {
            event.target.style.backgroundImage = "url(img/logo/ad-p.png)";
            hitLogo(logoHitNum);
            p1c = false;
        }
    });
    new Hammer(document.getElementsByClassName("pig2")[0]).on("tap", function (event) {
        if (p2c) {
            event.target.style.backgroundImage = "url(img/logo/baili-p.png)";
            hitLogo(logoHitNum);
            p2c = false;
        }
    });
    new Hammer(document.getElementsByClassName("pig3")[0]).on("tap", function (event) {
        if (p3c) {
            event.target.style.backgroundImage = "url(img/logo/fan-p.png)";
            hitLogo(logoHitNum);
            p3c = false;
        }
    });
    new Hammer(document.getElementsByClassName("pig4")[0]).on("tap", function (event) {

        if (p4c) {
            event.target.style.backgroundImage = "url(img/logo/cw-p.png)";
            hitLogo(logoHitNum);
            p4c = false;
        }
    });
    new Hammer(document.getElementsByClassName("pig5")[0]).on("tap", function (event) {
        if (p5c) {
            event.target.style.backgroundImage = "url(img/logo/sw-p.png)";
            hitLogo(logoHitNum);
            p5c = false;
        }
    });
    new Hammer(document.getElementsByClassName("pig6")[0]).on("tap", function (event) {
        if (p6c) {
            event.target.style.backgroundImage = "url(img/logo/lz-p.jpg)";
            hitLogo(logoHitNum);
            p6c = false;
        }
    });
    new Hammer(document.getElementsByClassName("pig7")[0]).on("tap", function (event) {
        if (p7c) {
            event.target.style.backgroundImage = "url(img/logo/nb-p.png)";
            hitLogo(logoHitNum);
            p7c = false;
        }
    });
    new Hammer(document.getElementsByClassName("pig8")[0]).on("tap", function (event) {
        if (p8c) {
            event.target.style.backgroundImage = "url(img/logo/pc-p.png)";
            hitLogo(logoHitNum);
            p8c = false;
        }
    });
    new Hammer(document.getElementsByClassName("pig9")[0]).on("tap", function (event) {
        if (p9c) {
            event.target.style.backgroundImage = "url(img/logo/dz-p.png)";
            hitLogo(logoHitNum);
            p9c = false;
        }
    });
    new Hammer(document.getElementsByClassName("pig10")[0]).on("tap", function (event) {
        if (p10c) {
            event.target.style.backgroundImage = "url(img/logo/a-p.png)";
            hitLogo(logoHitNum);
            p10c = false;
        }
    });

    new Hammer(document.getElementsByClassName("pig11")[0]).on("tap", function (event) {
        if (p11c) {
            event.target.style.backgroundImage = "url(img/logo/tr-p.jpg)";
            hitLogo(logoHitNum);
            p11c = false;
        }
    });

    new Hammer(document.getElementsByClassName("pig12")[0]).on("tap", function (event) {
        if (p12c) {
            event.target.style.backgroundImage = "url(img/logo/sbk-p.jpg)";
            hitLogo(logoHitNum);
            p12c = false;
        }
    });

    new Hammer(document.getElementsByClassName("pig13")[0]).on("tap", function (event) {
        if (p13c) {
            event.target.style.backgroundImage = "url(img/logo/ep-p.jpg)";
            hitLogo(logoHitNum);
            p13c = false;
        }
    });

    new Hammer(document.getElementsByClassName("pig14")[0]).on("tap", function (event) {
        if (p14c) {
            event.target.style.backgroundImage = "url(img/logo/cl-p.jpg)";
            hitLogo(logoHitNum);
            p14c = false;
        }
    });


    $("#s3").addClass("animated bounceInLeft");
    $("#s2").addClass("animated bounceInRight");

    setTimeout(function () {

        $("#start").remove();

        time = 500;
        numss = setInterval(function () {
            $("#num").text(time--);
            if (time == 0) {
                clearInterval(numss);
                $("#qj").hide();
                var faila = document.getElementById("faila");
                faila.play();
                new Hammer(document.getElementById("back")).on("tap", function (event) {
                    //$("#p4").hide();
                    clearInterval(numss);
                    window.location.href = "http://p.widalian.com:9001/auth/openidAuth.php?callbackurl=http://www.wexue.top/qj/51.php&extend=1";
                });
                $("#p4").show();
            }
        }, 100);
    }, 3000);
}
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

function createLogo() {
    var pig1 = new animateSprite(null, 'pig1', {x: 0, y: 0});
    pig1.init();
    var object1 = new THREE.CSS3DObject(pig1.con[0]);
    object1.position.fromArray([-400, 350, -400]);
    object1.rotation.fromArray([0, 45, 0]);
    //
    var pig2 = new animateSprite(null, 'pig2', {x: 0, y: 0});
    pig2.init();
    var object2 = new THREE.CSS3DObject(pig2.con[0]);
    object2.position.fromArray([400, -220, -510]);
    object2.rotation.fromArray([0, 0, 0]);
    //
    var pig3 = new animateSprite(null, 'pig3', {x: 0, y: 0});
    pig3.init();
    var object3 = new THREE.CSS3DObject(pig3.con[0]);
    object3.position.fromArray([-30, -330, -510]);
    object3.rotation.fromArray([0, 0, 0]);

    var pig4 = new animateSprite(null, 'pig4', {x: 0, y: 0});
    pig4.init();
    var object4 = new THREE.CSS3DObject(pig4.con[0]);
    object4.position.fromArray([300, 360, 450])
    object4.rotation.fromArray([0, Math.PI, 0]);

    var pig5 = new animateSprite(null, 'pig5', {x: 0, y: 0});
    pig5.init();
    var object5 = new THREE.CSS3DObject(pig5.con[0]);
    object5.position.fromArray([-350, -300, 400]);
    object5.rotation.fromArray([0, Math.PI / 2, 0]);

    var pig6 = new animateSprite(null, 'pig6', {x: 0, y: 0});
    pig6.init();
    var object6 = new THREE.CSS3DObject(pig6.con[0]);
    object6.position.fromArray([-510, 400, -70]);
    object6.rotation.fromArray([0, Math.PI / 2, 0]);

    var pig7 = new animateSprite(null, 'pig7', {x: 0, y: 0});
    pig7.init();
    var object7 = new THREE.CSS3DObject(pig7.con[0]);
    object7.position.fromArray([-480, -200, -380]);
    object7.rotation.fromArray([0, Math.PI / 2, 0]);

    var pig8 = new animateSprite(null, 'pig8', {x: 0, y: 0});
    pig8.init();
    var object8 = new THREE.CSS3DObject(pig8.con[0]);
    object8.position.fromArray([410, 100, -510]);
    object8.rotation.fromArray([0, 0, 0.3]);

    var pig9 = new animateSprite(null, 'pig9', {x: 0, y: 0});
    pig9.init();
    var object9 = new THREE.CSS3DObject(pig9.con[0]);
    object9.position.fromArray([510, 375, -35]);
    object9.rotation.fromArray([0, -Math.PI / 2, 0]);

    var pig10 = new animateSprite(null, 'pig10', {x: 0, y: 0});
    pig10.init();
    var object10 = new THREE.CSS3DObject(pig10.con[0]);
    object10.position.fromArray([180, 400, 300]);
    object10.rotation.fromArray([0, Math.PI, 0]);

    var pig11 = new animateSprite(null, 'pig11', {x: 0, y: 0});
    pig11.init();
    var object11 = new THREE.CSS3DObject(pig11.con[0]);
    object11.position.fromArray([-510, 240, -1]);
    object11.rotation.fromArray([0, Math.PI / 2, 0]);

    var pig12 = new animateSprite(null, 'pig12', {x: 0, y: 0});
    pig12.init();
    var object12 = new THREE.CSS3DObject(pig12.con[0]);
    object12.position.fromArray([-120, 190, 400]);
    object12.rotation.fromArray([0, Math.PI, 0]);

    var pig13 = new animateSprite(null, 'pig13', {x: 0, y: 0});
    pig13.init();
    var object13 = new THREE.CSS3DObject(pig13.con[0]);
    object13.position.fromArray([510, 240, -1]);
    object13.rotation.fromArray([0, -Math.PI / 2, 0]);

    var pig14 = new animateSprite(null, 'pig14', {x: 0, y: 0});
    pig14.init();
    var object14 = new THREE.CSS3DObject(pig14.con[0]);
    object14.position.fromArray([-100, 250, -510]);
    object14.rotation.fromArray([0, 0, 0]);
    //
    ////scene.add( object1 );
    ////scene.add( object2 );
    ////scene.add( object3 );
    ////scene.add( object4 );
    ////scene.add( object5 );
    ////scene.add( object6 );
    ////scene.add( object7 );
    ////scene.add( object8 );
    ////scene.add( object9 );
    ////scene.add( object10 );
    //
    pDefArr.push(object1);
    pDefArr.push(object2);
    pDefArr.push(object3);
    pDefArr.push(object4);
    pDefArr.push(object5);
    pDefArr.push(object6);
    pDefArr.push(object7);
    pDefArr.push(object8);
    pDefArr.push(object9);
    pDefArr.push(object10);
    pDefArr.push(object11);
    pDefArr.push(object12);
    pDefArr.push(object13);
    pDefArr.push(object14);
}


function getRandomLogo() {
    for (var i = 0; i < pDefArr.length; i++) {
        //var j = Math.floor(Math.random() * pDefArr.length);
        //pigArr.push(pDefArr[i]);
        //qArr.push(qDefArr[i]);

        scene.add(pDefArr[i]);


        //pDefArr.splice(i, 1);
        //qDefArr.splice(i, 1);
    }

}

