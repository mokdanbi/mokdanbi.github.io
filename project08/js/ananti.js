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
        // spaceBetween: 30,
        centeredSlides: true,
        slidesPerView: 3,
        loop: true,
        pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    });


})