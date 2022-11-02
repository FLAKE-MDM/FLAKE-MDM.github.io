// home
let previewImage = document.querySelector('.preview__image img');
if(previewImage){
  let previewImageSrc = previewImage.dataset.src;
  previewImage.src = previewImageSrc;

  previewImage.onload = function() {
    $('.preview').addClass('loaded')
  };
}

window.onscroll = function checkScroll() {
  const scrollTopPosition = document.documentElement.scrollTop;
  if(scrollTopPosition > 200){
    $('.header').addClass('header_fixed');
    $('body').addClass('body_padding');
  } else{
    $('.header').removeClass('header_fixed');
    $('body').removeClass('body_padding');
  }

};

wow = new WOW(
  {
    animateClass: 'animated',
    offset: 100,
  }
);
wow.init();

$("[href*='modal-nav']").click(function(){
  $(".modal-backdrop").addClass("modal-nav-backdrop")
})


new Swiper(".sertifficates-slider", {
  slidesPerView: 4,
  spaceBetween: 35,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 35,
    },
  },
});

if(window.innerWidth > 993){
  let containers = document.querySelectorAll('.container_margin');
  let containerDefauilt = document.querySelector('.container');
  let containerWidth = window.getComputedStyle(containerDefauilt).width;
  let containerWidthValue = Number(containerWidth.substring(0, containerWidth.length - 2));
  let val = (window.innerWidth - containerWidthValue - 17) / 2;

  for(let container of containers){
    container.style.marginLeft = val + "px"
  }
}

new Swiper(".popular-slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: false,
  navigation: {
    nextEl: ".popular-next",
    prevEl: ".popular-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
    draggable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    993: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});

new Swiper(".nav-slider", {
  slidesPerView: 5,
  spaceBetween: 30,
  freeMode: true,
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    993: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});

new Swiper(".project-slider", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".project-next",
    prevEl: ".project-prev",
  },
});


new Swiper(".project-images-thumbs, .project-images-thumbs2, .project-images-thumbs3, .project-images-thumbs4", {
  freeMode: true,
  watchSlidesProgress: true,
  nested: true,
  slidesPerView: 3,
  breakpoints: {
    "@0.00": {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});
new Swiper(".project-images-slider", {
  loop: true,
  slidesPerView: 1,
  thumbs: {
    swiper: {
      el: ".project-images-thumbs",
      slidesPerView: 3,
      spaceBetween: 10,
      breakpoints: {
        "@0.00": {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 3,        
        },
      },
    },
  },
  nested: true,
});
new Swiper(".project-images-slider2", {
  loop: true,
  slidesPerView: 1,
  thumbs: {
    swiper: {
      el: ".project-images-thumbs2",
      slidesPerView: 3,
      spaceBetween: 10,
      breakpoints: {
        "@0.00": {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 3,        
        },
      },
    },
  },
  nested: true,
});
new Swiper(".project-images-slider3", {
  loop: true,
  slidesPerView: 1,
  thumbs: {
    swiper: {
      el: ".project-images-thumbs3",
      slidesPerView: 3,
      spaceBetween: 10,
      breakpoints: {
        "@0.00": {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 3,        
        },
      },
    },
  },
  nested: true,
});
new Swiper(".project-images-slider4", {
  loop: true,
  slidesPerView: 1,
  thumbs: {
    swiper: {
      el: ".project-images-thumbs4",
      slidesPerView: 3,
      spaceBetween: 10,
      breakpoints: {
        "@0.00": {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 3,        
        },
      },
    },
  },
  nested: true,
});



new Swiper(".advantages-slider", {
  slidesPerView: 2,
  spaceBetween: 24,
  loop: false,
  navigation: {
    nextEl: ".advantages-next",
    prevEl: ".advantages-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
    draggable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
    },
    993: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
  }
});

new Swiper(".team-slider", {
  slidesPerView: 5,
  spaceBetween: 50,
  loop: false,
  navigation: {
    nextEl: ".team-next",
    prevEl: ".team-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
    draggable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    993: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1600: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

new Swiper(".office-slider", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 50,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let $page = $('html, body');
$('.up-link').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});


// contacts-form
let code = 1234
$(".contacts-form .btn").click(function(e) {
  e.preventDefault();
  let name = this.name.slice(4);

  if(name == "success"){
    $(this).parent().hide();
    $(this).parents('.contacts-form').find('.success-hide').show();
    $(this).parents('.contacts-form').find('.phone-block').removeClass("collapse");

    let inputs = $(this).parents('.contacts-form').find("input[type='number']");

    for(let input of inputs){
      input.value = ""
    }
    return
  }

  let input = findInput.apply(this, [name]);

  if(formValid(input)){
    if(this.name == "btn-phone" || this.name == "btn-phone2"){
      $(this).parents('.contacts-form').find(".phone-block").addClass("collapse");
      $(this).parents('.contacts-form').find(".code-block").removeClass("collapse");
    }
    if(this.name == "btn-code" || this.name == "btn-code2"){
      $(this).parents('.contacts-form').find(".code-block").addClass("collapse");
      this.closest(".contacts-form")
      $(this).parents('.contacts-form').find('.success-show').show();
    }
  }
  
})

function findInput(name){
  let parentForm = this.closest(".contacts-form");
  let input = parentForm.querySelector(`[name="${name}"]`);
  return input
}

function formValid(input){
  let outputError = document.querySelector(`#${input.name}Error`)
  let regex = new RegExp(input.dataset.pattern)

  if(input.value == ""){
    $(outputError).removeClass("collapse");
    outputError.textContent = "Заполните поле";
  } else if(!regex.test(input.value)){
    $(outputError).removeClass("collapse");
    outputError.textContent = "Неверный формат"
  } else if(input.name == "code" || input.name == "code2"){
      if(input.value != code){
        $(outputError).removeClass("collapse");
        outputError.textContent = "Не правильный пароль";
      } else{
        $(outputError).addClass("collapse");
        return true
      }
  }
  else{
    $(outputError).addClass("collapse");
    return true
  }
}




// window
// fake-select
$('.fake-select__item').click(function(){
  $(this).parents('.fake-select').find('.fake-select__item').removeClass('active');
  $(this).addClass('active');
  let val = $(this).find('.fake-select__item-value').html();
  $(this).parents('.fake-select').find('.fake-select__value').html(val)
});

(function() {
  // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
  if (!String.prototype.trim) {
    (function() {
      // Make sure we trim BOM and NBSP
      var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      String.prototype.trim = function() {
        return this.replace(rtrim, '');
      };
    })();
  }

  [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
    // in case the input is already filled..
    if( inputEl.value.trim() !== '' ) {
      classie.add( inputEl.parentNode, 'input--filled' );
    }

    // events:
    inputEl.addEventListener( 'focus', onInputFocus );
    inputEl.addEventListener( 'blur', onInputBlur );
  } );

  function onInputFocus( ev ) {
    classie.add( ev.target.parentNode, 'input--filled' );
  }

  function onInputBlur( ev ) {
    if( ev.target.value.trim() === '' ) {
      classie.remove( ev.target.parentNode, 'input--filled' );
    }
  }
})();

// repair-window
new Swiper(".work-slider", {
  slidesPerView: 4,
  spaceBetween: 80,
  loop: false,
  navigation: {
    nextEl: ".work-next",
    prevEl: ".work-prev",
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 80,
    },
  },
});

// repair-balcony
new Swiper(".gallery-slider", {
  slidesPerView: 5,
  spaceBetween: 14,
  loop: true,
  freeMode: true,
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
    },
  },
});

