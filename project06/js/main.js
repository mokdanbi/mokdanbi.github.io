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
});