$(function(){

    $('.searchclick').on('click', function(e){
        e.preventDefault();
        $('.searchBox').slideToggle('on');
    })



    $('.main_slider').slick({
        // autoplay: true,
        dots: true,
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


    $('.store_list>ul>li>a').on('click',function(event){
        event.preventDefault();
        $('.store_list>ul>li>ul').stop().slideUp();
        $(this).next().stop().slideToggle();
    });


});





var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
        center: new kakao.maps.LatLng(35.680343986753506, 127.68768992375809), // 지도의 중심좌표
        level: 13 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
 
// 마커를 표시할 위치와 title 객체 배열입니다 
var positions = [
    {
        title: '부산점', 
        latlng: new kakao.maps.LatLng(35.15532102489087, 129.06444471394866)
    },
    {
        title: '전주', 
        latlng: new kakao.maps.LatLng(35.82029813419778, 127.14263040590055)
    },
    {
        title: '울산',
        latlng: new kakao.maps.LatLng(35.556622562533015, 129.32132391972755)
    },
    {
        title: '제주',
        latlng: new kakao.maps.LatLng(33.50753937788477, 126.69625029747004)
    },
    {
        title: '대구',
        latlng: new kakao.maps.LatLng(35.865159785682216, 128.60847328872893)
    },
    {
        title: '서울',
        latlng: new kakao.maps.LatLng(37.57946608645791, 126.984594423528)
    }
];

// 마커 이미지의 이미지 주소입니다
var imageSrc = '../img/marker.png';
    
for (var i = 0; i < positions.length; i ++) {
    
    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(32, 32); 
    
    // 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage // 마커 이미지 
    });
}