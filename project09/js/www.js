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



    const swiper = new Swiper('.swiper-container', {
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        slideToClickedSlide: true,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 0,
            slideShadows: false,
            stretch: 500,
        },
    });
});