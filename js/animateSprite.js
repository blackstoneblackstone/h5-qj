
function animateSprite(container, tclass, lo)
{
    this.container = container;
    this.tclass = tclass;
    this.lo = lo;
    this.con = null;
}

animateSprite.prototype =
{
    that:null,
    con:null,
    init:function()
    {
        this.con = $('<div></div>');
        this.con.addClass(this.tclass);
        this.con.css({top:this.lo.y, left:this.lo.x, 'position':'absolute'});
        if(this.container){this.container.append(this.con);}
    },
    destory:function()
    {
        if(this.con) {this.con.remove();}
    }
}