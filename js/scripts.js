

$(document).ready(function () {
  wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: true,
    live: true,
  });

  new WOW().init();
  jQuery(function ($) {
    $("#viewport").viewportChecker({
      callbackFunction: function () {
        $(".count").each(function () {
          $(this)
            .prop("Counter", 0)
            .animate(
              {
                Counter: $(this).text(),
              },
              {
                duration: 10000,
                easing: "linear",
                step: function (now) {
                  $(this).text(Math.ceil(now));
                },
              }
            );
        });
      },
    });
    $("#happy_2").viewportChecker({
      callbackFunction: function () {
        $("#carousel2").owlCarousel({
          autoplay: false,
          loop: true, //Зацикливаем слайдер
          margin: 50, //Отступ от элемента справа в 50px
          nav: false, //Отключение навигации
          smartSpeed: 1000, //Время движения слайда
          autoplayTimeout: 5000, //Время смены слайда
          items: 1,
          dots: false,
          autoplayTimeout: 5000,
        });
      },
    });
  });

  $("#carousel1").owlCarousel({
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
});

//modalki//
$(document).ready(function () {
  $("a.myLinkModal").click(function (event) {
    event.preventDefault();
    $("#myOverlay").fadeIn(297, function () {
      $("#myModal").css("display", "block").animate(
        {
          opacity: 1,
        },
        198
      );
    });
  });

  $("#myModal__close, #myOverlay").click(function () {
    $("#myModal").animate(
      {
        opacity: 0,
      },
      198,
      function () {
        $(this).css("display", "none");
        $("#myOverlay").fadeOut(297);
      }
    );
  });
});
//modalka1
$(document).ready(function () {
  $("a.myLinkModal1").click(function (event) {
    event.preventDefault();
    $("#myOverlay1").fadeIn(297, function () {
      $("#myModal1").css("display", "block").animate(
        {
          opacity: 1,
        },
        198
      );
    });
  });

  $("#myModal__close1, #myOverlay1").click(function () {
    $("#myModal1").animate(
      {
        opacity: 0,
      },
      198,
      function () {
        $(this).css("display", "none");
        $("#myOverlay1").fadeOut(297);
      }
    );
  });
});
//modalka 29

$(document).ready(function () {
  $("a.myLinkModal3").click(function (event) {
    event.preventDefault();
    $("#myOverlay3").fadeIn(297, function () {
      $("#myModal3").css("display", "block").animate(
        {
          opacity: 1,
        },
        198
      );
    });
  });

  $("#myModal__close3, #myOverlay3").click(function () {
    $("#myModal3").animate(
      {
        opacity: 0,
      },
      198,
      function () {
        $(this).css("display", "none");
        $("#myOverlay3").fadeOut(297);
      }
    );
  });
});
//modal 4
$(document).ready(function () {
  $("a.myLinkModal2").click(function (event) {
    event.preventDefault();
    $("#myOverlay2").fadeIn(297, function () {
      $("#myModal2").css("display", "block").animate(
        {
          opacity: 1,
        },
        198
      );
    });
  });

  $("#myModal__close2, #myOverlay2").click(function () {
    $("#myModal2").animate(
      {
        opacity: 0,
      },
      198,
      function () {
        $(this).css("display", "none");
        $("#myOverlay2").fadeOut(297);
      }
    );
  });
});

///modal stagePadding
$(document).ready(function () {
  $("a.myLinkModal4").click(function (event) {
    event.preventDefault();
    $("#myOverlay4").fadeIn(297, function () {
      $("#myModal4").css("display", "block").animate(
        {
          opacity: 1,
        },
        198
      );
    });
  });

  $("#myModal__close4, #myOverlay4").click(function () {
    $("#myModal4").animate(
      {
        opacity: 0,
      },
      198,
      function () {
        $(this).css("display", "none");
        $("#myOverlay4").fadeOut(297);
      }
    );
  });
});
///modalsdd
$(document).ready(function () {
  $("a.myLinkModal5").click(function (event) {
    event.preventDefault();
    $("#myOverlay5").fadeIn(297, function () {
      $("#myModal5").css("display", "block").animate(
        {
          opacity: 1,
        },
        198
      );
    });
  });

  $("#myModal__close5, #myOverlay5").click(function () {
    $("#myModal5").animate(
      {
        opacity: 0,
      },
      198,
      function () {
        $(this).css("display", "none");
        $("#myOverlay5").fadeOut(297);
      }
    );
  });
});

