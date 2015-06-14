
$(document).ready(function() {

	$('.empty-state').each(function() {
		el = $(this);
		if(el.attr("data-empty-bg")) {
			el.addClass("with-bg");
			el.css('background-image', 'url(' + el.attr("data-empty-bg") + ')');
		}
	});

});
