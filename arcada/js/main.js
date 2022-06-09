$('.object-preview-slider').slick({
  dots: false,
  infinite: true,
  arrows:false,
  fade: true,
  cssEase: 'linear',
  pauseOnHover: false,
  autoplay: true,
  autoplaySpeed: 5700,
  focusOnSelect: false,
});

// fixed-header
$(function() {
  let header = $('.header');
  let hederHeight = header.height() * 2;
   
  $(window).scroll(function() {
    if($(this).scrollTop() > 1) {
     header.addClass('header_fixed');
     $('body').css({
        'paddingTop': hederHeight +'px'
     });
    } else {
     header.removeClass('header_fixed');
     $('body').css({
      'paddingTop': 0
     })
    }
  });
 });

//  menu
let mediaQuery = window.matchMedia('(min-width: 768px)');
if (mediaQuery.matches) {
  window.onload = function(){
    $('.btn-menu, .collapse-nav__close').click(function(){
      $('body').toggleClass('overflow-none')
    })
  }
}


// quiz
$('.btn-quiz').click(function(e){
  e.preventDefault();
  $(this).parents('.quiz-block__card').removeClass('show')

})



var mySlider = $('.objects-slider');
mySlider.slick({
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

mySlider.mousewheel(function(e) {
  e.preventDefault();

  if (e.deltaY < 0) {
    $(this).slick('slickNext');
  } else {
    $(this).slick('slickPrev');
  }
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
      breakpoint: 768,
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

// wow
wow = new WOW(
  {
    animateClass: 'animated',
    offset:       100,
  }
);
wow.init();

// catalogue tab
$('#catalogue-nav-all').click(function(e){
  e.preventDefault();
  $('#catalogueTabContent').find('.tab-pane').addClass('show active')
  let catalogueSelected = document.querySelector('#catalogue-selected');
  catalogueSelected.innerHTML = this.innerHTML;
})

$('.catalogue-btn').click(function(e){
  e.preventDefault();
  $('.tab-pane').removeClass('show active')
  let catalogueSelected = document.querySelector('#catalogue-selected');
  catalogueSelected.innerHTML = this.innerHTML;
})

$('.gallery-slider').slick({
  dots: false,
  infinite: false,
  arrows: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  slidesToShow: 1,
  centerMode: true,
  centerPadding: '348px',
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        centerPadding: '270px',
      }
    },
    {
      breakpoint: 1400,
      settings: {
        centerPadding: '150px',
      }
    },
    {
      breakpoint: 1200,
      settings: {
        centerPadding: '140px',
      }
    },
    {
      breakpoint: 992,
      settings: {
        centerPadding: '0',
        dots: true,
      }
    },
  ]
});

$('.team-slider').slick({
  dots: false,
  infinite: true,
  arrows: false,
  slidesToShow: 3,
  centerMode: true,
  centerPadding: '241px',
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
        slidesToShow: 2,
        centerPadding: '50px',
      }
    },
    {
      breakpoint: 768,
      settings: {
        centerPadding: '0',
        slidesToShow: 1,
        centerMode: false,
        dots: true
      }
    },
  ]
});

$('.description-slider').slick({
  dots: false,
  infinite: true,
  arrows: true,
  prevArrow: $('.prev-descriprion'),
  nextArrow: $('.next-descriprion'),
  slidesToShow: 2,
  centerMode: true,
  centerPadding: '372px',
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        centerPadding: '270px',
      }
    },
    {
      breakpoint: 1400,
      settings: {
        centerPadding: '150px',
      }
    },
    {
      breakpoint: 1200,
      settings: {
        centerPadding: '140px',
      }
    },
    {
      breakpoint: 992,
      settings: {
        centerPadding: '0',
        centerMode: false,
        dots: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        dots: true,
      }
    },
  ]
});

$('.types-slider').slick({
  dots: false,
  infinite: true,
  arrows: true,
  prevArrow: $('.prev-types'),
  nextArrow: $('.next-types'),
  slidesToShow: 2,
  centerMode: true,
  centerPadding: '372px',
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        centerPadding: '270px',
      }
    },
    {
      breakpoint: 1400,
      settings: {
        centerPadding: '150px',
      }
    },
    {
      breakpoint: 1200,
      settings: {
        centerPadding: '140px',
      }
    },
    {
      breakpoint: 992,
      settings: {
        dots: true,
        centerMode: false,
      }
    },
    {
      breakpoint: 992,
      settings: {
        dots: true,
        centerMode: false,
        slidesToShow: 1,
      }
    },
  ]
});

$('.progress-slider').slick({
  dots: false,
  infinite: false,
  arrows: true,
  prevArrow: $('.prev-progress'),
  nextArrow: $('.next-progress'),
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        dots: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        dots: true,
      }
    },
  ]
});

