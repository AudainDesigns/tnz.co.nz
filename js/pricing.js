$(document).ready(function() {
	
	var boxes = $('.tnz_collapsible_outer');
	
	$(".tnz_collapsible_outer").click(function() {
		if($(this).hasClass('tnz_show')){
			boxes.removeClass('tnz_show');
			$(this).removeClass("tnz_show");
		} else if(!$(this).hasClass('tnz_show')){
			boxes.removeClass('tnz_show');
			$(this).addClass('tnz_show');
		}
	});
	
	
});