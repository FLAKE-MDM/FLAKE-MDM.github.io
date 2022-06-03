$('.nav-tab').slick({
  dots: false,
  infinite: false,
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

$('.faq-item__link').click(function(){
  $(this).parent().toggleClass('open')
})