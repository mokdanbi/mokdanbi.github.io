$(function(){


    $('.mainSlider').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    

    $('.newsSlider').slick({
        arrows: false,
        slidesToShow: 3,
    });

    $('.mainNews .newsArrow i:nth-child(1)').on('click',function(){
        $('.newsSlider').slick('slickPrev')
    });

    $('.mainNews .newsArrow i:nth-child(2)').on('click',function(){
        $('.newsSlider').slick('slickNext')
    });



    $('.leftSlider').slick({
        autoplay: true,
        arrows: false,
        fade: true,
        draggable : false,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.rightSlider').slick({
        autoplay: true,
        arrows: false,
        draggable : false,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 3,
        asNavFor: '.leftSlider'
    });

    $('.mainSocial .socialArrow i:nth-child(1)').on('click',function(){
        $('.rightSlider').slick('slickPrev')
    });

    $('.mainSocial .socialArrow i:nth-child(2)').on('click',function(){
        $('.rightSlider').slick('slickNext')
    });


    $('.titleSlider').slick({
        autoplay: true,
        arrows: false,
        draggable : false,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
        slidesToShow: 1,
    });

    $('.mainSocial .socialArrow i:nth-child(1)').on('click',function(){
        $('.titleSlider').slick('slickPrev')
    });

    $('.mainSocial .socialArrow i:nth-child(2)').on('click',function(){
        $('.titleSlider').slick('slickNext')
    });



    $('#family').on('change',function(){
        var link = $(this).val();
        if(link) {
            window.open(link);
        }
    });


})