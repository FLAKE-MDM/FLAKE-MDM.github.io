
$(document).ready(function() {
  new Swiper('.preview-slider', {
    speed: 400,
    spaceBetween: 100,
    loop:true,
    autoplay: true,
    disableOnInteraction: true,
  });
  var mySwiper = document.querySelector('.preview-slider').swiper

  $(".preview-btn").mouseenter(function() {
    mySwiper.autoplay.stop();
    $(this).parents(".preview-item").addClass("hovered")
  });

  $(".preview-btn").mouseleave(function() {
    mySwiper.autoplay.start();
    $(this).parents(".preview-item").removeClass("hovered")
  });
});


new Swiper(".catalogue-slider", {
  direction: "vertical",
  slidesPerView: "auto",
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  mousewheel: true,
});


new Swiper(".categories-slider", {
  slidesPerView: 1,
  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      spaceBetween: 38,
      slidesPerView: 2,
    },
    1400: {
      spaceBetween: 64,
      slidesPerView: 2,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$('.btn-menu').click(function(e){
  $('body').toggleClass('overflow-none');
  $('.navbar').toggleClass('show');
})

