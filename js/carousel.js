$(document).ready(function() {
	
	if ($(".is_home")[0]){
		
		//if window width < 991
		if ( $(window).width() < 991 ) {
			startCarousel();
			$('.tnz_box_outer').addClass('tnz_escape_width');
		} else {
			$('.sub-hero-carousel').addClass('off');
			$('.tnz_box_outer').removeClass('tnz_escape_width');
		}
		
		//on window resize, if width < 991
		$(window).resize(function() {
			if ( $(window).width() < 991 ) {
				startCarousel();
				$('.tnz_box_outer').addClass('tnz_escape_width');
			} else {
				stopCarousel();
				$('.tnz_box_outer').removeClass('tnz_escape_width');
			}
		});
		
		function startCarousel(){
			$('.sub-hero-carousel').owlCarousel({
				navigation : false, // Show next and prev buttons
				margin:10,
				paginationSpeed : 400,
				autoplay:false,
				items : 1,
				loop:false,
				nav:true,
				stagePadding:50,
				navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"]
			});
		}
		function stopCarousel() {
			var owl = $('.sub-hero-carousel');
			owl.trigger('destroy.owl.carousel');
			owl.addClass('off');
		}
	
		$('.sms-carousel').owlCarousel({
			navigation : true, // Show next and prev buttons
			margin:10,
			paginationSpeed : 400,
			autoplay:false,
			items : 1,
			loop:false,
			nav:true,
			stagePadding:50,
			navText: ["<i class='bi bi-chevron-left'></i>","<i class='bi bi-chevron-right'></i>"],
			responsive : {
				991 : {
					items : 1
				},
				992 : {
					items : 4,
					stagePadding:0,
					dots : false
				}
			}
		});
		
		$('.cs-carousel').owlCarousel({
			navigation : false, // Show next and prev buttons
			dots : true,
			margin:10,
			paginationSpeed : 400,
			autoplay:false,
			items : 1,
			loop:false,
			nav:true,
			stagePadding:50,
			navText: ["<i class='bi bi-chevron-left'></i>","<i class='bi bi-chevron-right'></i>"],
			responsive : {
				991 : {
					items : 1,
					stagePadding:50
				},
				992 : {
					items : 3,
					stagePadding:0
				}
			}
		});
		
		$('.testimonial-carousel').owlCarousel({
			navigation : true, // Show next and prev buttons
			dots : true,
			margin:10,
			paginationSpeed : 400,
			autoplay:false,
			items : 1,
			loop:false,
			nav:true,
			navText: ["<i class='bi bi-chevron-left'></i>","<i class='bi bi-chevron-right'></i>"],
			responsive : {
				0 : {
					items : 1,
					stagePadding:50
				},
				992 : {
					items : 1,
					stagePadding:0
				}
			}
		});
		
	} else if ($(".is_sms")[0]) {
		
		if ( $(window).width() < 991 ) {
			startCarousel();
			$('.more_features_wrapper, .tnz_box_outer').addClass('tnz_escape_width');
		} else {
			$('.features-carousel').addClass('off');
			$('.more_features_wrapper, .tnz_box_outer').removeClass('tnz_escape_width');
		}
		
		$(window).resize(function() {
			if ( $(window).width() < 991 ) {
				startCarousel();
				$('.more_features_wrapper, .tnz_box_outer').addClass('tnz_escape_width');
			} else {
				stopCarousel();
				$('.more_features_wrapper, .tnz_box_outer').removeClass('tnz_escape_width');
			}
		});
		
		function startCarousel(){
			$('.features-carousel').owlCarousel({
				navigation : false, // Show next and prev buttons
				margin:10,
				paginationSpeed : 400,
				autoplay:false,
				items : 1,
				loop:false,
				nav:true,
				stagePadding:50,
				navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
				responsive : {
					0 : {
						items : 1
					},
					575 : {
						items : 2
					},
					767 : {
						items : 2
					},
					992 : {
						items : 4,
						stagePadding:0,
						dots : false
					}
				}
			});
		}
		function stopCarousel() {
			var owl = $('.features-carousel');
			owl.trigger('destroy.owl.carousel');
			owl.addClass('off');
		}
		
		$('.sms-carousel').owlCarousel({
			navigation : true,
			margin:20,
			paginationSpeed : 400,
			autoplay:false,
			items : 1,
			loop:false,
			nav:true,
			stagePadding:50,
			navText: ["<i class='bi bi-chevron-left'></i>","<i class='bi bi-chevron-right'></i>"],
			responsive : {
				991 : {
					items : 1
				},
				992 : {
					items : 4,
					stagePadding:0,
					dots : false
				}
			}
		});
			
		$('.cs-carousel').owlCarousel({
			navigation : false,
			dots : true,
			margin:10,
			paginationSpeed : 400,
			autoplay:false,
			items : 1,
			loop:false,
			nav:true,
			stagePadding:50,
			navText: ["<i class='bi bi-chevron-left'></i>","<i class='bi bi-chevron-right'></i>"],
			responsive : {
				991 : {
					items : 1,
					stagePadding:50
				},
				992 : {
					items : 3,
					stagePadding:0
				}
			}
		});
		
		$('.testimonial-carousel').owlCarousel({
			navigation : true,
			dots : true,
			margin:10,
			paginationSpeed : 400,
			autoplay:false,
			items : 3,
			loop:false,
			nav:true,
			navText: ["<i class='bi bi-chevron-left'></i>","<i class='bi bi-chevron-right'></i>"],
			responsive : {
				0 : {
					items : 1,
					stagePadding:50
				},
				992 : {
					items : 3,
					stagePadding:0
				}
			}
		});
	
	
	} else if ($(".is_solution.with_caorusel")[0]) {
		
		if ( $(window).width() < 991 ) {
			startCarousel();
			$('.tnz_dashboard').addClass('tnz_escape_width');
		} else {
			$('.dashboard-carousel').addClass('off');
			$('.tnz_dashboard').removeClass('tnz_escape_width');
		}
		
		$(window).resize(function() {
			if ( $(window).width() < 991 ) {
				startCarousel();
				$('.tnz_dashboard').addClass('tnz_escape_width');
			} else {
				stopCarousel();
				$('.tnz_dashboard').removeClass('tnz_escape_width');
			}
		});
		
		function startCarousel(){
			$('.dashboard-carousel').owlCarousel({
				navigation : false,
				margin:20,
				paginationSpeed : 400,
				autoplay:false,
				items : 1,
				loop:false,
				nav:true,
				stagePadding:20,
				navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"]
			});
		}
		function stopCarousel() {
			var owl = $('.dashboard-carousel');
			owl.trigger('destroy.owl.carousel');
			owl.addClass('off');
		}
	
	} else if ($(".is_2fa, .is_sms_api")[0]) {
		
		if ( $(window).width() < 991 ) {
			startCarousel();
			$('.tnz_2fa_block_outer').addClass('tnz_escape_width');
		} else {
			$('.2fa-carousel').addClass('off');
			$('.tnz_2fa_block_outer').removeClass('tnz_escape_width');
		}
		
		$(window).resize(function() {
			if ( $(window).width() < 991 ) {
				startCarousel();
				$('.tnz_2fa_block_outer').addClass('tnz_escape_width');
			} else {
				stopCarousel();
				$('.tnz_2fa_block_outer').removeClass('tnz_escape_width');
			}
		});
		
		function startCarousel(){
			$('.2fa-carousel').owlCarousel({
				navigation : false,
				margin:20,
				paginationSpeed : 400,
				autoplay:false,
				items : 1,
				loop:false,
				nav:true,
				stagePadding:50,
				navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"]
			});
		}
		function stopCarousel() {
			var owl = $('.2fa-carousel');
			owl.trigger('destroy.owl.carousel');
			owl.addClass('off');
		}
		
		$('.testimonial-carousel').owlCarousel({
			navigation : true,
			dots : true,
			margin:10,
			paginationSpeed : 400,
			autoplay:false,
			items : 3,
			loop:false,
			nav:true,
			navText: ["<i class='bi bi-chevron-left'></i>","<i class='bi bi-chevron-right'></i>"],
			responsive : {
				0 : {
					items : 1,
					stagePadding:50,
					dots:true
				},
				992 : {
					items : 3,
					stagePadding:0,
					dots:false
				}
			}
		});
	
	} else {
		
	}
	
	
});