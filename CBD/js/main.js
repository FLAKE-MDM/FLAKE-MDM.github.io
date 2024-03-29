$(document).ready(function() {
  $(".preloader").addClass('collapse')
});

$('.preview-slider').slick({
  dots: true,
  infinite: true,
  arrows: false,
  pauseOnHover: false,
  autoplay: true,
  autoplaySpeed: 5000,
  focusOnSelect: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        adaptiveHeight: true
      }
    },
  ]
});


// header
let oldScrollTopPosition = 0;
window.onscroll = function checkScroll() {
  const scrollTopPosition = document.documentElement.scrollTop;
  if(oldScrollTopPosition > scrollTopPosition){
    $('.header__bottom').show(300);
  } else{
    $('.header__bottom, .info-block').hide(300);
    $('.header').addClass('header_fixed');
  }
  if (scrollTopPosition == 0){
    $('.header').removeClass('header_fixed');
    $('.info-block').show(300);
  }
  oldScrollTopPosition = scrollTopPosition;
};

$('.press-slider').slick({
  dots: false,
  infinite: false,
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
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

$('.catalogue-slider').slick({
  dots: false,
  infinite: false,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      }
    },
  ]
});

$('.blog-section-slider').slick({
  dots: false,
  infinite: true,
  arrows: false,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 4000,
      settings: "unslick",
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
});

$('.toggler').click(function(e){
  e.preventDefault();
  $(this).toggleClass('active')
})


// pane
$('.pane-open').click(function(e){
  e.preventDefault();
  $('body').addClass('overflow-none overflow-none-search');
  $('.pane').removeClass('show');
  $($(this).attr('href')).addClass('show');
  $('.search, .search-close').removeClass('show show-search');
  $('.header, .info-block').removeClass('header_search');
  if($(this).attr('href') == '#nav'){
    $('.nav-pane-close__link').addClass('show')
    $('.header, .product-pane').removeClass('first-plane')
    $('.pane-close__link').removeClass('show show-search');
    $('.pane-open-close').removeClass('active');
  } else{
    $('.pane-close__link').addClass('show');
  }
})
$('.pane-close').click(function(e){
  e.preventDefault();
  $('body').removeClass('overflow-none overflow-none-search');
  $('.pane-close__link, .nav-pane-close__link').removeClass('show show-search');
  $('.pane').removeClass('show');
  $('#search').removeClass('show');
  $('.header').removeClass('header_search');
  $('.btn-menu').removeClass('active');
})
$('.pane-open-close').click(function(e){
  e.preventDefault();
  $('.btn-menu').removeClass('active');
  $('body').toggleClass('overflow-none overflow-none-search');
  $('.pane-close').toggleClass('show');
  $('.pane-close').removeClass('show-search');
  $(this).toggleClass('active')
  $('.header, .product-pane, .info-block').toggleClass('first-plane');
  $('#search').removeClass('show');
  $('.header, .info-block').removeClass('header_search');
  $($(this).attr('href')).toggleClass('show');
  $('#nav').removeClass('show');
  $('.nav-pane-close__link').removeClass('show');
})


// search
$('.search-btn, .search-close').click(function(e){
  e.preventDefault();
  $('body').toggleClass('overflow-none-search');
  $('.header, .info-block').toggleClass('header_search');
  $('.pane-close__link').toggleClass('show-search');
})
$('.search-list__link').click(function(e){
  e.preventDefault();
  $('#search-input').val(this.innerHTML);
})


// location
$('.location-pane__clear').click(function(e){
  e.preventDefault();
  $('.location-pane__input').val('');
})
$('.location-list__link').click(function(e){
  e.preventDefault();
  $('.location-pane__input').val(this.innerHTML);
  $('.location-link__name').html(this.innerHTML);
})

// range
$( function() {
  $( "#mass-range" ).slider({
    min: 40,
    max: 150,
    value: 67,
    step: 1,
    range: "min",
    slide: function( event, ui ) {
      $( "#mass-range-value" ).val( ui.value + " кг" );
    }
  });
  $( "#mass-range-value" ).val(( $( "#mass-range" ).slider( "value" )  + " кг") );
} );

