$(function () {

    var target_block = $(".cifra1"); // Ищем блок 
    var blockStatus = true;
    var numb_start = $(".cifra1").text();

    $(window).scroll(function () {



        if (blockStatus) {

            blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.

            $({
                numberValue: 0
            }).animate({
                numberValue: numb_start
            }, {

                duration: 10000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд 
                easing: "linear",

                step: function (val) {

                    $(".cifra1").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию

                }


            });

        }

    });

});


$(function () {

    var target_block2 = $(".cifra2"); // Ищем блок 
    var blockStatus2 = true;
    var numb_start2 = $(".cifra2").text();

    $(window).scroll(function () {



        if (blockStatus2) {

            blockStatus2 = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.

            $({
                numberValue: 0
            }).animate({
                numberValue: numb_start2
            }, {

                duration: 10000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд 
                easing: "linear",

                step: function (val) {

                    $(".cifra2").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию

                }


            });

        }

    });

});



$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: false, //Зацикливаем слайдер
        margin: 50, //Отступ от элемента справа в 50px
        nav: false, //Отключение навигации
        autoplay: false, //Автозапуск слайдера
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 8000, //Время смены слайда
        items: 1,
        dots: false,
    });
});

//modalki//
$(document).ready(function() {
  $('a.myLinkModal').click( function(event){
    event.preventDefault();
    $('#myOverlay').fadeIn(297,	function(){
      $('#myModal') 
      .css('display', 'block')
      .animate({opacity: 1}, 198);
    });
  });

  $('#myModal__close, #myOverlay').click( function(){
    $('#myModal').animate({opacity: 0}, 198, function(){
      $(this).css('display', 'none');
      $('#myOverlay').fadeOut(297);
    });
  });
});
//modalka1
$(document).ready(function() {
    $('a.myLinkModal1').click( function(event){
      event.preventDefault();
      $('#myOverlay1').fadeIn(297,	function(){
        $('#myModal1') 
        .css('display', 'block')
        .animate({opacity: 1}, 198);
      });
    });
  
    $('#myModal__close1, #myOverlay1').click( function(){
      $('#myModal1').animate({opacity: 0}, 198, function(){
        $(this).css('display', 'none');
        $('#myOverlay1').fadeOut(297);
      });
    });
  });
//modalka 29

$(document).ready(function() {
    $('a.myLinkModal3').click( function(event){
      event.preventDefault();
      $('#myOverlay3').fadeIn(297,	function(){
        $('#myModal3') 
        .css('display', 'block')
        .animate({opacity: 1}, 198);
      });
    });
  
    $('#myModal__close3, #myOverlay3').click( function(){
      $('#myModal3').animate({opacity: 0}, 198, function(){
        $(this).css('display', 'none');
        $('#myOverlay3').fadeOut(297);
      });
    });
  });
  //modal 4
  $(document).ready(function() {
    $('a.myLinkModal2').click( function(event){
      event.preventDefault();
      $('#myOverlay2').fadeIn(297,	function(){
        $('#myModal2') 
        .css('display', 'block')
        .animate({opacity: 1}, 198);
      });
    });
  
    $('#myModal__close2, #myOverlay2').click( function(){
      $('#myModal2').animate({opacity: 0}, 198, function(){
        $(this).css('display', 'none');
        $('#myOverlay2').fadeOut(297);
      });
    });
  });

  ///modal stagePadding 
   $(document).ready(function() {
    $('a.myLinkModal4').click( function(event){
        event.preventDefault();
        $('#myOverlay4').fadeIn(297,	function(){
          $('#myModal4') 
          .css('display', 'block')
          .animate({opacity: 1}, 198);
        });
      });
    
      $('#myModal__close4, #myOverlay4').click( function(){
        $('#myModal4').animate({opacity: 0}, 198, function(){
          $(this).css('display', 'none');
          $('#myOverlay4').fadeOut(297);
        });
      });
    });
    ///modalsdd
    $(document).ready(function() {
    $('a.myLinkModal5').click( function(event){
        event.preventDefault();
        $('#myOverlay5').fadeIn(297,	function(){
          $('#myModal5') 
          .css('display', 'block')
          .animate({opacity: 1}, 198);
        });
      });
    
      $('#myModal__close5, #myOverlay5').click( function(){
        $('#myModal5').animate({opacity: 0}, 198, function(){
          $(this).css('display', 'none');
          $('#myOverlay5').fadeOut(297);
        });
      });
    });