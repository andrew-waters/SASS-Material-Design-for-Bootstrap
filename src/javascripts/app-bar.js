
+function ($) {

	'use strict';

	var AppBar = function(element) {
	}

	AppBar.VERSION = '1.0.0';


	// AppBar PLUGIN DEFINITION
	// ==========================

	function Plugin(option) {

	}

	var old = $.fn.AppBar;

	$.fn.AppBar = Plugin;
	$.fn.AppBar.Constructor = AppBar;
	$.fn.AppBar.noConflict = function() {
		$.fn.AppBar = old;
		return this;
	}

	$(document).ready(function() {

		var overlay = $('.app-bar-overlay');

		$('.app-bar .action-icons .search-icon').on('click', function(e) {

			e.preventDefault();

			$('.app-bar .action-icons, .app-bar .navigation-drawer-toggle, .app-bar .title').animate({ opacity: 0 });
			
			$('.app-bar .search-form').fadeIn();
			$('.app-bar .search-form .form-control').focus();
			overlay.addClass('active');

			$('body').addClass('noscroll');

			return false;

		});

		$('.app-bar .search-form .back-icon').on('click', function(e) {

			overlay.removeClass('active');

			e.preventDefault();

			$('.app-bar .search-form').fadeOut();

			$('.app-bar .action-icons, .app-bar .navigation-drawer-toggle, .app-bar .title').animate({ opacity: 1 });

			$('body').removeClass('noscroll');

			return false;

		});


		var bodyHasStatusBar = $('body').hasClass('has-status-bar');

	//	build the Skrollr properties (only applies to extended app bars)
		$.each($('.app-bar.app-bar-extended:not(.app-bar-static)'), function() {

			var statusBarLargeHeight = bodyHasStatusBar ? 280 : 255;
			var statusBarSmallHeight = bodyHasStatusBar ? ($(this).hasClass('has-tool-bar') ? 65 : 90) : 65;

			var appBarHasTabs = $(this).hasClass('app-bar-has-tabs');

			if(appBarHasTabs) {

			//	add the data position
				var tabs = $(this).find('.nav.nav-tabs');

				tabs.attr("data-0", "margin-top: 2px;");
				tabs.attr("data-205", "margin-top: -20px;");

				statusBarSmallHeight += 50;

			}

			$(this).attr("data-0", "height: " + statusBarLargeHeight + "px; box-shadow: 0px 0px 10px rgb(255, 255, 255);");
			$(this).attr("data-205", "height: " + statusBarSmallHeight + "px; box-shadow: -0px -5px 15px rgb(0, 0, 0);");

			var title = $(this).find('.title');

			if(title) {
				var normalSize = $(title).css('font-size');
				title.attr("data-0", "padding-left: 80px; font-size: 40px; padding-top: 100px;");
				title.attr("data-205", "padding-left: 60px; font-size: " + normalSize  + "; padding-top: 22px;");
			}

		});

		skrollr.init({
			smoothScrolling: true,
			smoothScrollingDuration: 1,
			mobileCheck: function() {
				return false;
			}
		});

	});

}(jQuery);
