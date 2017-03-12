
function showMiss (){
	var num = Math.ceil(Math.random()*3);
	
	$("#miss").show();
	TweenMax.to($("#miss"), 0.5, {left:"0px", ease:Back.easeInOut});
	TweenMax.to($(".miss_" + num), 0.5, {opacity:1, onComplete:function (){
		TweenMax.to($("#miss"), 0.5, {top:"-10px", delay:0.5, ease:Back.easeInOut});
		TweenMax.to($(".miss_" + num), 0.5, {opacity:0, delay:0.5, onComplete:function (){
			$("#miss").css({"left":"50px", "top":"0px"});
			$("#miss").hide();
		}});
	}});
}

function showHit (){
	var num = Math.ceil(Math.random()*2);
	var s;
	if (num == 1){
		s = "cool";
	}else if (num == 2){
		s = "yeah";
	}
	$("#hit").show();
	$("." + s).show();
	TweenMax.to($(".light"), 0.5, {opacity:1, left:"0px"});
	TweenMax.to($(".en"), 0.5, {opacity:1, left:"200px", ease:Back.easeInOut});
	TweenMax.to($(".cn"), 0.5, {opacity:1, left:"255px", ease:Back.easeInOut, onComplete:function (){
		TweenMax.to($(".light"), 0.5, {opacity:0, left:"50px", delay:0.5});
		TweenMax.to($(".en"), 0.5, {opacity:0, top:"35px", ease:Back.easeInOut, delay:0.5});
		TweenMax.to($(".cn"), 0.5, {opacity:0, top:"145px", ease:Back.easeInOut, delay:0.5, onComplete:function (){
			$("." + s).hide();
			$("#hit").hide();
			$(".en").css({"left":"100px", "top":"55px"});
			$(".cn").css({"left":"355px", "top":"160px"});
			$(".light").css({"left":"-50px"});
		}});
	}});
}

function showWinPrize (prize)
{
	var num = Math.ceil(Math.random()*5);

	$("#win_prize").show();
	TweenMax.to($(".light"), 0.5, {opacity:1, left:"0px"});
	if (num == 5){
		TweenMax.to($(".txt_" + num), 0.5, {opacity:1, left:"140px", ease:Back.easeInOut});
	}else{
		TweenMax.to($(".txt_" + num), 0.5, {opacity:1, left:"90px", ease:Back.easeInOut});
	}

	if(prize == 1)
	{
		TweenMax.to($(".ticket"), 0.5, {opacity:1, left:"355px", ease:Back.easeInOut, onComplete:function (){
			TweenMax.to($(".light"), 0.5, {opacity:0, left:"50px", delay:0.5});
			TweenMax.to($(".ticket"), 0.5, {opacity:0, top:"35px", ease:Back.easeInOut, delay:0.5});
			TweenMax.to($(".txt_" + num), 0.5, {opacity:0, top:"80px", ease:Back.easeInOut, delay:0.5, onComplete:function (){
				$("#win_prize").hide();
				$(".light").css({"left":"-50px"});
				$(".ticket").css({"left":"385px", "top":"50px"});
				if (num == 5){
					$(".txt_" + num).css({"left":"40px", "top":"100px"});
				}else {
					$(".txt_" + num).css({"left":"-10px", "top":"100px"});
				}
			}});
		}});
	}
	else
	{
		TweenMax.to($(".ticket2"), 0.5, {opacity:1, left:"355px", ease:Back.easeInOut, onComplete:function (){
			TweenMax.to($(".light"), 0.5, {opacity:0, left:"50px", delay:0.5});
			TweenMax.to($(".ticket2"), 0.5, {opacity:0, top:"35px", ease:Back.easeInOut, delay:0.5});
			TweenMax.to($(".txt_" + num), 0.5, {opacity:0, top:"80px", ease:Back.easeInOut, delay:0.5, onComplete:function (){
				$("#win_prize").hide();
				$(".light").css({"left":"-50px"});
				$(".ticket2").css({"left":"385px", "top":"50px"});
				if (num == 5){
					$(".txt_" + num).css({"left":"40px", "top":"100px"});
				}else {
					$(".txt_" + num).css({"left":"-10px", "top":"100px"});
				}
			}});
		}});
	}
}
