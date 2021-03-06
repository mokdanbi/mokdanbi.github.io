$(function () {


    $('.searchclick').on('click', function (e) {
        e.preventDefault();
        $('.searchBox').slideToggle('on');
    })



    $('.main_slider').slick({
        autoplay: true,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        centerMode: true,
        infinite: true,
        variableWidth: true,
    });


    $('.new_slide').slick({
        arrows: false,
        draggable: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 3,
        //centerMode: true,
        // asNavFor: '.title_slide',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2,
            }
        }]
    });

    $('.title_slide').slick({
        arrows: false,
        fade: true,
        draggable: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                initialSlide: 0,
            }
        }]
    });


    $('.new_arrival .new_arrows i:nth-child(1)').on('click', function () {
        $('.new_slide').slick('slickPrev')
    });

    $('.new_arrival .new_arrows i:nth-child(2)').on('click', function () {
        $('.new_slide').slick('slickNext')
    });

    $('.new_arrival .new_arrows i:nth-child(1)').on('click', function () {
        $('.title_slide').slick('slickPrev')
    });

    $('.new_arrival .new_arrows i:nth-child(2)').on('click', function () {
        $('.title_slide').slick('slickNext')
    });




    $('.right_tap li').on('click', function (event) {
        event.preventDefault();
        // console.log($(this), $(this).index(), event.target, event.currentTarget);
        $('.right_tap li').removeClass('on');
        $(this).addClass('on');
        var idx = $(this).index(); // 0,1,2
        $('.left_tap li').removeClass('on');
        $('.left_tap li').eq(idx).addClass('on');
    });


    $('.store_list>ul>li>a').on('click', function (event) {
        event.preventDefault();
        $('.store_list>ul>li>ul').stop().slideUp();
        $(this).next().stop().slideToggle();
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('#top_btn').fadeIn();
        } else {
            $('#top_btn').fadeOut();
        }
    });

    $('#top_btn').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

    AOS.init();


    // ?????????

    $('.mbtn').on('click', function () {
        $('.header_bottom').toggleClass('on');
    });

    $(window).on('resize', function () {
        $('.header_bottom').removeClass('on');
    });


});




var mapContainer = document.getElementById('map'), // ????????? ????????? div  
    mapOption = {
        center: new kakao.maps.LatLng(35.680343986753506, 127.68768992375809), // ????????? ????????????
        level: 13 // ????????? ?????? ??????
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // ????????? ???????????????

// ????????? ????????? ????????? title ?????? ??????????????? 
var positions = [{
        title: '?????????',
        latlng: new kakao.maps.LatLng(35.15532102489087, 129.06444471394866)
    },
    {
        title: '??????',
        latlng: new kakao.maps.LatLng(35.82029813419778, 127.14263040590055)
    },
    {
        title: '??????',
        latlng: new kakao.maps.LatLng(35.556622562533015, 129.32132391972755)
    },
    {
        title: '??????',
        latlng: new kakao.maps.LatLng(33.50753937788477, 126.69625029747004)
    },
    {
        title: '??????',
        latlng: new kakao.maps.LatLng(35.865159785682216, 128.60847328872893)
    },
    {
        title: '??????',
        latlng: new kakao.maps.LatLng(37.57946608645791, 126.984594423528)
    }
];

// ?????? ???????????? ????????? ???????????????
var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

for (var i = 0; i < positions.length; i++) {

    // ?????? ???????????? ????????? ?????? ?????????
    var imageSize = new kakao.maps.Size(24, 35);

    // ?????? ???????????? ???????????????    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    // ????????? ???????????????
    var marker = new kakao.maps.Marker({
        map: map, // ????????? ????????? ??????
        position: positions[i].latlng, // ????????? ????????? ??????
        title: positions[i].title, // ????????? ?????????, ????????? ???????????? ????????? ???????????? ???????????????
        image: markerImage // ?????? ????????? 
    });

}