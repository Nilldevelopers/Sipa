'use strict';

// Hamburger Menu
const hamburgerToggle = document.querySelector('.header__toggle');
const hamburgerMenu = document.querySelector('.hamburger__menu');

hamburgerToggle.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  document.querySelector('body').classList.toggle('noscroll');
});

//////////////////////////////////////////////////////
// TESTIMONIAL SWIPER
//////////////////////////////////////////////////////
var swiper = new Swiper('.testimonialSwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 700,
  centeredSlides: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: -170,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: -170,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//////////////////////////////////////////////////////
// TOKEN SWIPER
//////////////////////////////////////////////////////
var swiper = new Swiper('.tokenSwiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  navigation: {
    nextEl: '.tokenSwiper-button-next',
    prevEl: '.tokenSwiper-button-prev',
  },
  pagination: {
    el: '.tokenSwiper-pagination',
    clickable: true,
  },
});

//////////////////////////////////////////////////////
// FUNDS SWIPER
//////////////////////////////////////////////////////
var swiper = new Swiper('.fundSwiper', {
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 3,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

//////////////////////////////////////////////////////
// ARTICLE SWIPER
//////////////////////////////////////////////////////

var swiper = new Swiper('.articleSwiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  navigation: {
    nextEl: '.articleSwiper-button-next',
    prevEl: '.articleSwiper-button-prev',
  },
  pagination: {
    el: '.articleSwiper-pagination',
    clickable: true,
  },
});

//////////////////////////////////////////////////////
// WAYS SWIPER
//////////////////////////////////////////////////////
var swiper = new Swiper('.waySwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 600,
  navigation: {
    nextEl: '.waySwiper-button-next',
    prevEl: '.waySwiper-button-prev',
  },
});

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});
