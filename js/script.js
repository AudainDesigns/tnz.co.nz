$(document).ready(function() {
	
	//Dropdown class
	
	$( ".dropdown-toggle" ).click(function() {
		$(this).parent().toggleClass('drop_activated');
		$('.navbar-nav').toggleClass('drop_activated');
	});
	
	$( ".drop_outer a, .drop_sec a, .third-button" ).click(function() {
		$(this).parent().removeClass('drop_activated');
		$('.navbar-nav').removeClass('drop_activated');
		$('.nav-item').removeClass('drop_activated');
	});
	
	//Animated Mobile Toggle Icon
	
	$('.third-button').on('click', function () {
		$('.animated-icon3').toggleClass('open');
	});
	
	//Mobile Toggle Observer
	
	var observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			if (mutation.attributeName === "class") {
				var attributeValue = $(mutation.target).prop(mutation.attributeName);
				var allElementClasses = attributeValue.split(' ')
				//alert("class was added: " + allElementClasses[allElementClasses.length - 1])
				if(allElementClasses[allElementClasses.length - 1] === "open"){
					$(".nav_sec").addClass("tnz_white_bg");
					 
				} else {
					$(".nav_sec").removeClass("tnz_white_bg");
				}
			}
		});
	});

	observer.observe(document.getElementById('custom_nav_toggler'), {
	  attributes: true
	});

	//Dropdown observer	
	
	if ($(window).width() >= 992){
		
		var observer = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutation) {
				if (mutation.attributeName === "class") {
					var attributeValue = $(mutation.target).prop(mutation.attributeName);
					var allElementClasses = attributeValue.split(' ')
					//alert("class was added: " + allElementClasses[allElementClasses.length - 1])
					if(allElementClasses[allElementClasses.length - 1] === "show"){
						if(!$('.dropdown-menu').hasClass('show')){
							$(".nav_sec").removeClass("tnz_white_bg");
						} else if($('.dropdown-menu').hasClass('show')){
							$(".nav_sec").addClass("tnz_white_bg");
						}
					} else {
						if(!$('.dropdown-menu').hasClass('show')){
							$(".nav_sec").removeClass("tnz_white_bg");
						} else if($('.dropdown-menu').hasClass('show')){
						   $(".nav_sec").addClass("tnz_white_bg");
						}
					}
				}
			});
		});

		observer.observe(document.getElementById('Products'), {
		  attributes: true
		});
		observer.observe(document.getElementById('Solutions'), {
		  attributes: true
		});
		observer.observe(document.getElementById('Resources'), {
		  attributes: true
		});
		observer.observe(document.getElementById('Flag'), {
		  attributes: true
		});

	}

});