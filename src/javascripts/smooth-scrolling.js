
//	smooth scrolling from http://css-tricks.com/snippets/jquery/smooth-scrolling/

$(document).ready(function() {

	$(function() {

		$('a[href*=#]:not([href=#])').click(function() {

			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

			//	calculate the top offset
				var topOffset = target.offset().top - 13;				
				var appBar = $('nav.app-bar');
				if(appBar) {
					topOffset -= appBar.height();
					if(appBar.hasClass("has-tool-bar")) topOffset -= 60;
				}

				var duration = 1000;
				if($(this).attr("data-scroll-duration")) duration = $(this).attr("data-scroll-duration");

				var easing = "easeInOutQuint";
				if($(this).attr("data-scroll-easing")) easing = $(this).attr("data-scroll-easing");

				if(target.length) {
					$('html, body').velocity('scroll', { duration: duration, offset: topOffset, easing: easing });
					return false;
				}

			}

		});

	});

});
