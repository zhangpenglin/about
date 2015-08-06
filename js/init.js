
jQuery(document).ready(function($) {
$('#skills ul li').each(function () {
	$(this).percentPie({
		width: 125,
		trackColor: "#333",
		barColor: "#11ABB0",
		barWeight: 8,
		endPercent: $(this).data("percent"),
		fps: 60
	});
})
  
	$(window).stellar({
		// Set scrolling to be in either one or both directions
		horizontalScrolling: false,
		verticalScrolling: true,

		// Set the global alignment offsets
		horizontalOffset: 0,
		verticalOffset: 0,

		// Refreshes parallax content on window load and resize
		responsive: false,

		// Select which property is used to calculate scroll.
		// Choose 'scroll', 'position', 'margin' or 'transform',
		// or write your own 'scrollProperty' plugin.
		scrollProperty: 'scroll',

		// Select which property is used to position elements.
		// Choose between 'position' or 'transform',
		// or write your own 'positionProperty' plugin.
		positionProperty: 'position',

		// Enable or disable the two types of parallax
		parallaxBackgrounds: true,
		parallaxElements: true,

		// Hide parallax elements that move outside the viewport
		hideDistantElements: true,

		// Customise how elements are shown and hidden
		hideElement: function($elem) {
			$elem.hide();
		},
		showElement: function($elem) {
			$elem.show();
		}
	});
	
	$('.smoothscroll').on('click', function(e) {
		e.preventDefault();

		var target = this.hash,
			$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 1500, 'easeInOutQuint', function() {
			window.location.hash = target;
		});
	});


	var sections = $(".wrapper");
	var navigation_links = $("#nav-wrap a");

	sections.waypoint({

		handler: function(event, direction) {

			var active_section;

			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();
			active_section.siblings().removeClass("active")
			active_section.addClass("active");
			var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');
			$('#skills ul li').each(function () {
				$(this).trigger("mouseover")
			})
			navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		},
		
		offset: '35%'

	});

	
	$(window).on('resize', function() {

		$('header').css({
			'height': $(window).height()
		});
		$('body').css({
			'width': $(window).width()
		})
	});



	$(window).on('scroll', function() {

		var h = $('header').height();
		var y = $(window).scrollTop();
		var nav = $('#nav-wrap');

		if ((y > h * .20) && (y < h) && ($(window).outerWidth() > 768)) {
			nav.fadeOut('fast');
		} else {
			if (y < h * .20) {
				nav.removeClass('opaque').fadeIn('fast');
			} else {
				nav.addClass('opaque').fadeIn('fast');
			}
		}

	});


	$('.item-wrap a').magnificPopup({

		type: 'inline',
		fixedContentPos: false,
		removalDelay: 200,
		showCloseBtn: false,
		mainClass: 'mfp-fade'

	});

	$(document).on('click', '.popup-modal-dismiss', function(e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

});