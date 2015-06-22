
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

	$('ul[role="tablist"] a').click(function(e) {
		e.preventDefault()
		$(this).tab('show')
	});

	$('[data-toggle-target]').on('click', function(e) {

		e.preventDefault();

		var card = $(this).closest('.card');

		var target = $($(this).attr('data-toggle-target'));

/*
		if($(this).hasClass('active')) {
			card.find('.content > .active').velocity({ height: target.outerHeight(), opacity: 0 }).fadeOut();
		} else {
			card.find('.content > .active').show().velocity({ height: target.outerHeight(), opacity: 0 });
			target.delay(200).hide().removeClass('hide').fadeIn();
		}
*/

		return false;

	});




});
