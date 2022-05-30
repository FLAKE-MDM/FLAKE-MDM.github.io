let mediaQuery = window.matchMedia('(min-width: 768px)');

if (mediaQuery.matches) {
  window.onload = function(){
    $('.btn-menu, .close').click(function(){
      $('body').toggleClass('overflow-none')
    })
  }
}


// quiz
$('.btn-quiz').click(function(e){
  e.preventDefault();
  $(this).parents('.quiz-block__card').removeClass('show')

})


$('.objects-slider').slick({
  dots: false,
  infinite: true,
  arrows: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '125px',
  responsive: [
    {
      breakpoint: 992,
      settings: "unslick",
    },
  ]
});

$('.advantages-slider').slick({
  infinite: false,
  arrows: true,
  fade: true,
  cssEase: 'linear',
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  pauseOnHover: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 5700,
  focusOnSelect: false,
  dots: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        dots:true
      }
    },
  ]
  /*
  dots: true,
  appendDots: $('.dots-counter'),
  dotsClass: 'slider-dots',*/
});
/*
$('.advantages-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
$('.dots-counter button').html('');
}).trigger('beforeChange');
$('.advantages-slider').on('afterChange', function(event, slick, currentSlide){
$('.dots-counter button').html('');
 $('.dots-counter .slick-active button')
   .html(`<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
   <circle class="circle-go" cx="25" cy="25" r="24.5"/>
   </svg>
   <span class="current-slide">${(currentSlide || 0) + 1}</span><span class="slide-count">${slick.slideCount}</span>`);
}).trigger('afterChange');
*/

$('.investments__slider').slick({
  dots: false,
  infinite: true,
  arrows: false,
  slidesToShow: 1,
  centerMode: true,
  centerPadding: '280px',
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        centerPadding: '100px',
      }
    },
    {
      breakpoint: 992,
      settings: {
        centerPadding: '50px',
      }
    },
    {
      breakpoint: 738,
      settings: {
        centerPadding: '0',
        centerMode: false,
        dots: true
      }
    },
  ]
});

$('.news-slider').slick({
  dots: false,
  infinite: false,
  arrows:false,
  responsive: [
    {
      breakpoint: 8000,
      settings: "unslick",
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        dots: true,
      }
    },
  ]
});














$('.nav-tab').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 8,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 6,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 768,
      settings: {
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        centerPadding: '30px',
      }
    }
  ]
});
$('.steps-list').slick({
  dots: false,
  infinite: false,
  arrows:false,
  responsive: [
    {
      breakpoint: 8000,
      settings: "unslick",
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
  ]
});

// tab
$('.nav-tab__link').click(function(e){
  e.preventDefault();
  $('.nav-tab__link').removeClass("active");
  $(this).addClass("active");
  $('.tab-pane').removeClass("show active");
  $(this.dataset.href).addClass("show active");
})


$('.btn-collapse').click(function(){
  $(this).toggleClass("active");
  if($(this).find(".btn-collapse__text").html() == "ПОКАЗАТЬ ЕЩЕ"){
    $(this).find(".btn-collapse__text").html("СКРЫТЬ ВИДЕО");
  } else{
    $(this).find(".btn-collapse__text").html("ПОКАЗАТЬ ЕЩЕ");
  }
})

