



 



$(document).ready(function () {
  new WOW().init();
  jQuery(function($){
    $("#viewport").viewportChecker({
    callbackFunction:function(){
     

      $('.count').each(function () {
        $(this).prop('Counter',0).animate({
         Counter: $(this).text()
         }, {
          duration: 10000,
          easing: 'linear',
          step: function (now) {
             $(this).text(Math.ceil(now));
          }
         });
      });
    }
    });


    });
  $('#carousel2').owlCarousel({
    loop: true, //Зацикливаем слайдер
    margin: 50, //Отступ от элемента справа в 50px
    nav: false, //Отключение навигации
    autoplay: true,
    smartSpeed: 1000, //Время движения слайда
    autoplayTimeout: 8000, //Время смены слайда
    items: 1,
    dots: false,
    autoplayTimeout: 10000,
  });
  $('#carousel1').owlCarousel({
    loop: true, //Зацикливаем слайдер
    margin: 50, //Отступ от элемента справа в 50px
    nav: false, //Отключение навигации
    autoplay: true,
    smartSpeed: 1000, //Время движения слайда
    autoplayTimeout: 8000, //Время смены слайда
    items: 4,
    dots: true,
    nav: true,
    autoplayTimeout: 10000,
  });


 


  $('.carousel').carousel({
    interval: 2000
  })
});

//modalki//
$(document).ready(function () {
  $('a.myLinkModal').click(function (event) {
    event.preventDefault();
    $('#myOverlay').fadeIn(297, function () {
      $('#myModal')
        .css('display', 'block')
        .animate({
          opacity: 1
        }, 198);
    });
  });

  $('#myModal__close, #myOverlay').click(function () {
    $('#myModal').animate({
      opacity: 0
    }, 198, function () {
      $(this).css('display', 'none');
      $('#myOverlay').fadeOut(297);
    });
  });
});
//modalka1
$(document).ready(function () {
  $('a.myLinkModal1').click(function (event) {
    event.preventDefault();
    $('#myOverlay1').fadeIn(297, function () {
      $('#myModal1')
        .css('display', 'block')
        .animate({
          opacity: 1
        }, 198);
    });
  });

  $('#myModal__close1, #myOverlay1').click(function () {
    $('#myModal1').animate({
      opacity: 0
    }, 198, function () {
      $(this).css('display', 'none');
      $('#myOverlay1').fadeOut(297);
    });
  });
});
//modalka 29

$(document).ready(function () {
  $('a.myLinkModal3').click(function (event) {
    event.preventDefault();
    $('#myOverlay3').fadeIn(297, function () {
      $('#myModal3')
        .css('display', 'block')
        .animate({
          opacity: 1
        }, 198);
    });
  });

  $('#myModal__close3, #myOverlay3').click(function () {
    $('#myModal3').animate({
      opacity: 0
    }, 198, function () {
      $(this).css('display', 'none');
      $('#myOverlay3').fadeOut(297);
    });
  });
});
//modal 4
$(document).ready(function () {
  $('a.myLinkModal2').click(function (event) {
    event.preventDefault();
    $('#myOverlay2').fadeIn(297, function () {
      $('#myModal2')
        .css('display', 'block')
        .animate({
          opacity: 1
        }, 198);
    });
  });

  $('#myModal__close2, #myOverlay2').click(function () {
    $('#myModal2').animate({
      opacity: 0
    }, 198, function () {
      $(this).css('display', 'none');
      $('#myOverlay2').fadeOut(297);
    });
  });
});

///modal stagePadding 
$(document).ready(function () {
  $('a.myLinkModal4').click(function (event) {
    event.preventDefault();
    $('#myOverlay4').fadeIn(297, function () {
      $('#myModal4')
        .css('display', 'block')
        .animate({
          opacity: 1
        }, 198);
    });
  });

  $('#myModal__close4, #myOverlay4').click(function () {
    $('#myModal4').animate({
      opacity: 0
    }, 198, function () {
      $(this).css('display', 'none');
      $('#myOverlay4').fadeOut(297);
    });
  });
});
///modalsdd
$(document).ready(function () {
  $('a.myLinkModal5').click(function (event) {
    event.preventDefault();
    $('#myOverlay5').fadeIn(297, function () {
      $('#myModal5')
        .css('display', 'block')
        .animate({
          opacity: 1
        }, 198);
    });
  });

  $('#myModal__close5, #myOverlay5').click(function () {
    $('#myModal5').animate({
      opacity: 0
    }, 198, function () {
      $(this).css('display', 'none');
      $('#myOverlay5').fadeOut(297);
    });
  });
});

//ФОрма поиска