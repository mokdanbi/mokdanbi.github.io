$(function(){
    $('.topBanner i').on('click', function(){
        $('.topBanner').slideUp();
    });

    $('.mainSlider').on('init afterChange', function(){
        var current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');
    });


    $('.mainSlider').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });
})
