$(document).ready(function() {

$('.your-class').slick({

/*
  infinite: true,
  speed: 300,
  slidesToShow: 1,
*/
  dots: true,
  arrows: true,
//  appendArrows: $('.your-class-arrows'),
  prevArrow: $('.slick-prev'),
  nextArrow: $('.slick-next'),
  centerMode: false,
  variableWidth: false,
  infinite: false,
  initialSlide: 0,
  slidesToShow: 3,
  rows: 1,
  slidesToScroll: 2,
  responsive: [
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

