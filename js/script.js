jQuery(document).ready(function($){
	// Menu Function
	$(".menu-btn").click(function(){
		$(".header-right").toggleClass("active");
		$("body").toggleClass("active");
		$(this).toggleClass("active");
	});
	// Header Links Active on scroll
	$(window).on("scroll", function () {
		var s = $(this).scrollTop();
		var currentId = "";
		$(".scroll-section").each(function () {
			if (s >= $(this).offset().top - 150) {
				currentId = $(this).attr("id");
			}
		});
		if (currentId) {
			$(".header-menu a").removeClass("active");
			$('.header-menu a[href="#' + currentId + '"]').addClass("active");
		}
	});
	// Main Links Function
	$(".header-menu a, .button a, .ft-links a").click(function(){
		var target = $(this).attr("href");
		$("html,body").animate({
			scrollTop:($(target).offset().top -60)
		});
		return false;
	});
	$(".header-menu a").click(function(){
		$(".header-right, .menu-btn, body").removeClass("active");
	});
	var currentHash = window.location.hash;
	if(currentHash) {
		$(".header-menu a").removeClass("active");
		$('.header-menu a[href="'+currentHash+'"]').addClass("active");
	} else {
		$(".home .header-menu a").first().addClass("active");
	}
	// Header Wrap Active
	$(window).scroll(function(){
		if($(window).scrollTop()>150) {
			$(".header-wrap").addClass("active");
		} else {
			$(".header-wrap").removeClass("active");
		}
	});
	// Back Top
	$(window).scroll(function(){
		if ($(window).scrollTop() > 500){
			$(".back-top").addClass("active");
		} else {
			$(".back-top").removeClass("active");
		}
	});
	$(".back-top").click(function(){
		$("html,body").animate({
			scrollTop:($("body").offset().top)
		});
	});
	// Faq Function
	$(".faq-item").click(function(){
		var $info = $(this).find(".faq-info");
		if ($info.is(":visible")) {
			$info.slideUp();
			$(this).removeClass("active");
		} else {
			$(".faq-info").slideUp();
			$(".faq-item").removeClass("active");
			$info.slideDown();
			$(this).addClass("active");
		}
	});
	// Isotops Portfolio Filters
	if($(".portfolio-features").length > 0) {
		jQuery(function($){
			var $grid = $('.portfolio-features').isotope({
				itemSelector: '.portfolio-outer',
				layoutMode: 'fitRows',
				transitionDuration: '700ms',
				hiddenStyle:  { opacity: 0, transform: 'translateX(-100px)' },
				visibleStyle: { opacity: 1, transform: 'translateX(0)' }
			});
			$('.portfolio-filter').on('click', '.theme-btn', function () {
				var filterValue = $(this).data('filter');
				$grid.isotope({ filter: filterValue });
				$('.portfolio-filter .theme-btn').removeClass('current');
				$(this).addClass('current');
			});
		});
	}
	//Initialize AOS
	AOS.init();
});