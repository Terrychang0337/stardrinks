//initial wow
new WOW().init();


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

// slide to area
$(document).ready(function() {

    // 偵聽a click
    $('.productbar a').bind("click", function() {

        var id = $(this).attr("data-id");

        // 取得目標區塊的y座標
        var target_top = $("#area" + id).offset().top - 60;

        // 取得body物件 這種寫法在各瀏覽器上最保險
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

        // 移動捲軸無動畫效果
        //$body.scrollTop(target_top);

        // 移動捲軸有動畫效果
        $body.animate({
            scrollTop: target_top
        }, 800);

    })
});