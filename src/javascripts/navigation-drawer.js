
$(document).ready(function() {

	var overlay = $('.navigation-drawer-overlay');

	$('.navigation-drawer-toggle').on('click', function(e) {
		e.preventDefault();
		$('body').addClass('noscroll');
		var navigationDrawer = $('#navigation-drawer');
		navigationDrawer.toggleClass('open');
		if((navigationDrawer.hasClass('navigation-drawer-fixed-left') || navigationDrawer.hasClass('navigation-drawer-fixed-right')) && navigationDrawer.hasClass('open')) {
			overlay.addClass('active');
		} else {
			overlay.removeClass('active');
		}
	});

	overlay.on('click', function() {
		$(this).removeClass('active');
		$('body').removeClass('noscroll');
		$('#navigation-drawer').removeClass('open');
	});

	$(".toggle-navigation").on("click", function(e) {

		e.preventDefault();

		if($(this).parent().has("ul")) e.preventDefault();

		if($(this).hasClass("active")) {

			$(this).removeClass("active");

/*
			$('.navigation-drawer-nav > ul > li').each(function() {
				$(this).removeClass("clicked");
			});
*/

			$(this).next("ul").slideUp(350);

		} else {

			$('.navigation-drawer-nav > ul > li').each(function() {
				$(this).removeClass("clicked");
			});

			$(this).next("ul").slideDown(350);
			$(this).addClass("active").parent().addClass("clicked");

		}

		return false;

	});

	$navigationDrawer = $('.navigation-drawer');

	$contentContainer = $('.content-container');

	$originalNavigationDrawerPlacement = $navigationDrawer.hasClass('navigation-drawer-fixed-left') ? 'left' : false;
	if(!$originalNavigationDrawerPlacement)
		$originalNavigationDrawerPlacement = $navigationDrawer.hasClass('navigation-drawer-fixed-right') ? 'right' : false;

	showFixedNavigationDrawer = function() {

		$navigationDrawer.addClass('open');
		$('body').addClass('navigation-drawer-showing');
		$navigationDrawer.removeClass('navigation-drawer-fixed' + $originalNavigationDrawerPlacement);

	}

	hideFixedNavigationDrawer = function() {

		$navigationDrawer.addClass('navigation-drawer-fixed' + $originalNavigationDrawerPlacement);
		$('body').removeClass('navigation-drawer-showing');
		$navigationDrawer.removeClass('open');

	}

	if($navigationDrawer.html() !== undefined && $(window).width() > 1300) {
		showFixedNavigationDrawer();
	}

	$(window).resize(function() {

		if($navigationDrawer.html() !== undefined) {

		//	when the window is > 1300px wide, fix the nav in place
			if($(window).width() > 1300) {
				showFixedNavigationDrawer();
			} else {
				hideFixedNavigationDrawer();
			}

		}

	});

	setTimeout(function() {
		$('body').removeClass('no-transition');
	}, 500);	

});

(function($) {

	var dropdown = $('.navigation-drawer .dropdown');

//	Add slidedown animation to dropdown
	dropdown.on('show.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
	});
	
//	Add slideup animation to dropdown
	dropdown.on('hide.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
	});

})(jQuery);