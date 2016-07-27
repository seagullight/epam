$(document).ready(function() {
	
	$("li.dropdown").mouseover(function(){

		$(this).find(".dropdown-menu").css({"display":"block"}); 
		$(this).siblings().find(".dropdown-menu").css({"display":"none"});
	});
		
		$(".dropdown-menu").mouseout(function(){
			$(this).css({"display":"none"});
		
		});
		   });