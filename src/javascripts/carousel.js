
$(document).ready(function() {

	$('.your-class').slick({

		dots: true,
		arrows: true,
		prevArrow: $('.slick-prev'),
		nextArrow: $('.slick-next'),
		centerMode: false,
		variableWidth: false,
		infinite: false,
		initialSlide: 0,
		slidesToShow: 4,
		rows: 1,
		slidesToScroll: 2,

		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
		]

	});

});

