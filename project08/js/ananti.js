window.addEventListener('DOMContentLoaded', () => {

    // mainSlider
    const mainSlider = new Swiper('.mainSlider', {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });


    // MainAbout
    const aboutSlider = new Swiper('.aboutSlider', {
        effect: 'fade',
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });

    // MainDining
    const dinTab = document.querySelectorAll('.dinTab>li');
    const dinContent = document.querySelectorAll('.dinContent>div');

    dinTab.forEach((el, idx) => {
        el.addEventListener('click', (e) => {
            dinContent.forEach(el => el.classList.remove('on'));
            dinContent[idx].classList.add('on');
            e.preventDefault();
        })
    });

    // MainMeeting
    const mtBtn = document.querySelectorAll('.mtBtn>div');
    const mtSlider = document.querySelectorAll('.mtSlider>div');

    mtBtn.forEach((el, idx) => {
        el.addEventListener('click', (e) => {
            mtSlider.forEach(el => el.classList.remove('on'));
            mtSlider[idx].classList.add('on');
            e.preventDefault();
        })
    });

});

$(function () {

    // MainRooms
    $('.roomSlider').slick({
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 3,
        centerMode: true,
        variableWidth: true,
    });

    $('.MainRooms .roomArrows i:nth-child(1)').on('click', function () {
        $('.roomSlider').slick('slickPrev')
    });

    $('.MainRooms .roomArrows i:nth-child(2)').on('click', function () {
        $('.roomSlider').slick('slickNext')
    });



    // 반응형 메뉴

    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('ul').stop().slideUp();
        }
    });

    $(window).on('resize', function () {
        $('.gnb').removeClass('on');
        $('.gnb>ul ul').removeAttr('style');
    });

    $('.mopen').on('click', function () {
        $('.gnb').toggleClass('on');
        $('.gnb>ul>li>a').next().stop().slideUp();
    });
});

