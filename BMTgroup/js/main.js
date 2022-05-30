$('.preview__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
});

$('.producer__slider').slick({
    slidesToShow: 6,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: '120px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: '60px',
        }
      }
    ]
  });
$('.production__slider').slick({
    slidesToShow: 4,
    arrows: true,
    responsive: [
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
      }
    ]
  });

$('.btn-menu').click(function(e){
  e.preventDefault();
  $('body').toggleClass("menu-open");
})
$('.filter-btn').click(function(e){
  e.preventDefault();
  $('body').toggleClass("filter-open");
})
$('.aside-btn').click(function(e){
  e.preventDefault();
  $('body').toggleClass("aside-open");
})

$('.item-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.item-slider-nav'
});
$('.item-slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.item-slider',
  vertical: true,
  dots: false,
  arrows: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        vertical: false,
      }
    },
  ]
});


// map
function initMap() {
	var contactsMap1 = new ymaps.Map('contactsMap', {
		center: [55.643312, 37.740165],
		zoom: 15,
		controls: [],
	}),
  

	myPlacemark = new ymaps.Placemark(contactsMap1.getCenter(), {
		hintContent: 'Holodoffdent',
		balloonContent: 'Holodoffdent',
	}, {
		iconLayout: 'default#image',
		iconImageHref: '../img/icon_location.png',
		iconImageSize: [67, 67],
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



