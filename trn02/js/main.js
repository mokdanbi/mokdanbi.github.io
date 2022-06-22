$(function(){

    // 220620 mok topBanner
    $('.topBanner i').on('click', function(){
        $('.topBanner').slideUp();
    })


    // init : 열었을 때 바로 보이게                   c = 숫자
    $('.mainSlider').on('init afterChange', function(e,s,c){
        var current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.mainArrow i').removeClass('on');
        if(c === 1) {
            $('.mainArrow i').addClass('on')
        }

        $('.slideNum').text((c? (c+1) : 1) + " / " + s.slideCount);
    });

    $('.mainSlider').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.mainArrow i:nth-child(1)').on('click', function(){
        $('.mainSlider').slick('slickPrev')
    });

    $('.mainArrow i:nth-child(2)').on('click', function(){
        $('.mainSlider').slick('slickNext')
    });

    $('#utb').YTPlayer({
        videoURL:'https://youtu.be/SUaRpo-I_24',
        containment:'.utb',
        autoPlay:true,
        mute:true,
        startAt:0,
        opacity:1,
        showControls: false,
        playOnlyIfVisible: true
    });

    $('.utb .zoom').on('click', function(e){
        e.preventDefault();
        $('#utb').YTPFullscreen()
    })
})