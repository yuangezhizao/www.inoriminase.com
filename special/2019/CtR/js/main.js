var key;
var currentWidth = window.innerWidth;

function randomImages(id){
	var box = $(id);

  var imageList = ['ring','s_part01','s_part02','s_part03','s_part04','s_part05','s_part06','s_part07','s_part08','s_part09'];

  for( var i = 0; i < imageList.length; i++){
	var x = Math.floor(Math.random() * 100);
    var y = Math.floor(Math.random() * 100);
	  var _w = Math.floor(Math.random() * 20)+30;
	  box.append('<img src="images/bg/'+imageList[i]+'.png" width='+ _w +' alt="" class="abs img_box" style="top:'+y+'%; left:'+x+'%;">');
  }
	for( var i = 0; i < imageList.length; i++){
	var x = Math.floor(Math.random() * 100);
    var y = Math.floor(Math.random() * 100);
	  var _w = Math.floor(Math.random() * 20)+15;
	  box.append('<img src="images/bg/'+imageList[i]+'.png" width='+ _w +' alt="" class="abs spin" style="top:'+y+'%; left:'+x+'%;">');
  }
}


$(function() {
	randomImages('#bg');
	var rellax = new Rellax('.rellax', {
		center: true
	});
		
	$('a[href^="#"]').click(function() {
	var speed = 500;
	var href = $(this).attr("href");
	var target = $(href == "#" || href == "" ? 'html' : href);
	var position = target.offset().top -50;
	$('body,html').animate({scrollTop:position}, speed, 'swing');
		
		
	
	if($(window).width() < 767){
	$(".navOuter").slideUp(0);	
	}else{
	$(".navOuter").slideDown(0);
	}
	if($("#menu_btn").hasClass("open")){
	$("#menu_btn").removeClass("open");
	}
	
	return false;
	});
	
	
	
	$(".toggle-body").slideUp(0);
	$(".open .toggle-body").slideDown(0);
	
	$(".toggle-button").click(function(){
		$(this).parent().toggleClass("open");
		$(this).parent().find(".toggle-body").slideToggle(350);
	});
	
	$(".btns").hover(function(){
		if(!$(window).width() < 767){
			$(this).addClass("pulse");
		}
	},function(){
		$(this).removeClass("pulse");
	});
	$(".openUl li .toggle-btn").click(function(){
		if($(this).parent().parent().hasClass("open")){
			$(this).parent().parent().removeClass("open");
		} else {
			$(this).parent().parent().addClass("open");
		}
	});
	
	
	
	key = getUrlVars();
	if(key == "view_pc"){
		$("head").append("<meta name='viewport' content='width=1400 user-scalable=no,maximum-scale=1' />");
		
		if ((navigator.userAgent.indexOf("iPhone") > 0 && navigator.userAgent.indexOf("iPad") == -1) || navigator.userAgent.indexOf("iPod") > 0 || navigator.userAgent.indexOf("Android") > 0) {
			$("#btnSP").css({"display":"block"});
		}else {
        	$("#btnSP").css({"display":"none"});
        }
	}else{
		$("head").append("<meta name='viewport' content='width=device-width,user-scalable=no,maximum-scale=1' />");
		$("#btnSP").css({"display":"none"});
	}
	
	
	$(window).on("scroll resize load", function(e) {
			if ($(this).scrollTop() > 100) { 
				$("#pagetop").fadeIn();
			} else {
				$("#pagetop").fadeOut();
			}
		
		if(e.type == "resize"){
			if (currentWidth == window.innerWidth) {
				return;
			}
			
			currentWidth = window.innerWidth;
			
			if($(window).width() < 767){
				$(".navOuter").slideUp(0);	
			}else{
				$(".navOuter").slideDown(0);
			}
			if($("#menu_btn").hasClass("open")){
				$("#menu_btn").removeClass("open");
			}
			
		}
		
		
		});
	
	$("#menu_btn").click(function(){
		$(this).toggleClass("open");
		$(".navOuter").slideToggle(250);
	});
	
});

function getUrlVars(){
	var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++){
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    var id = "0";
    if(vars.key){
	    id = vars.key;
    }
            	
    if(id.match(/^[a-zA-Z0-9_]+$/)){
        return id;
    }else{
	    //error
	    return "";
	}
}

$(window).on("orientationchange",function(){
	location.reload();
});