$(function(){
    $('.mainSlider').slick({
        autoplay: true,
        arrows: false,
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




    $('#family').on('change',function(){
        var link = $(this).val();
        if(link) {
            window.open(link);
        }
    });


})