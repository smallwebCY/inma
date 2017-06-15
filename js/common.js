$(document).ready(function() {
	var documentWidth = $(document.documentElement).width() || $(document.body).width();
	//	console.log(documentWidth)
	if(documentWidth <= 768) {
		$(".navbar-nav .page-scroll").eq(0).on("touchend", function() {
			$(".subNav").stop().slideToggle();
		});
		$(".page-scroll").eq(0).children("a").attr("href", "#")
	} else {
		$(".navbar-nav .page-scroll").eq(0).on("mouseenter", function() {
			$(".subNav").stop().slideDown();
		})
		$(".navbar-nav .page-scroll").eq(0).on("mouseleave", function() {
			$(".subNav").stop().slideUp();
		})
	}
	$(".navbar-nav").on("click", "a", function() {
		$(this).addClass("active").siblings().removeClass("active");
	})
})
$(function() {
	$(".cure-wrap .san-nav li").each(function(index, value) {
		var distanc = 70,
			dis = -distanc * index + "px";
			console.log(dis)
		$(this).css("background", "url(../img/cure/collect2.png)")
		$(this).css("background-position", dis + " 0")
	})
		$(".cure-wrap .san-nav li").eq(0).css("background-position-y","46px");
})
$(function(){
//	alert()
	$(".league-wrap .show-arow").on("click",function(){
//		alert();
		$(".league-wrap .area-wrap").slideDown("fast",function(){
			$(".league-wrap .show-arow").css("display","none")
		});

	})
	$(".league-wrap .hide-arow").on("click",function(){
//		alert();
		$(".league-wrap .area-wrap").slideUp("fast",function(){
			$(".league-wrap .show-arow").css("display","block")
		});

	})
})
