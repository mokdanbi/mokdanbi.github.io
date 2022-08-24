window.addEventListener('DOMContentLoaded', () => {

    const mainSlider = new Swiper('.mainSlider', {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });

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

    const roomSlider = new Swiper('.roomSlider', {
        spaceBetween: 30,
        // centeredSlides: true,
        slidesPerView: 3,
        loop: true,
    });



    const dinTab = document.querySelectorAll('.dinTab>li');
    const dinContent = document.querySelectorAll('.dinContent>div');

    dinTab.forEach((el, idx) => {
        el.addEventListener('click', (e) => {
            dinContent.forEach(el => el.classList.remove('on'));
            dinContent[idx].classList.add('on');
            e.preventDefault();
        })
    });

})