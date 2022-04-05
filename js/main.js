$('.steps__slider').slick({
  slidesToShow: 3,
  arrows: false,
  responsive: [
    {
      breakpoint: 8000,
      settings: "unslick"
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '10px',
        dots: true
      }
    }
  ]
});
$('.quarantee__slider').slick({
  slidesToShow: 3,
  arrows: false,
  responsive: [
    {
      breakpoint: 8000,
      settings: "unslick"
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '15px',
        dots: true
      }
    }
  ]
});
$('.surrendered__slider').slick({
  slidesToShow: 3,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        centerPadding: '20px',
        dots: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '15px',
        dots: true,
      }
    }
  ]
});
$('.review__slider').slick({
  slidesToShow: 3,
  arrows: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '15px',
        adaptiveHeight: true
      }
    }
  ]
});
$(document).ready(function(){
  $('.mask').inputmask("+7 (999) 99-99-999");
});



