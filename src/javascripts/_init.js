
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


/*

	$('.film .find-out-more a').on("click", function(e) {


		a = $(this);
		a.css('min-height', a.outerHeight());

		if(a.hasClass('active')) {
			a.removeClass('active');
			a.find('.less').fadeOut(50, function() {
				a.closest('.film').find('.more-content').velocity({ height: 30, opacity: 0 }).hide();
				a.find('.more').delay(100).fadeIn(50);
			});
		} else {
			a.addClass('active');
			a.find('.more').fadeOut(50, function() {
				a.closest('.film').find('.more-content').show().velocity({ height: 205, opacity: 1 });
				a.find('.less').delay(100).fadeIn(50);
			});
		}

		return false
	});
*/
