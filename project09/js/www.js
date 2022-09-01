window.addEventListener('DOMContentLoaded', () => {
    function bindingAccordionEvent(wrap) {
        let areaArr = document.querySelectorAll(wrap);

        areaArr.forEach(function (area) {
            let hasGroup = area.dataset['group'] !== undefined ? true : false;
            let btn = area.querySelector('.btn_toggle');

            btn.addEventListener('click', function () {
                if (hasGroup === true) {
                    let name = area.dataset['group'];
                    let groupArr = document.querySelectorAll(wrap + '[data-group="' + name + '"]');
                    let thisContent = area.querySelector('.content_area');

                    groupArr.forEach(function (group) {
                        let content = group.querySelector('.content_area');
                        content.classList.remove('act');
                    });
                    thisContent.classList.add('act');
                } else {
                    let content = area.querySelector('.content_area');
                    content.classList.toggle('act');
                }
            });
        });
    }

    bindingAccordionEvent('.accordion_area');



    const videoSwiper = new Swiper('.videoSwiper', {
        // loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        slideToClickedSlide: true,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 0,
            stretch: 350,
            scale: 0.9,
        },

        pagination: {
            el: '.videoSwiper .swiper-pagination',
            clickable: true,
        },


        navigation: {
            nextEl: '.videoSwiper .swiper-button-next',
            prevEl: '.videoSwiper .swiper-button-prev',
        },

    });



    var bullet = ['Part 1', 'Part 2', 'Part 3', 'Part 4', 'Part 5', 'Part 6', 'Part 7'];
    var ostSwiper = new Swiper(".ostSwiper", {
        effect: "cube",
        grabCursor: true,
        cubeEffect: {
            shadow: false,
            slideShadows: true,
            shadowOffset: 20,
            //   shadowScale: 0.5,
        },
        pagination: {
            el: '.ostSwiper .swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
            }
        },
    });



    var photoSwiper = new Swiper(".photoSwiper", {
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: [0, 0, -400],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },
    });





    const $text = document.querySelector(".text");

    // 글자 모음
    const letters = ["검색어를 입력하세요", "www", "우리들의 하루는 검색으로 시작해 검색으로 끝납니다"];

    // 글자 입력 속도
    const speed = 100;
    let i = 0;

    // 타이핑 효과
    const typing = async () => {
        const letter = letters[i].split("");

        while (letter.length) {
            await wait(speed);
            $text.innerHTML += letter.shift();
        }

        // 잠시 대기
        await wait(800);

        // 지우는 효과
        if (letters[i + 1]) remove();
    }

    // 글자 지우는 효과
    const remove = async () => {
        const letter = letters[i].split("");

        while (letter.length) {
            await wait(speed);

            letter.pop();
            $text.innerHTML = letter.join("");
        }

        // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
        i++;
        typing();
    }

    // 딜레이 기능 ( 마이크로초 )
    function wait(ms) {
        return new Promise(res => setTimeout(res, ms))
    }

    // 초기 실행
    setTimeout(typing, 2700);

});