$(function(){
    $('.hamburger').on('click', function(){
        $(this).toggleClass('is-active');
        $('.mbtn_menu').show('on')
    });

    $('.new_slide').slick({
        autoplay: true,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 3,
        draggable: false,
        autoplaySpeed: 4000,
    });

    $('.new_content').slick({
        autoplay: true,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        draggable: false,
        fade: true,
        autoplaySpeed: 4000,
        asNavFor: '.new_slide'
    });

    $('.main_new .new_arrows i:nth-child(1)').on('click', function(){
        $('.new_content').slick('slickPrev')
    });

    $('.main_new .new_arrows i:nth-child(2)').on('click', function(){
        $('.new_content').slick('slickNext')
    });


    $('.main_loved .container').slick({
        autoplay: true,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 3,
        autoplaySpeed: 4000,
    });
    
});