import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  loop: true,
   pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 4,
  spaceBetween: 16,

  navigation: {
    nextEl: '.swiper__arrow_left',
    prevEl: '.swiper__arrow_right',
  },

  breakpoints: {
    280: {
      slidesPerView: 1.1,
      spaceBetween: 16,

    },

    376: {
      slidesPerView: 1.1,
      spaceBetween: 16,

    },

    414: {
      slidesPerView: 2,
      spaceBetween: 16,
    },

    604: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    645: {
      slidesPerView: 3,
      spaceBetween: 16,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 16,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 16,
    }

  },
});
