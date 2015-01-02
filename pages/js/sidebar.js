
$(document).ready(function() {

	var overlay = $('.sidebar-overlay');

	$('.sidebar-toggle').on('click', function() {
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


$(document).ready(function() {

	var sidebar = $('#sidebar');
	var sidebarHeader = $('#sidebar .sidebar-header');
	var sidebarImg = sidebarHeader.css('background-image');
	var toggleButtons = $('.sidebar-toggle');

	$('#sidebar-position').change(function() {

		var value = $( this ).val();

		sidebar.removeClass('sidebar-fixed-left sidebar-fixed-right sidebar-stacked').addClass(value).addClass('open');

		if(value == 'sidebar-fixed-left' || value == 'sidebar-fixed-right') {
			$('.sidebar-overlay').addClass('active');
		}

	//	Show / Hide toggle buttons
		if(value != '') {
			toggleButtons.css('display', 'initial');
		} else {
			toggleButtons.css('display', 'none');
		}

	});

//	Sidebar theme
	$('#sidebar-theme').change(function() {
		var value = $( this ).val();
		sidebar.removeClass('sidebar-default sidebar-inverse').addClass(value);
	});

});

