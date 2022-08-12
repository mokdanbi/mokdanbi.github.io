$(function () {
    $('#main').fullpage({
        anchors: ['page01', 'page02', 'page03'],
        // 페이지에 이름을 지정
        css3: false,
        afterLoad: function (ank, idx) {
            $('.gnb li').removeClass('on');
            $('.gnb li').eq(idx - 1).addClass('on');
            $('.section').removeClass('on');
            $('.section').eq(idx - 1).addClass('on');
            idx == 3 || idx == 1 ? $('.gnb a').addClass('w') : $('.gnb a').removeClass('w')
        }
    });

    $('.coverBtn').on('click', function () {
        $(this).toggleClass('on');
        $('.cover').toggleClass('on');
    });

    var coverContent = $('.gnb ul').clone().addClass('co');
    console.log(coverContent);

    $('.cover .case').append(coverContent);

    $('.cover a').on('click', function () {
        $('.cover').toggleClass('on');
        $('.coverBtn').toggleClass('on');
    });

    $('.cover').on('scroll, wheel', function(event){
        event.stopPropagation();
    })
})