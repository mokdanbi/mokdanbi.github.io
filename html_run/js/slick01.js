$(function() {
    $('.visual_silder').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
    });

    $('.slider').slick({
        autoplay: true,
        arrows: false,
        // 버튼의 유무
        autoplaySpeed: 4000,
        // img가 머물러 있는 시간 (3000=3s)
        dots: true,
        pauseOnHover: false,
        // 마우스를 hover 했을 때 멈추는가
    });

    $('.slider02').slick({
        slidesToShow: 3,
        // 몇 개를 보여줄 것 인가 (3개 일 때, 3으로 하면 슬라이드 X)
    });
});