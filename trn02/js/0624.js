$(function(){

    $('.topBanner i').on('click', function(){
        $('.topBanner').slideUp();
    })


    $('.mainSlider').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false
    })


})