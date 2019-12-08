var key;
var currentWidth = window.innerWidth;

$(function() {
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
	
	
	key = getUrlVars();
	if(key == "view_pc"){
		$("head").append("<meta name='viewport' content='width=1200' />");
		
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