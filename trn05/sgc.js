$(function () {

    var TXT = ['HOME', '01', '02', '03', '04', 'lee,s portfolio']
    $('.main').fullpage({
        anchors: ['page01', 'page02', 'page03', 'page04', 'page05', 'footer'],
        //navigation: true,
        css3: false,
        afterLoad: function (page, num) {
            setTimeout(() => {
                $('.section').eq(num - 1).addClass('on').siblings().removeClass('on');
            });
            $('.Gnb li').eq(num - 1).addClass('on').siblings().removeClass('on');
            $('.this_page').text(TXT[num - 1]);

            num !== 1
                ? $('.Header').addClass('on')
                : $('.Header').removeClass('on')
        },
    });




    $('.basicSlider').slick({
        arrows: false,
        autoplay: true,
        asNavFor: '.basicSlider',
    });

    $('.productSlider .slide_menu li').on('click', function () {
        var idx = $(this).index();
        $('.basicSlider').slick('slickGoTo', idx)
    });

    $('.basicSlider').on('afterChange', function (e, s, c) {
        $('.productSlider .slide_menu li').eq(c).addClass('on').siblings().removeClass('on')
    });
})