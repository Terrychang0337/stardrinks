new WOW().init();

var rellax = new Rellax('.rellax', {
    center: true,

});

// var rellax = new Rellax('.rellax', {
//     speed: -2,
//     center: true,
//     wrapper: null,
//     round: true,
//     vertical: true,
//     horizontal: false
// });


function introblockcontrol() {

    $('#introblock1').hover(function() {
        $('.introblock1__content').css({ "transform": "rotateX(0deg)" });
        $('.introblock1__title').css({
            "visibility": "hidden",
            "opacity": "0",

        });
        $('.topgate1').css({
            "height": "0"
        });

        $('.bottomgate1').css({
            "height": "0"
        });

    }, function() {
        $('.introblock1__content').css({ "transform": "rotateX(90deg)" });
        $('.introblock h2').css({
            "visibility": "visible",
            "opacity": "1",
        });
        $('.topgate1').css({
            "height": "140px"
        });
        $('.bottomgate1').css({
            "height": "140px"
        });

    });

    $('#introblock2').hover(function() {
            $('.introblock2__content').css({
                "opacity": "1",
                "height": "100%"
            });
            $('.introblock2__title').css({
                "visibility": "hidden",
                "opacity": "0",

            });
            $('.topgate2').css({
                "height": "0"
            });
            $('.bottomgate2').css({
                "height": "0"
            });
        },
        function() {
            $('.introblock2__content').css({ "opacity": "0", "height": "70%" });
            $('.introblock h2').css({
                "visibility": "visible",
                "opacity": "1",
            });
            $('.topgate2').css({
                "height": "20px"
            });

            $('.bottomgate2').css({
                "height": "270px"
            });
        });
    $('#introblock3').hover(function() {
            $('.introblock3__content').css({
                "opacity": "1",
                "height": "100%"
            });
            $('.introblock3__title').css({
                "visibility": "hidden",
                "opacity": "0",

            });
            $('.topgate3').css({
                "height": "0"
            });
            $('.bottomgate3').css({
                "height": "0"
            });
        },
        function() {
            $('.introblock3__content').css({ "opacity": "0", "height": "70%" });
            $('.introblock h2').css({
                "visibility": "visible",
                "opacity": "1",
            });
            $('.topgate3').css({
                "height": "240px"
            });

            $('.bottomgate3').css({
                "height": "50px"
            });
        });

}


function building() {
    alert("抱歉~網頁建構中!!");
}

$(document).ready(function() {



    //navbar__navmenu hover時變色
    $('.navbar__navmenu').hover(function() {
            $('.navbar__navmenu span').addClass('active_color');
        },
        function() {
            $('.navbar__navmenu span').removeClass('active_color');
        });


    // .navbar__navmenu 點擊時自己旋轉&出現menu
    $('.navbar__navmenu').click(function() {
        $('#menu').toggleClass('menu-active');
        $('.span1').toggleClass('navbar__navmenu__span__child1-active');
        $('.span2').toggleClass('navbar__navmenu__span__child2-active');
        $('.span3').toggleClass('navbar__navmenu__span__child3-active');

    });

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 300) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');

        }
    });


    $(window).scroll(function() {
        if ($(window).scrollTop() < 300) {
            $('.menu').addClass('unscrolled');
        } else {
            $('.menu').removeClass('unscrolled');

        }
    });


    // Junbotron 幻燈片
    $('.autoplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    introblockcontrol();


    //  backtotop
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        $('#back-to-top').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }


});