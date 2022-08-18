$(function () {

    $('.MainSlider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.TxtSlide').slick({
        arrows: false,
        fade: true,
        draggable: false,
        infinite: false,
        asNavFor: '.BestImg'
        // slidesToShow: 1,
    });

    $('.BestImg').slick({
        arrows: false,
        slidesToShow: 3,
        infinite: false,
        asNavFor: '.TxtSlide'
        // draggable: false,
        // centerMode: true,
    });

    $('.bestArrows i:nth-child(1)').on('click', function () {
        $('.TxtSlide').slick('slickPrev');
    });

    $('.bestArrows i:nth-child(2)').on('click', function () {
        $('.TxtSlide').slick('slickNext');
    });




    $(".MainBrand>.brandTap>ul>li").click(function () {
        $(".MainBrand>.brandTap>ul>li").removeClass("on");
        $(this).addClass("on");
    });


    const S = $('.MainInsta .slider').slick({
        slidesToShow: 5,
        arrows: false,
    });

    $('.MainInsta').on('mousemove', e => {
        e.pageX > $(this).width() / 2
            ? S.slick('slickPrev')
            : S.slick('slickNext')
    });


    $('.searchclick').on('click', function(e){
        e.preventDefault();
        $('.searchBox').show('on');
    })

    
    $('.searchClose').on('click', function(e){
        e.preventDefault();
        $('.searchBox').hide('on');
    })


    $('.scrollBtn i:nth-child(1)').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    $('.scrollBtn i:nth-child(2)').on('click', function () {
        $('html,body').animate({
            scrollTop: 5000
        }, 600);
        return false;
    });

});


function searchAction() {
    var searchValue = $('.searchForm input').val();
    // console.log(searchValue)
    if (searchValue.length < 2) {
        alert('2글자 이상 입력해주세요.')
    } else {
        alert(searchValue)
    }

    $('.searchForm input').val('');
    // 검색 후에 초기화
    $('.searchForm input').focus();
    // 검색 후에도 계속 입력상태로 유지
};