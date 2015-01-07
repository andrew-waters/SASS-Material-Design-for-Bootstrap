
$(document).ready(function() {

	var navigationDrawer = $('.navigation-drawer');

	$('.navigation-drawer-invert').change(function() {

		var invert = $(this).prop('checked')
		value = invert ? 'inverse' : 'default'

		navigationDrawer
			.removeClass('navigation-drawer-default navigation-drawer-inverse')
			.addClass('navigation-drawer-' + value);

	});

});
