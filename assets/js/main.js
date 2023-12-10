// 헤더 버튼 왼쪽 버튼 클릭시 메뉴가 나오도록
let header = document.querySelector('.header');
let btnSide = document.querySelector('.header .btn-side');
let sideNavEl = document.querySelector('.header .side-nav');
let closeBtn = document.querySelector('.header .close');
let infoBar = document.querySelector('.info-bar');
let infoWhite = document.querySelector('.info-bar li.info-white');

btnSide.addEventListener('click', () => {
    sideNavEl.classList.add('on');
})

closeBtn.addEventListener('click', () => {
    sideNavEl.classList.remove('on');
})

infoWhite.addEventListener('click', () => {
    infoBar.classList.add('on');
})

// 헤더 메뉴의 Vinos 클릭시 하위리스트 나오도록
$('.header .item .title').click(function (e) {
    if ($('.header .item').hasClass('on')) {
        $('.header .item').removeClass('on').siblings('.sub').slideUp();
    } else {
        $('.header .item').removeClass('on').siblings('.sub').slideUp();
        $('.header .item').addClass('on').siblings('.sub').slideDown();
    }
})

Slide5 = new Swiper('.inner5 .swiper', {
    slidesPerView: 1.25,
    navigation: {
        nextEl: ".inner5 .btn-next",
        prevEl: ".inner5 .btn-prev"
    },
    breakpoints: {
        768: {
            slidesPerView: 2.75,
        },
    },
})

Slide8 = new Swiper('.inner8 .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    navigation: {
        nextEl: ".inner8 .btn-next",
        prevEl: ".inner8 .btn-prev"
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
})

/**
 * 사이트 부드럽게하기
 */
const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
    lenis.raf(time * 500)
})

gsap.ticker.lagSmoothing(0)

/**
 * 스크롤이 시작되면 헤더에 배경색이 입혀지도록
 */
ScrollTrigger.create({
    trigger: '.container',
    start: "0% 0%",
    toggleClass: { targets: '.header', className: 'dark' }
})

/**
 * 스크롤이 시작되면 헤더 로고가 사이즈가 축소되고 위치가 변경되도록
 */
logoTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".inner1",
        start: "0% 0%",
        end: "100% 50%",
        scrub: 0,
    }
})

logoTl.to('.header .logo', { transform: "translate(-50%, 0vh)" }, 'a')
logoTl.to('.header .logo img', { width: 120 }, 'a')
logoTl.to('.header', { background: "#2B2B2B" }, 'a')

var ww = $(window).width();

/**
 * container 2번째 문단 애니메이션 효과가 나오도록
 */
function inner2Move() {
    console.log(ww >= 768);
    if (ww >= 768) {
        parall_y_List = document.querySelectorAll('[data-parallax-y]')
        parall_x_List = document.querySelectorAll('[data-parallax-x]')

        parall_x_List.forEach(element => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,//객체기준범위
                    start: "0% 100%",
                    end: "100% 0%",
                    scrub: 0,
                    marker: true
                },
                x: element.dataset.parallaxX,
                ease: 'none'
            });
        })

        parall_y_List.forEach(element => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,//객체기준범위
                    start: "0% 100%",
                    end: "100% 0%",
                    scrub: 0,
                    marker: true
                },
                y: element.dataset.parallaxY,
                ease: 'none'
            });
        })
    } else {
        mobile_y_List = document.querySelectorAll('[data-mobile-y]')
        mobile_x_List = document.querySelectorAll('[data-mobile-x]')

        mobile_x_List.forEach(element => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,//객체기준범위
                    start: "0% 100%",
                    end: "100% 0%",
                    scrub: 0,
                    marker: true
                },
                x: element.dataset.mobileX,
                ease: 'none'
            });
        })

        mobile_y_List.forEach(element => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,//객체기준범위
                    start: "0% 100%",
                    end: "100% 0%",
                    scrub: 0,
                    marker: true
                },
                y: element.dataset.mobileY,
                ease: 'none'
            });
        })
    }
}

function inner6Move() {
    if (ww >= 768) {
        /**
     * EL VALOR DEL 부분 고정시키고
     */
        mapTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.inner6',//객체기준범위
                start: "0% 100%",
                end: "100% 0%",
                scrub: true,
                onUpdate: self => {
                    // console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
                    progress = self.progress.toFixed(3) * 100;
                    direct = self.direction;
                    if (progress >= 75) {
                        $('.inner6 .img-area .content:nth-child(1)').addClass('on').siblings().removeClass('on');
                        if (direct > 0) {
                            $('.inner6 .txt-area .link-more').addClass('on');
                        } else {
                            return
                        }
                    } else if (progress >= 50) {
                        $('.inner6 .img-area .content:nth-child(2)').addClass('on').siblings().removeClass('on');
                        if (direct > 0) {
                            $('.inner6 .txt-area .middle-text').addClass('on');
                            $('.inner6 .btn-wrap button:nth-child(1)').addClass('on');
                        } else {
                            $('.inner6 .txt-area .link-more').removeClass('on');

                        }
                    } else if (progress >= 25) {
                        $('.inner6 .img-area .content:nth-child(3)').addClass('on').siblings().removeClass('on');
                        if (direct > 0) {
                            $('.inner6 .txt-area .Top-text').addClass('on');
                            $('.inner6 .btn-wrap button:nth-child(2)').addClass('on');
                        } else {
                            $('.inner6 .txt-area .middle-text').removeClass('on');
                            $('.inner6 .btn-wrap button:nth-child(1)').removeClass('on');

                        }
                    } else {
                        $('.inner6 .img-area .content:nth-child(4)').addClass('on').siblings().removeClass('on');
                        if (direct < 0) {
                            $('.inner6 .txt-area .Top-text').removeClass('on');
                            $('.inner6 .btn-wrap button:nth-child(2)').removeClass('on');
                        }
                    }
                },
                ease: 'none'
            },
        })
    } else {
        return
    }
}

$(window).on('load', function () {
    inner2Move();
    inner6Move();
});

$(window).on('resize', function () {
    ww = $(window).width();
    console.log(ww);
    inner2Move();
    inner6Move();
});

/**
 * EL VALOR DEL TERROIR 부분에 다다르면 html에 dark를 붙였다 떼어짐
 */
ScrollTrigger.create({
    trigger: '[data-theme-offset]',
    start: "0% 50%",
    end: "100% 50%",
    toggleClass: { targets: 'html', className: 'dark' }
})