
$(document).ready(function() {

	bodyHasStatusBar = function() {
		return $('body').hasClass('has-status-bar');
	}

//	build the Skrollr properties
	$.each($('.app-bar.app-bar-large'), function() {

		var statusBarLargeHeight = bodyHasStatusBar() ? 280 : 255;
		var statusBarSmallHeight = bodyHasStatusBar() ? 90 : 65;

		$(this).attr("data-0", "height: " + statusBarLargeHeight + "px; box-shadow: 0px 0px 10px rgb(255, 255, 255);");
		$(this).attr("data-205", "height: " + statusBarSmallHeight + "px; box-shadow: -0px -5px 15px rgb(0, 0, 0);");

	});


	skrollr.init({
		smoothScrolling: true,
		smoothScrollingDuration: 1,
		mobileCheck: function() {
			return false;
		}
	});

	$(function () {
		$('[data-toggle="popover"]').popover()
	});


});
