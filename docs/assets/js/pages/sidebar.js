
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