//ФОрма поиска
// Открытие галереии
const imgArray1=[
`img/country_2.jpg`,
`img/region_v.png`,
`img/country_2.jpg`,
`img/country_4.jpg`,
`img/country_2.jpg`,
`img/country_4.jpg`,
`img/region_v.png`,
`img/country_2.jpg`,
`img/country_4.jpg`,
]
const imgArray = [
  'img/slaid4.jpg',
  'img/slaid2.jpg',
  'img/slaid3.jpg',
  'img/slaid4.jpg',
  'img/slaid2.jpg',
  'img/slaid3.jpg',
  'img/slaid4.jpg',
  'img/slaid2.jpg',
  'img/slaid3.jpg',
  'img/slaid4.jpg',
  'img/slaid2.jpg',
  'img/slaid3.jpg',
  'img/slaid4.jpg',
  'img/slaid2.jpg',
  'img/slaid3.jpg',
  'img/slaid4.jpg',
  'img/slaid2.jpg',
  'img/slaid3.jpg',
  'img/slaid4.jpg',
  'img/slaid2.jpg',
  'img/slaid3.jpg',
  'img/slaid4.jpg',
  'img/slaid2.jpg',
  'img/slaid3.jpg',
]
const videoArray1 = [
  {
      src: 'video/Cats vs Treat Cup - Kittisaurus.mp4.',
      poster: 'img/region.jpg',
  },
  {
    src: 'video/Cats vs Treat Cup - Kittisaurus.mp4.',
    poster: 'img/region.jpg',
},
{
  src: 'video/Cats vs Treat Cup - Kittisaurus.mp4.',
  poster: 'img/region.jpg',
},
{
  src: 'video/Cats vs Treat Cup - Kittisaurus.mp4.',
  poster: 'img/region.jpg',
},
{
  src: 'video/Cats vs Treat Cup - Kittisaurus.mp4.',
  poster: 'img/region.jpg',
},
]
const videoArray = [
  {
      src: 'video/Cats vs Treat Cup - Kittisaurus.mp4.',
      poster: 'img/region.jpg',
  },
  {
    src: 'video/Cats vs Treat Cup - Kittisaurus.mp4.',
    poster: 'img/region.jpg',
},
{
  src: 'video/Cats vs Treat Cup - Kittisaurus.mp4.',
  poster: 'img/region.jpg',
},
{
  src: 'video/Cats vs Treat Cup - Kittisaurus.mp4.',
  poster: 'img/region.jpg',
},
{
  src: 'video/Cats vs Treat Cup - Kittisaurus.mp4.',
  poster: 'img/region.jpg',
},
{
  src: 'video/Cats vs Treat Cup - Kittisaurus.mp4.',
  poster: 'img/region.jpg',
},
{
  src: 'video/Cats vs Treat Cup - Kittisaurus.mp4.',
  poster: 'img/region.jpg',
},
{
  src: 'video/Cats vs Treat Cup - Kittisaurus.mp4.',
  poster: 'img/region.jpg',
},
{
  src: 'video/Cats vs Treat Cup - Kittisaurus.mp4.',
  poster: 'img/region.jpg',
},
{
  src: 'video/Cats vs Treat Cup - Kittisaurus.mp4.',
  poster: 'img/region.jpg',
},
{
  src: 'video/Cats vs Treat Cup - Kittisaurus.mp4.',
  poster: 'img/region.jpg',
},
]
const SHOW_NUMBER = 7
const showGalery = (section, classes, mediaArray) => {

  const chosenFormat = $(`.${section} .${classes}`)
 

  const createMediaElement = item => {
    let mediaElement;
      if (classes == 'photo') {
           mediaElement = $('<img>')
          mediaElement.attr('src', item)
          mediaElement.attr('data-gallery-src', item)
      }
      if (classes == 'video') {
           mediaElement = $('<video>')
          mediaElement.attr('src', item.src)
       
          mediaElement.attr('poster', item.poster)
          mediaElement.attr('controls',true)
          mediaElement.attr('preload', `none`)
      }
      const liElement = $('<li></li>')
          .addClass('col-lg-3 col-md-3')
          .append(mediaElement)
      chosenFormat.append(liElement)
  }
  mediaArray.forEach((item, index) => {
      if (index > SHOW_NUMBER) {
          return
      }
      createMediaElement(item)
  })

  if (mediaArray.length > SHOW_NUMBER + 1) {
    console.log('asfdadfa');
      button = $('<button></button>').addClass('corner-button')
      let span = $('<span>Показать еще</span>')
      button.append(span)
      chosenFormat.after(button);
      button.click(evt => {
          evt.preventDefault()
          const presentElements = chosenFormat.children().length

          if (presentElements > mediaArray.length - SHOW_NUMBER) {
              mediaArray
                  .slice(presentElements, mediaArray.length)
                  .forEach(item => createMediaElement(item))
          } else {
              mediaArray
                  .slice(presentElements, presentElements + 8)
                  .forEach(item => createMediaElement(item))
          }
          initGallery(document.getElementsByClassName(section)[0])
      })
  }
}
showGalery('retro', 'photo', imgArray)
showGalery(`retro`, `video`,videoArray)
showGalery('new_time', 'photo', imgArray1)
showGalery(`new_time`, `video`,videoArray1)
