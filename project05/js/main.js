$(function(){
    $('.main_slider').slick({
        // autoplay: true,
        arrows: false,
        slidesToShow: 1,
        centerMode: true,
        infinite: true,
        variableWidth: true
    });


    $('.new_slide').slick({
        arrows: false,
        draggable: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 3,
        asNavFor: '.title_slide'
    });

    $('.title_slide').slick({
        arrows: false,
        fade: true,
        draggable: false,
        pauseOnHover: false,
        pauseOnFocus: false,
    });


    $('.new_arrival .new_arrows i:nth-child(1)').on('click', function(){
        $('.new_slide').slick('slickPrev')
    });

    $('.new_arrival .new_arrows i:nth-child(2)').on('click', function(){
        $('.new_slide').slick('slickNext')
    });




    $('.right_tap li').on('click',function(event){
        event.preventDefault();
        // console.log($(this), $(this).index(), event.target, event.currentTarget);
        $('.right_tap li').removeClass('on');
        $(this).addClass('on');
        var idx = $(this).index(); // 0,1,2
        $('.left_tap li').removeClass('on');
        $('.left_tap li').eq(idx).addClass('on');
    });
})