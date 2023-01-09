new Swiper(".review-slider", {
  slidesPerView: 1,
  spaceBetween: 12,
  breakpoints: {
    768: {   
        slidesPerView: 2,  
        spaceBetween: 28,
    },
    992: {   
        slidesPerView: 3, 
        spaceBetween: 28,   
    },
    1400: {   
        slidesPerView: 4, 
        spaceBetween: 28,   
    },
  },
});

if(window.innerWidth < 992){
  new Swiper(".team-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      376: {   
        spaceBetween: 48,
      },
      768: {   
          slidesPerView: 2,  
      },
    },
  });
}

