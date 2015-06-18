$(document).ready(function() {

$('.your-class').slick({

/*
  infinite: true,
  speed: 300,
  slidesToShow: 1,
*/
  dots: true,
  arrows: false,
//  appendArrows: $('.your-class-arrows'),
  centerMode: true,
  variableWidth: false,
  infinite: false,
  slidesToShow: 2
/*
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
*/

});

});