// faq
new Swiper(".nav-slider-faq", {
  slidesPerView: 5,
  spaceBetween: 30,
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
      freeMode: true,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
})

// about
new Swiper(".about-advantages-slider", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: false,
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  }
});

// review
if(window.innerWidth > 991){
  $(function(){
    var topPos = $('.floating').offset().top;
     $(window).scroll(function() {
     var top = $(document).scrollTop(),
         pip = $('.stoper').offset().top,
         height = $('.floating').outerHeight();
     if (top > topPos && top < pip - height) {$('.floating').addClass('fixed').removeAttr("style");}
     else if (top > pip - height) {$('.floating').removeClass('fixed').css({'position':'absolute','bottom':'0'});}
     else {$('.floating').removeClass('fixed');}
     });
   });
}

// input number 
jQuery(($) => {
  $(document).on('click', '.input-number__minus-step', function () {
      let total = $(this).next();
      if (total.val() > 1) {
          total.val(+total.val() - 100);
      }
  });
  $(document).on('click', '.input-number__plus-step', function () {
      let total = $(this).prev();
      total.val(+total.val() + 100);
  });
  document.querySelectorAll('.input-number__input-step').forEach(function (el) {
      el.addEventListener('input', function () {
          this.value = this.value.replace(/[^\d]/g, '');
      });
  });
});

jQuery(($) => {
  $(document).on('click', '.input-number__minus', function () {
      let total = $(this).next();
      if (total.val() > 1) {
          total.val(+total.val() - 1);
      }
  });
  $(document).on('click', '.input-number__plus', function () {
      let total = $(this).prev();
      total.val(+total.val() + 1);
  });
  document.querySelectorAll('.input-number__input').forEach(function (el) {
      el.addEventListener('input', function () {
          this.value = this.value.replace(/[^\d]/g, '');
      });
  });
});

$('.btn-del').click(function(e){
    e.preventDefault();
    $(this).parents('.basket-item').remove()
  })

// net
new Swiper(".other-slider", {
  slidesPerView: 4,
  spaceBetween: 24,
  loop: false,
  navigation: {
    nextEl: ".other-next",
    prevEl: ".other-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
    draggable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    993: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});

$('.mobile-table').cardtable();

let video = document.querySelector("#video-test-net");
let videoDuration = document.querySelector(".video-block__duration");
let playBtn = document.querySelector(".play-btn");

if(video){
  $(window).on("load", function() {
    let videoDurationVal = video.duration / 60;
    videoDuration.innerHTML = videoDurationVal.toFixed(2);
  });
  
  playBtn.addEventListener('click', function () {
    $(this).toggleClass('collapse');
    $(videoDuration).toggleClass('collapse');
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
  }, false);
  
  let $video = $("#video-test-net"),
  mousedown = false;
  
  $video.click(function(){
  if (this.paused) {
      this.play();
      return false;
  }
  return true;
  });
  
  $video.on('mousedown', function () {
  mousedown = true;
  });
  
  $(window).on('mouseup', function () {
  mousedown = false;
  });
  
  $video.on('play', function () {
    $video.attr('controls', '');
  });
  
  $video.on('pause', function () {
    $(playBtn).toggleClass('collapse');
    $(videoDuration).toggleClass('collapse');
  if (!mousedown) {
      $video.removeAttr('controls');
  }
  });
  
}


























