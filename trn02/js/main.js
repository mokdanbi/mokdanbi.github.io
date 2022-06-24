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

    $('.productSlider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 5,
        centerMode: true,
    });

    $('.product .productArrows i:nth-child(1)').on('click',function(){
        $('.productSlider').slick('slickPrev')
    });

    $('.product .productArrows i:nth-child(2)').on('click',function(){
        $('.productSlider').slick('slickNext')
    });


    $('.tab_menu li').on('click',function(event){
        event.preventDefault();
        // console.log($(this), $(this).index(), event.target, event.currentTarget);
        $('.tab_menu li').removeClass('on');
        $(this).addClass('on');
        var idx = $(this).index(); // 0,1,2
        $('.tab_content>div').removeClass('on');
        $('.tab_content>div').eq(idx).addClass('on');
    });



    $('.tab_content .notice li').on('click',function(event){
        event.preventDefault();
        var idx = $(this).index();
        $('.right_content>li').removeClass('on');
        $('.right_content>li').eq(idx).addClass('on');
    });


    $('.toTop').on('click',function(){
        $('html,body').animate({scrollTop:0}, 200)  // 기본 400
    });

    $(window).on('scroll',function(){
        var sct = $(window).scrollTop();
        if (sct > 500) {
            $('.toTop').fadeIn(300)
        } else {
            $('.toTop').fadeOut(1000)
        }
    });


    $('#fl').on('change', function(){
        console.log($(this), $(this).val())
        var lnk = $(this).val();
        if(lnk) {
            window.open(lnk);
        }
        // 값이 있을 때 링크를 열어라   리액트 : lnk && window.open(lnk);
    })

})