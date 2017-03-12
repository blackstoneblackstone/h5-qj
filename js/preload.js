
/**
 * 加载页面
 * @author	Terence
 *
 * @param	target	    加载对象
 * @param   callback    加载完成后回调函数
 */

function loading(target, callback, progressfun)
{
    if(target instanceof jQuery)
        target = target[0];
    var loadedlen = 0;
    var url = [];
    var len = $(target.document).find('img').length;
    $(target.document).find("*").each(function() {var bgi = $(this).css('backgroundImage');if(bgi != 'none') {len++;url.push(bgi.substr(4, bgi.length - 5));}});
    $(target.document).find('img').each(function(index){url.push(this.src);})
    if(url.length == 0) {setTimeout(callback, 0);return;}


    for (var i=0; i<url.length; i++)
    {
        var img = new Image();
        img.onerror = img.onload = function()
        {
            loadedlen++;
            progressfun(Math.floor(loadedlen/len * 100));
            if(loadedlen >= len) {callback();}
        }
        img.src = url[i];
        img.style.display = 'none';
    }
}