let $page = $('html, body');
$('.up-link').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});


if(window.innerWidth < 768){
    window.onscroll = function checkScroll() {
        if (document.documentElement.scrollTop < 1){
            $('.header, body').removeClass('header_fixed');
        } else {
            $('.header, body').addClass('header_fixed');
        }
    };
}
if(window.innerWidth > 767){
  $(".preview").prepend('<div class="preview__video"><video id="video" playsinline="" autoplay="" loop="" muted="" poster="img/bg-preview.jpg"><source src="video/video.webm" type="video/webm"><source src="video/video.mp4" type="video/mp4"></video></div>')
}

new Swiper("#example-slider", {
  slidesPerView: 3,
  spaceBetween: 16,
  loop: true,
  navigation: {
    nextEl: ".example-next",
    prevEl: ".example-prev",
  },
  breakpoints: {
        992: {
          slidesPerView: 5,
        },
      },
});
new Swiper("#example-slider-2", {
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
  navigation: {
    nextEl: ".example-next-2",
    prevEl: ".example-prev-2",
  },
  breakpoints: {
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 5,
        },
      },
});

new Swiper(".production-slider", {
    slidesPerView: 1,
    loop: true, 
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});

$(".map-toggler").click(function(e){
  e.preventDefault();
  $("#map-collapse").toggleClass("active");
  this.textContent == "развернуть карту" ? this.textContent = "свернуть карту" : this.textContent = "развернуть карту"
})

$(".article-link").click(function(e){
  this.textContent == "Развернуть статью" ? this.textContent = "Свернуть статью" : this.textContent = "Развернуть статью"
})



// $(document).ready(function() {
//   let dublicateList = document.querySelectorAll(".swiper-slide-duplicate [data-fancybox]");
//   for(item of dublicateList){
//     let value = item.dataset["fancybox"]
//     item.dataset["fancybox"] = value + "1";
//   }
// })

