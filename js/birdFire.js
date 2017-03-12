
function birdFire()
{
}

birdFire.prototype =
{
    that:null,
    shadowArr:[],
    loopid:0,
    n:0,
    ty: 450,
    fimg:null,
    fingimg:null,
    init:function()
    {
        this.fimg = new Image();
        this.fimg.src = 'img/fire.png';
        $(this.fimg).css({'width': 170, 'position': 'absolute'});
        $('#birdcon').append(this.fimg);
        $(this.fimg).css({top: 620, left: 230});
    },
    moveing:function(ishit, type)
    {
        $(this.fimg).remove();

        this.fingimg = $('<div></div>');
        $(this.fingimg).css({top: 720, left: 315, 'position':'absolute'});
        $('#birdcon').append(this.fingimg);

        var fire = new animateSprite(this.fingimg, 'bird_fire', {x:-118.5, y:-141.5});
        fire.init();
        TweenMax.to(this.fingimg, 0, {scale:.7});

        //var fire = new Image();
        //fire.src = 'img/fire1.png';
        //$(fire).css({left:-118.5, top:-141.5, 'position':'absolute', width:237});
        //$(this.fingimg).append(fire);
        //TweenMax.to(this.fingimg, 0, {scale:.7});

        var that = this;

        var destroy = function()
        {
            for(var i=0; i<that.shadowArr.length; i++)
            {
                that.shadowArr[i].destory();
            }
            $(that.fingimg).remove();
            window.cancelAnimationFrame(that.loopid);
        }

        if(!type)
        {
            type = 'medium';
        }

        switch (type)
        {
            case 'far':
                TweenMax.to(cameraFov, .5, {f:120, onUpdate:function()
                {
                    camera.fov = cameraFov.f;
                    camera.updateProjectionMatrix();
                }});

                TweenMax.to(this.fingimg, 1, {
                    bezier:[{top:720, scale:2}, {top:0, scale:1.5}, {top:this.ty, scale:0, alpha:0}],
                    ease:Strong.easeOut, onComplete: destroy});
                break;

            case 'medium':
                TweenMax.to(cameraFov, .5, {f:110, onUpdate:function()
                {
                    camera.fov = cameraFov.f;
                    camera.updateProjectionMatrix();
                }});

                TweenMax.to(this.fingimg, 1, {
                    bezier:[{top:720, scale:2}, {top:200, scale:1.5}, {top:this.ty, scale:0, alpha:0}],
                    ease:Strong.easeOut, onComplete: destroy});
                break;

            case 'near':
                TweenMax.to(cameraFov, .5, {f:100, onUpdate:function()
                {
                    camera.fov = cameraFov.f;
                    camera.updateProjectionMatrix();
                }});

                TweenMax.to(this.fingimg, 1, {
                    bezier:[{top:720, scale:2}, {top:300, scale:1.5}, {top:this.ty, scale:0, alpha:0}],
                    ease:Strong.easeOut, onComplete: destroy});
                break;
        }


        TweenMax.to(cameraFov, .3, {f:100, onUpdate:function()
        {
            camera.fov = cameraFov.f;
            camera.updateProjectionMatrix();
        }, delay:1, ease:Circ.easeOut});

        setTimeout(function()
        {
            if(ishit)
            {
                var boom = new animateSprite($('#birdcon'), 'bird_boom', {x:70, y:210});
                boom.init();
                boom.con.css({'position': 'absolute'});
                $(boom.con).one("webkitAnimationEnd", function(){$(boom.con).remove();});
            }
            else
            {
                var boom = new animateSprite($('#birdcon'), 'bird_boom2', {x:220, y:305});
                boom.init();
                boom.con.css({'position': 'absolute', '-webkit-transform':'scale(3)'});
                $(boom.con).one("webkitAnimationEnd", function(){$(boom.con).remove();});
            }
        }, 300);

        var loop = function()
        {
            that.n++;

            if(that.n > 5 && that.n < 30 && that.n % 3 == 0)
            {
                var scale = Number($(that.fingimg).css('-webkit-transform').split('(')[1].split(',')[0]) - .1;
                scale = Math.max(.1, scale);

                var shx = Number(that.fingimg[0].style.left.split('px')[0]) - 70;
                var shy = Number(that.fingimg[0].style.top.split('px')[0]) - 200;

                var shadow = new animateSprite($('#birdcon'), 'bird_shadow', {x:shx, y:shy});
                shadow.init();
                shadow.con.css({'-webkit-transform':'scale('+scale+')', 'position': 'absolute'});

                TweenMax.to(shadow.con, .4, {opacity:0, scale:scale +.2});
                that.shadowArr.push(shadow);
            }
            loopid = window.requestAnimationFrame(loop);
        }

        this.loopid = window.requestAnimationFrame(loop);
    }
}