$('.review-slider').slick({
  dots: true,
  infinite: true,
  arrows: true,
  slidesToShow: 2,
  prevArrow: $('.review-slider__prev'),
  nextArrow: $('.review-slider__next'),
  dots: true,
  appendDots:  $('.review-slider__dots'),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});


// dropdown-select
$('.dropdown-select__link').click(function(e){
  e.preventDefault();
  $('.dropdown-select__link').removeClass('active');
  $(this).addClass('active');
  $(this).parents().find('.catalogue-selected').html(this.innerHTML);
})


// filter
$( function() {
  $( "#price-range" ).slider({
    range: true,
    min: 0,
    max: 90000,
    values: [ 0, 45000 ],
    slide: function( event, ui ) {
      $( "#price-min" ).val( "₽ " + ui.values[ 0 ] );
      $( "#price-max" ).val( "₽ " + ui.values[ 1 ] );
    }
  });
  $( "#price-min" ).val( "₽ " + $( "#price-range" ).slider( "values", 0 ));
    $( "#price-max" ).val("₽ " + $( "#price-range" ).slider( "values", 1 ) );
});
$('.tag-del').click(function(){
  $(this).parent().remove()
})

// fake-select
$('.fake-select__item').click(function(){
  $(this).parents(".fake-select").find('.fake-select__item').removeClass('fake-select__item_active active');
  $(this).addClass('fake-select__item_active');
  $(this).parents('.fake-select').find('.fake-select__value').html(this.innerHTML)
  $(this).parents('.fake-select').find('.fake-select__link').addClass('active');
})




// basket
$('.remove-link').click(function(e){
  e.preventDefault();
  $(this).parents('.remove-item').remove();
})
$('.basket-item__favorite').click(function(e){
  e.preventDefault();
  console.log();
  if( $(this).html() == '<span class="icon icon-favotire-primary"></span>В избранное'){
    $(this).html('<span class="icon icon-favotire-primary icon-favotire-primary-fill"></span>В избранном')
  } else{
    $(this).html('<span class="icon icon-favotire-primary"></span>В избранное')
  }
})

$('.radio-list__item').click(function(){
  $(this).parent().find('.radio-list__item').removeClass('active');
  $(this).addClass('active');
})

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

let $page = $('html, body');

$(document).ready(function() {
  $('.form-valid').submit(function(e) {
    let inputs = document.querySelectorAll('.form-valid .required');
    for(input of inputs){
      if(!$(input).val()){
        $(input).addClass('has-error');
        e.preventDefault();
      } else{
        $(input).removeClass('has-error' );
      }
    }
    
    let firstError = document.querySelector('.has-error');
    if(firstError){
      $page.animate({
        scrollTop: $(firstError).offset().top - 80
      }, 400);
      $('.error-message').removeClass('collapse')
    } else{
      $('.error-message').addClass('collapse')
    }
  });
});

(function() {
  // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
  if (!String.prototype.trim) {
    (function() {
      var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      String.prototype.trim = function() {
        return this.replace(rtrim, '');
      };
    })();
  }

  [].slice.call( document.querySelectorAll( '.required' ) ).forEach( function( inputEl ) {
    inputEl.addEventListener( 'blur', onInputBlur );
    inputEl.oninput = onInputOn;
  } );
  
  function onInputOn(ev) {
    if(ev.target.value.trim() !== '' ) {
      $(this).removeClass('has-error');
    }
  };

  function onInputBlur( ev ) {
    if( ev.target.value.trim() !== '' ) {
      $(this).removeClass('has-error');
    }
  }
})();


// // input number 
jQuery(($) => {
  $(document).on('click', '.input-number__minus', function () {
      let total = $(this).next();
      if (total.val() > 1) {
          total.val(+total.val() - 1);
      } else{
        $(this).parents().find('.btn-add').removeClass('collapse');
        $(this).parents('.fake-btn').addClass('collapse');
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

// product
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        dots:true 
      }
    },
  ]
});
$('.slider-nav').slick({
  slidesToShow: 4,
  vertical: true,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 992,
      settings: "unslick",
    },
  ]
});

$('.btn-add').click(function(e){
  e.preventDefault();
  $(this).addClass('collapse');
  $(this).parent().find('.product__input-number').removeClass('collapse');
})


$('.collapse-link').click(function(){
  if($(this).find('.collapse-link__text').html() == 'Раскрыть'){
    $(this).find('.collapse-link__text').html('Свернуть')
  } else{
    $(this).find('.collapse-link__text').html('Раскрыть')
  }
})

