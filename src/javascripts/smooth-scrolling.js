
//	smooth scrolling from http://css-tricks.com/snippets/jquery/smooth-scrolling/

$(document).ready(function() {

	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

			//	calculate the top offset
				var topOffset = target.offset().top - 20;
				
				var appBar = $('nav.app-bar');
				if(appBar) {
					topOffset -= appBar.height();
					if(appBar.hasClass("has-tool-bar")) topOffset -= 60;
				}

				if (target.length) {
					$('html,body').animate({
						scrollTop: topOffset
					}, 1000);
					return false;
				}
			}
		});
	});

});
