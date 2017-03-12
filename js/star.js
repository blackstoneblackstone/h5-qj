
function star(loobj)
{
    this.loobj = loobj;
}

star.prototype =
{
    img:null,
    init:function()
    {
        this.img = new Image();
        this.img.src = 'img/tips/stary.png';
        var rw = Math.floor(Math.random() * 70) + 80;
        $(this.img).css({'position':'absolute', top:500, left:250, width:rw});
        $(this.img).addClass('olight');
        $('#ostarcon').append(this.img);
        var that = this;
        var rt = Math.random()*3 + 5;
        TweenMax.to(this.img, rt, {alpha:0.6, top: this.loobj.top, left: this.loobj.left, onComplete:function()
        {
            that.destory();
        }});
    },
    destory:function()
    {
        if(this.img)
        {
            $(this.img).remove();
        }
    }
}