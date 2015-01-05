
$(document).ready(function() {

	var overlay = $('.sidebar-overlay');

	$('.sidebar-toggle').on('click', function(e) {
		e.preventDefault();
		var sidebar = $('#sidebar');
		sidebar.toggleClass('open');
		if((sidebar.hasClass('sidebar-fixed-left') || sidebar.hasClass('sidebar-fixed-right')) && sidebar.hasClass('open')) {
			overlay.addClass('active');
		} else {
			overlay.removeClass('active');
		}
	});

	overlay.on('click', function() {
		$(this).removeClass('active');
		$('#sidebar').removeClass('open');
	});


	$(".toggle-navigation").on("click", function(e) {

		e.preventDefault();

		if($(this).parent().has("ul")) e.preventDefault();

		if(!$(this).hasClass("active")) {

			$(this).next("ul").slideDown(350);
			$(this).addClass("active");

		} else if($(this).hasClass("active")) {

			$(this).removeClass("active");
			$(this).next("ul").slideUp(350);

		}

		return false;

	});

});

(function($) {

	var dropdown = $('.sidebar .dropdown');

//	Add slidedown animation to dropdown
	dropdown.on('show.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
	});
	
//	Add slideup animation to dropdown
	dropdown.on('hide.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
	});

})(jQuery);
