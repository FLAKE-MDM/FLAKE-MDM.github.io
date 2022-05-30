$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  adaptiveHeight: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  arrows: true,
  focusOnSelect: true
});
$('.slider-for2').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  adaptiveHeight: true,
  asNavFor: '.slider-nav2'
});
$('.slider-nav2').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for2',
  dots: false,
  arrows: true,
  focusOnSelect: true
});
$('.slider-for3').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  adaptiveHeight: true,
  asNavFor: '.slider-nav3'
});
$('.slider-nav3').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for3',
  dots: false,
  arrows: true,
  focusOnSelect: true
});
$('.article__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  adaptiveHeight: true,
  arrows: true,
  asNavFor: '.article__slider-nav'
});
$('.article__slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.article__slider',
  dots: false,
  arrows: false,
  focusOnSelect: true
});
$('.expertise-slider').slick({
  slidesToShow: 3,
  arrows: false,
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        centerPadding: '60px',
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '30px',
      }
    }
  ]
});
$('.technology-slider').slick({
  slidesToShow: 2,
  arrows: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '40px',
      }
    }
  ]
});

// $('.services-toggler').click(function(e){
//     e.preventDefault();
//     $('.services-nav').toggleClass('active');
//     $('body').toggleClass('no-scroll');
// })



if(window.innerWidth > 992) {
  let container = document.querySelector('.services-nav__list');
    container.onmouseover = handler;
    function handler(event) {
      if (event.type == 'mouseover') {
        $(event.target).parents('.services-nav__list').find('.services-nav__list-item').removeClass('active');
        $(event.target).parents('.services-nav__list-item').addClass('active');
      }
    }
} else{
  $('.services-nav__list-link').click(function(e){
    e.preventDefault();
    $('.services-nav__list-item').removeClass('active');
    $(this).parent().addClass("active")
  })
}


$('#file2').change(function(){
  let file = document.querySelector('#file2').files;
  let arr = [];
  $('#file-block2').innerHTML = '';
  for(let i = 0; i < file.length; i++){
    arr.push(file[i].name);
    $('#file-block2').append(`<button class="btn btn-success text-md file-block__btn btn-xs">${file[i].name}</button`)
    
  }

  $('.file-block__btn').click(function(){
    this.remove()
  })
})

$('#file').change(function(){
  let file = document.querySelector('#file').files;
  let arr = [];
  $('#file-block').innerHTML = '';
  for(let i = 0; i < file.length; i++){
    arr.push(file[i].name);
    $('#file-block').append(`<button class="btn btn-success text-md file-block__btn btn-xs">${file[i].name}</button`)
    
  }

  $('.file-block__btn').click(function(){
    this.remove()
  })
})


let $page = $('html, body');
$('.top-link').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

$('.faq-item__link').click(function(){
  $(this).parent().toggleClass('active')
})



