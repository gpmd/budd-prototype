jQuery.noConflict();

jQuery(document).ready(function($){



	// Function to detect when the window is resized
	// ==========================================================================

	function detectResize() {
		var resizeTimeout;
		$(window).bind('resize', function() {
			if (resizeTimeout) clearTimeout(resizeTimeout);
			resizeTimeout = setTimeout(function() {
				// Do the sticky navbar
				stickyNavbar();
			}, 100); // Resize with 100ms timeout
		});
	}
	detectResize();

	// Account toolbar
	// ==========================================================================

	// Slide account toolbar down on page load
	$('.account-toolbar').animate({
		'top': '0'
	}, 750, 'easeOutQuad');

	// Carousel
	// ==========================================================================

	$('.carousel').carousel({
		interval: 7500,
		pause: "hover"
	});

	// Uniform
	// ==========================================================================

	$("input:checkbox").uniform();


	// Waypoints
	// ==========================================================================

	// Simple sticky navbar
	// ====================

	/*$.waypoints.settings.scrollThrottle = 30;
	$('.navbar').waypoint(function(event, direction) {
		$(this).toggleClass('sticky', direction === "down");
		event.stopPropagation();
	});*/

	// Better sticky navbar (with added bounce!)
	// =========================================

	function stickyNavbar() {
		// Do our DOM lookups beforehand
		var nav_container = $(".navbar");
		var nav = $(".navbar-inner");
		var browserwidth = $(window).width();
		// Set some defaults
		var top_spacing = 22;
		var waypoint_offset = 22;
		// Do stuff if browser width is < less than 768
		if (browserwidth < 767) {
			nav_container.waypoint({
				handler: function(event, direction) {
					if (direction == 'down') {		
						nav_container.stop().addClass("sticky").css("top",-nav.outerHeight()).animate({"top":top_spacing});
						
					} else {
						nav_container.stop().removeClass("sticky").css("top",nav.outerHeight()+waypoint_offset).animate({"top":""});
					}
				},
				offset: function() {
					return -nav_container.outerHeight()-waypoint_offset;
				}
			});
		// Do stuff if browser width is > greater than 768 but less than 977
		} else if (browserwidth > 768 && browserwidth < 977) {
			nav_container.stop().waypoint('destroy').css("top", "auto");
		// Do stuff if browser width is > greater than 978
		} else if (browserwidth > 978) {
			nav_container.stop().waypoint('destroy').css("top", "40px"); // 40px equal to @baseLineHeight * 1.8
		}
	}
	stickyNavbar();

	// POW! Smooth scrolling on-page links
	// ===================================

	// http://www.zachstronaut.com/posts/2009/01/18/jquery-smooth-scroll-bugs.html
	var scrollElement = 'html, body';
	$('html, body').each(function () {
		var initScrollTop = $(this).attr('scrollTop');
		$(this).attr('scrollTop', initScrollTop + 1);
		if ($(this).attr('scrollTop') == initScrollTop + 1) {
			scrollElement = this.nodeName.toLowerCase();
			$(this).attr('scrollTop', initScrollTop);
			return false;
		}    
	});

	//$("a[href^='#']").click(function(event) {
	$('.smooth-scroll').click(function(event) {
		event.preventDefault();
		
		var $this = $(this),
		target = this.hash,
		$target = $(target);
		
		$(scrollElement).stop().animate({
			'scrollTop': $target.offset().top
		}, 1500, 'easeOutQuad', function() {
			window.location.hash = target;
		});
		
	});


	// Toggle navbar
	// ==========================================================================

	$('.navbar .toggle').click(function () {
		// Toggles the menu slide
		$('.navbar-inner .container').slideToggle(500, 'easeOutQuad', function() {
			// Toggles the arrow icon
			$('.navbar .toggle i').toggleClass('icon-chevron-down icon-chevron-up');
		});
	});

});