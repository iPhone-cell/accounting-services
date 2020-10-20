// Анимация

$(function () {
    $(window).scroll(function() {
        $(".services").each(function() {
            var elPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (elPos < topOfWindow + 700) {
                $(this).addClass("fadeInUp");
            }
        })
    })
});

$(function () {
    $(window).scroll(function() {
        $(".about").each(function() {
            var elPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (elPos < topOfWindow + 700) {
                $(this).addClass("fadeInLeft");
            }
        })
    })
});


$(function () {
    $(window).scroll(function() {
        $(".customers").each(function() {
            var elPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (elPos < topOfWindow + 700) {
                $(this).addClass("fadeIn");
            }
        })
    })
});

$(function () {
    $(window).scroll(function() {
        $(".reviews").each(function() {
            var elPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (elPos < topOfWindow + 700) {
                $(this).addClass("fadeInRight");
            }
        })
    })
});

$(function () {
    $(window).scroll(function() {
        $(".contact").each(function() {
            var elPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (elPos < topOfWindow + 700) {
                $(this).addClass("fadeIn");
            }
        })
    })
});

// Фиксированное меню

$(document).ready(function() {
    // grab the initial top offset of the navigation 
    var stickyNavTop = $('.header').offset().top;
    
    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop(); // our current vertical position from the top
             
        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scrollTop > stickyNavTop) { 
            $('.header').addClass('sticky');
        } else {
            $('.header').removeClass('sticky'); 
        }
    };

    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function() {
        stickyNav();
    });
});

// Меню-гамбугер

$('.menu-toggle').click(function (e) {
    e.preventDefault();
    $('.nav').toggleClass('show');
});

$('.nav a').click(function (e) {
    e.preventDefault();
    $('.nav').toggleClass('show');
});

// Карусель

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    smartSpeed:1000,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});



// Кнопка "Наверх"

jQuery(document).ready(function() {
  var btn = $('.scroll-to-top');  
  $(window).scroll(function() {     
    if ($(window).scrollTop() > 300) {
       btn.addClass('show');
     } else {
       btn.removeClass('show');
     }
   });
   btn.on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({scrollTop:0}, '300');
   });
});

// Плавная прокрутка

$(document).ready(function() {
  $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
});