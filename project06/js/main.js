$(function () {
    $('.top_banner i').on('click', function () {
        $('.top_banner').slideUp();
    });



    $('.main_slider').slick({
        arrows: false,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
    });



    $('.mall_slider').slick({
        arrows: false,
        slidesToShow: 5,
        centerMode: true,
    });

    $('.mall_arrows i:nth-child(1)').on('click', function(){
        $('.mall_slider').slick('slickPrev')
    });

    $('.mall_arrows i:nth-child(2)').on('click', function(){
        $('.mall_slider').slick('slickNext')
    });
});