$('.other-slider').slick({
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
        dots: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        dots: true,
      }
    },
  ]
});
$('.partners-slider').slick({
  dots: false,
  infinite: true,
  arrows: false,
  slidesToShow: 6,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
        dots: true,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
  ]
});

// range
$( function() {
  $( "#price-range-hypothec" ).slider({
    min: 4000000,
    max: 100000000,
    value: 14000000,
    step: 100000,
    range: "min",
    slide: function( event, ui ) {
      $( "#price-value-hypothec" ).val( ui.value );
    }
  });
  $( "#price-value-hypothec" ).val( $( "#price-range-hypothec" ).slider( "value" ) );
} );
$( function() {
  $( "#contribution-range-hypothec" ).slider({
    min: 4000000,
    max: 75000000,
    value: 5000000,
    step: 100000,
    range: "min",
    slide: function( event, ui ) {
      $( "#contribution-value-hypothec" ).val( ui.value );
    }
  });
  $( "#contribution-value-hypothec" ).val( $( "#contribution-range-hypothec" ).slider( "value" ) );
} );

$( function() {
  $( "#term-range-hypothec" ).slider({
    min: 1,
    max: 30,
    value: 5,
    step: 1,
    range: "min",
    slide: function( event, ui ) {
      $( "#tern-value-hypothec" ).val( ui.value );
    }
  });
  $( "#tern-value-hypothec" ).val( $( "#term-range-hypothec" ).slider( "value" ) );
} );
$( function() {
  $( "#price-range-installment" ).slider({
    min: 4000000,
    max: 100000000,
    value: 4200000,
    step: 100000,
    range: "min",
    slide: function( event, ui ) {
      $( "#price-value-installment" ).val( ui.value );
    }
  });
  $( "#price-value-installment" ).val( $( "#price-range-installment" ).slider( "value" ) );
} );
$( function() {
  $( "#contribution-range-installment" ).slider({
    min: 4000000,
    max: 75000000,
    value: 4200000,
    step: 100000,
    range: "min",
    slide: function( event, ui ) {
      $( "#contribution-value-installment").val( ui.value );
    }
  });
  $( "#contribution-value-installment" ).val( $( "#contribution-range-installment" ).slider( "value" ) );
} );

$( function() {
  $( "#term-range-installment" ).slider({
    min: 1,
    max: 30,
    value: 3,
    step: 1,
    range: "min",
    slide: function( event, ui ) {
      $( "#tern-value-installment" ).val( ui.value );
    }
  });
  $( "#tern-value-installment" ).val( $( "#term-range-installment" ).slider( "value" ) );
} );

// // input type number 
jQuery(($) => {
  $(document).on('click', '.input-number__minus', function () {
      let total = $(this).next();
      if (total.val() > 1) {
          total.val(+total.val() - 1);
      }
  });
  $(document).on('click', '.input-number__plus', function () {
      let total = $(this).prev();
      if(total.val() < 20){
        total.val(+total.val() + 1);
      }
  });
  document.querySelectorAll('.input-number__input').forEach(function (el) {
      el.addEventListener('input', function () {
          this.value = this.value.replace(/[^\d]/g, '');
      });
  });
});


// map
function initMap() {
	var contactsMap1 = new ymaps.Map('map', {
		center: [44.67524497177621, 34.4134283065796],
		zoom: 16,
		controls: [],
	}),

	myPlacemark = new ymaps.Placemark(contactsMap1.getCenter(), {
		hintContent: 'Аркада',
		balloonContent: 'Аркада',
	}, {
		iconLayout: 'default#image',
		iconImageHref: '../img/map.svg',
		iconImageSize: [64, 64],
	});

	contactsMap1.geoObjects.add(myPlacemark)
	contactsMap1.controls.add('zoomControl');
	contactsMap1.behaviors.disable('scrollZoom');
}

setTimeout(function(){
	var elem = document.createElement('script');
	elem.type = 'text/javascript';
	elem.src = 'https://api-maps.yandex.ru/2.1/?apikey=3e26cc7f-cb09-4e2a-a793-17fd25834825&lang=ru_RU&onload=initMap';
	document.getElementsByTagName('body')[0].appendChild(elem);
}, 1000);




// calculate
$('#btn-hypothec').click(function calculate(){
  let summ = $('#price-value-hypothec').val() - $('#contribution-value-hypothec').val();
  let month = $('#tern-value-hypothec').val() * 12;
  let precent = $('#precent-hypothec').val() / 12;
  let payment = Math.round(summ * precent / (1 - (1 + precent) * (1 - month)))
  $('#price-hypothec').text(summ);
  $('#payment-hypothec').text(payment);
})



