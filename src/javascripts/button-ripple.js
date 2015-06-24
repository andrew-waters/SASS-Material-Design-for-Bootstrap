
$(document).ready(function() {

	$.Velocity.RegisterUI("callout.touched", {
		defaultDuration: 500,
		calls: [
			[{
				opacity: 0.3
			},
			0.1],
			[{
				opacity: 0,
				left: '50%',
				top: '50%',
				scaleX: 4,
				scaleY: 4
			},
			0.8],
			[{
				scaleX: 1,
				scaleY: 1
			},
			0.1]
		]
	});
	$.Velocity.RegisterUI("callout.fadepulse", {
		defaultDuration: 700,
		calls: [
			[{
				backgroundColorAlpha: 0.3
			},
			0.5],
			[{
				backgroundColorAlpha: 0,
			},
			0.5]
		]
	});


	$('a.btn, button.btn, .nav-ripple a').click(function(e) {

		var posX = $(this).offset().left,
			posY = $(this).offset().top;

		if($(this).find('.inner').length == 0)
			$(this).append('<div class="inner"></div>');

		if($(this).find('.overlay').length == 0)
			$(this).append('<div class="overlay"></div>');

		$('> .inner', this).css({
			top: (e.pageY - posY),
			left: (e.pageX - posX)
		});

		$('> .inner', this).velocity("callout.touched");
		$('> .overlay', this).velocity("callout.fadepulse");

	});

});
