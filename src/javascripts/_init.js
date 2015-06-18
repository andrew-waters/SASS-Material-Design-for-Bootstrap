
$(document).ready(function() {

	autosize($('textarea.autosize'));

	$("form.validate").each(function() {
		$(this).validate();
	});

	$('.card').each(function() {

		var first = $(this).children().first();

	//	this adds a top border radius to media element images that are at the top of the card
		if(first.hasClass('tile')) first.addClass('top');

	});

});