$('.brands-slider').slick({
  dots: false,
  infinite: false,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      }
    },
  ]
});


$('.modal-review-slider').slick({
  infinite: true,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  cssEase: 'linear',
  prevArrow: $('.modal-review-slider__prev'),
  nextArrow: $('.modal-review-slider__next'),
  dots: true,
  appendDots:  $('.slider__counter'),
  dotsClass: 'custom_paging',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        adaptiveHeight: true,
      }
    },
  ],
  customPaging: function (slider, i) {
    return (i + 1) + ' из ' + slider.slideCount;
}
});
// слайдер в модалке
$('#modal-review').on('shown.bs.modal', function () {
  $('.modal-review-slider').slick('refresh');
});

// slow
$(document).ready(function(){
    $('.slow-link').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
  });
});

// tag-nav
$('.tag-nav__link').click(function(e){
  e.preventDefault();
  $('.tag-nav__link').removeClass('active');
  $(this).addClass('active');
  
  
  if($(`*[data-tag="${$(this).attr('href')}"]`).data('tag') == $(this).attr('href')){
    $('*[data-tag]').hide();
    $(`*[data-tag="${$(this).attr('href')}"]`).show();
  } else{
    $('*[data-tag]').hide();
    if($(this).attr('href') == "#all"){
      $('*[data-tag]').show();
    }
  }
})

// datepicker

$( "#birthday" ).datepicker( $.datepicker.regional[ "ru" ] );
$( "#birthday" ).datepicker( "option", "dateFormat", "d MM y" );

// user-tab
let mediaQuery = window.matchMedia('(max-width: 991px)');
if (mediaQuery.matches) {
  window.onload = function(){
    $('.link-tab, .tab-pane-fixed').removeClass('active');
  }
  $('.link-tab').click(function(){
    $('body').addClass('fixed-header');
  })
}
$('.close-tab').click(function(e){
  e.preventDefault();
  $(this).closest('.tab-pane-fixed').removeClass('active');
  $('.link-tab').removeClass('active');
  if($('.tab-pane-fixed').is('.active') == false){
    $('body').removeClass('fixed-header');
  }
  
})


$('.bonus-slider').slick({
  dots: false,
  infinite: false,
  arrows: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
  ]
});
$('.user-heading-nav__link').click(function(){
  if($('#user-partners').is('.active')){
    $('.bonus-slider').slick('refresh');
  }
})

$('.mobile-table').cardtable();

$("[data-brand]").click(function(){
  let brandArr = document.querySelectorAll("a[data-brand]");
  let categoryArrNav = document.querySelectorAll(".fake-select__item[data-category]");
  let curentCategory = "";

  categoryArrNav.forEach(itemCategory => {
    if(itemCategory.classList.contains("fake-select__item_active")){
        curentCategory = itemCategory.dataset.category;
    }
  })

  if(curentCategory){
    brandArr.forEach(item => {
      if(item.dataset.brand == this.dataset.brand && item.dataset.category == curentCategory){
        item.classList.remove("d-none");
      } else{
        item.classList.add("d-none")
      }
    })
  } else{
    brandArr.forEach(item => {
      if(item.dataset.brand == this.dataset.brand){
        item.classList.remove("d-none");
      } else{
        item.classList.add("d-none")
      }
    })
  }
})

$("[data-category]").click(function(){
  let categoryArr = document.querySelectorAll("a[data-category]");
  let brandArrNav = document.querySelectorAll(".fake-select__item[data-brand]");
  let curentBrand = "";

  brandArrNav.forEach(itemCategory => {
    if(itemCategory.classList.contains("fake-select__item_active")){
      curentBrand = itemCategory.dataset.brand;
    }
  })

  if(curentBrand){
    categoryArr.forEach(item => {
      if(item.dataset.category == this.dataset.category && item.dataset.brand == curentBrand){
        item.classList.remove("d-none");
      } else{
        item.classList.add("d-none")
      }
    })
  } else{
    categoryArr.forEach(item => {
      if(item.dataset.category == this.dataset.category){
        item.classList.remove("d-none");
      } else{
        item.classList.add("d-none")
      }
    })
  }
})
















