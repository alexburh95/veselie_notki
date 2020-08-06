
	
$(function() {
	
    var target_block = $(".cifra1"); // Ищем блок 
    var blockStatus = true;
    var numb_start = $(".cifra1").text() + "";
    
    $(window).scroll(function() {
    
        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
        
        if(scrollEvent && blockStatus) {
        
            blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
            
            $({numberValue: 0}).animate({numberValue: numb_start}, {
            
                duration: 10000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд 
                easing: "linear",
                
                step: function(val) {
                
                    $(".cifra1").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
                    
                }
                
                
            });
            
        }
       
    });

});
	
	
$(function() {
	
    var target_block2 = $(".cifra2"); // Ищем блок 
    var blockStatus2 = true;
    var numb_start2 = $(".cifra2").text() + "";
    
    $(window).scroll(function() {
    
        var scrollEvent2 = ($(window).scrollTop() > (target_block2.position().top - $(window).height()));
        
        if(scrollEvent2 && blockStatus2) {
        
            blockStatus2 = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
            
            $({numberValue: 0}).animate({numberValue: numb_start2}, {
            
                duration: 10000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд 
                easing: "linear",
                
                step: function(val) {
                
                    $(".cifra2").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
                    
                }
                
                
            });
            
        }
       
    });

});



$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {
            loop:false, //Зацикливаем слайдер
                margin:50, //Отступ от элемента справа в 50px
                nav:false, //Отключение навигации
                autoplay:false, //Автозапуск слайдера
                smartSpeed:1000, //Время движения слайда
                autoplayTimeout:8000, //Время смены слайда
              items: 1,
              dots: false,
        }
    );
    });


