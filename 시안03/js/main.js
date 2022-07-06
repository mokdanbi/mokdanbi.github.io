$(function() {
    $('.main_slider').slick({
        // autoplay: true,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplaySpeed: 5000,
        speed: 2000,
    });


    $('.menu_top').slick({
        // autoplay: true,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        draggable : false,
        slidesToShow: 2,
    });
    
    $('.menu_bottom').slick({
        // autoplay: true,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        draggable : false,
        slidesToShow: 2,
        asNavFor: '.menu_top'
    });


    $('.main_menu .menu_arrows i:nth-child(1)').on('click', function(){
        $('.menu_bottom').slick('slickPrev')
    });

    $('.main_menu .menu_arrows i:nth-child(2)').on('click', function(){
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
})