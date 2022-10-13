$(function () {
    $('.main_slider').slick({
        autoplay: true,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplaySpeed: 5000,
        speed: 2000,
        fade: true
    });


    $('.menu_top').slick({
        autoplay: true,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        draggable: false,
        slidesToShow: 2,
    });

    $('.menu_bottom').slick({
        autoplay: true,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        draggable: false,
        slidesToShow: 2,
        asNavFor: '.menu_top'
    });


    $('.main_menu .menu_arrows i:nth-child(1)').on('click', function () {
        $('.menu_bottom').slick('slickPrev')
    });

    $('.main_menu .menu_arrows i:nth-child(2)').on('click', function () {
        $('.menu_bottom').slick('slickNext')
    });


    $('.vegan_slider').slick({
        autoplay: true,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
        dots: true,
        autoplaySpeed: 5000,
    });


    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 3750) {
            $(".to_top i").css("color", "#ffffff");
        } else {
            $(".to_top i").css("color", "");
        }
    });

    $('.to_top').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 300)  // 기본 400
    });

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        if (sct > 500) {
            $('.to_top').fadeIn(500)
        } else {
            $('.to_top').fadeOut(500)
        }
    });
})