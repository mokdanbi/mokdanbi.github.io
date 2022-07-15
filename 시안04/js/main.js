$(function(){
    $('.hamburger').on('click', function(){
        $(this).toggleClass('is-active');
        $('.mbtn_menu').show('on')
    });



    $('.searchclick').on('click', function(e){
        e.preventDefault();
        // a 이벤트를 막음
        $('.searchBox').toggleClass('on');
    })



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
    
    $('.main_loved .loved_arrows i:nth-child(1)').on('click',function(){
        $('.main_loved .container').slick('slickPrev')
    });

    $('.main_loved .loved_arrows i:nth-child(2)').on('click',function(){
        $('.main_loved .container').slick('slickNext')
    });



    $('.insta_slide').slick({
        autoplay: true,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 5,
        centerMode: true,
        autoplaySpeed: 5000,
    });



    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 970) {
          $(".hd_nav ul>li>a").css("color", "#98625f");
        }
        else{
          $(".hd_nav ul>li>a").css("color", "#fff");   
        }
      });

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 970) {
          $(".hd_nav h1 img").attr("src","../img/logotype.png");
        }
        else{
            $(".hd_nav h1 img").attr("src","../img/logotype_w.png");
        }
      });
});


