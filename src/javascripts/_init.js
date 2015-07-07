
$(document).ready(function() {

	var bodyPaddingTop = 60;
	var $appBar = $('nav.app-bar');
	if($appBar) {
		bodyPaddingTop += $appBar.height();
		if($appBar.hasClass('has-tool-bar')) {
			bodyPaddingTop += 60;
		}
	}

	$('body').css({'padding-top': bodyPaddingTop});

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



	$('.switch').each(function() {

		var inputId = $(this).find('input').attr('id');

		$(this).append($('<label for="' + inputId + '"><span class="rail"></span><span class="button"></span><span class="focus"></span></label>'));

	});

	$('.radio, .radio-inline').each(function() {

		$(this).append($('<span class="outer"><span class="inner"></span></span>'));

	});

});
