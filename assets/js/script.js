(function ($) {
	"use strict";

	// fixed menu js
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$("#sticky-header").removeClass("sticky-menu");
			$("#header-fixed-height").removeClass("active-height");

		} else {
			$("#sticky-header").addClass("sticky-menu");
			$("#header-fixed-height").addClass("active-height");
		}
	});

	// big image slider js
	$(".big_news_slider_widget").slick({
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		dots: false,
		autoplay: true,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
		nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	});

	// section four news slider js
	$(".section_four_slider").slick({
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		dots: true,
		autoplay: true,
		slidesToScroll: 1,
		arrows: false,
		prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
		nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	});

	// // gallery small image slider js
	$(".small-image-slider").slick({
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		dots: false,
		arrows: false,
		focusOnSelect: true,
		centerMode: true,
		centerPadding: "0px",
		autoplay: false,
		centerMode: true,
		focusOnSelect: true,
		centerPadding: "50px",
		slidesToScroll: 1,
		asNavFor: ".large-image",
	});

	// // gallery big image slider js
	$(".large-image").slick({
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		dots: false,
		arrows: true,
		focusOnSelect: true,
		asNavFor: ".small-image-slider",
		autoplay: true,
		slidesToScroll: 1,
		prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
		nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
	});

	// gallery popup js
	$(".parent-container").magnificPopup({
		delegate: "a",
		type: "image",
		gallery: {
			enabled: true,
		},
	});

	// video popup js
	$('.vidplay').magnificPopup({
		type: 'iframe',
		iframe: {
			markup: '<div class="mfp-iframe-scaler">' +
				'<div class="mfp-close"></div>' +
				'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
				'</div>',
			patterns: {
				youtube: {
					index: 'youtube.com/',
					id: 'v=',
					src: 'https://www.youtube.com/embed/%id%?autoplay=1'
				},
			},
			srcAction: 'iframe_src',
		}
	});


	// scroll to top js
	var btn = $(".scroll-to-top");

	$(window).scroll(function () {
		btn.toggleClass("show", $(window).scrollTop() > 300);
	});

	btn.click(function (e) {
		e.preventDefault();
		if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
			$("html").animate({
					scrollTop: 0,
				},
				800
			);
		} else {
			$("html, body").animate({
					scrollTop: 0,
				},
				0
			);
		}
	});


	// mobilel menu js

	$(".mobile-topbar .bars i").on("click", function () {
		$(".mobile-menu-overlay,.mobile-menu-main").addClass("active");
		return false;
	});

	$(".close-mobile-menu,.mobile-menu-overlay").on("click", function () {
		$(".mobile-menu-overlay,.mobile-menu-main").removeClass("active");
	});

	$('.sub-mobile-menu ul').hide();
	$(".sub-mobile-menu a").on("click", function () {
		$(this).parent(".sub-mobile-menu").children("ul").slideToggle("100");
		$(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
	});

	document.addEventListener('contextmenu', function (e) {
		e.preventDefault();
	});
	document.addEventListener('keydown', function (e) {
		if (e.ctrlKey && e.key === 'u') {
			e.preventDefault();
		}
	});
})(jQuery);