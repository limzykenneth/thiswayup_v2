$(document).ready(function(){
	if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
		var winWidth = $(window).width()-($(window).width()/5);
		var winHeight = $(window).height();
		
		$(document).mousemove(function(e){
			var x = e.pageX;
			var y = e.pageY;
			
			var rotateY = (360/winWidth) * y;
			var rotateX = (360/winHeight) * x;
			
			$('.cube').css({'transform':'rotateY(' + rotateX + 'deg) rotateX(' + rotateY + 'deg)'});
		});	
	}else{
		$("body").html('<div id="page-content"><img id="logo" src="images/logo-1.gif"></div>');
		$(".front").css("background","none");
		$(".back").css("background","none");
	}
});