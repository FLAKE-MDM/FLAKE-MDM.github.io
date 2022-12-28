if(window.innerWidth > 767){
  $(".preview").prepend('<div class="preview__video"><video id="video" playsinline="" autoplay="" loop="" muted="" poster="img/bg-preview.jpg"><source src="video/video.webm" type="video/webm"><source src="video/video.mp4" type="video/mp4"></video></div>')
}


$('.fake-select__item').click(function(){
  $(this).parents(".fake-select").find('.fake-select__item').removeClass('fake-select__item_active active');
  $(this).addClass('fake-select__item_active');
  $(this).parents('.fake-select').find('.fake-select__value').html(this.innerHTML)
  $(this).parents('.fake-select').find('.fake-select__link').addClass('active');
});

new Swiper(".about-slider", {
  slidesPerView: 1,
  loop: true, 
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

new Swiper(".review-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

$(document).ready(function(){$('a.slow').bind("click",function(e){var anchor=$(this);$('html, body').stop().animate({scrollTop:$(anchor.attr('href')).offset().top},1000);e.preventDefault();});});

