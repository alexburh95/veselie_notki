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
        loop: true, //Зацикливаем слайдер
        margin: 50, //Отступ от элемента справа в 50px
        nav: false, //Отключение навигации
        autoplay: true, //Автозапуск слайдера
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 8000, //Время смены слайда
        items: 1,
        dots: false,
    });
});


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


