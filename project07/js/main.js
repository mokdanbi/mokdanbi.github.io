$(function () {
    $('.MainSlider').slick({
        arrows: false,
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
    })

    $('.bestArrows i:nth-child(2)').on('click', function () {
        $('.TxtSlide').slick('slickNext');
    })
})