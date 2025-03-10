/* Home page */

const swiperHero = new Swiper(".swiper-hero", {
  loop: true,
  autoplay: {
    delay: 8000,
  },
  cssMode: true,
  clickable: true,
  speed: 600,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperFrontPage = new Swiper(".swiper-resp", {
  cssMode: true,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* Commun */

const swiperExtra = new Swiper(".swiper-extra", {
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.2,
      spaceBetween: 0,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
  },
});

/* Page Gites */

const swiperGite = new Swiper(".swiper-galerie", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
})

const swiperRooms = new Swiper(".swiper-chambres", {
  slidesPerView: 3,
  spaceBetween: 50,
  loop: true,
  autoplay: false,

  navigation: {
    nextEl: ".swiper-chambre-button-next",
    prevEl: ".swiper-chambre-button-prev",
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

const swiperAcco = new Swiper(".swiper-acco", {
  slidesPerView: 1,
  loop: true,

  navigation: {
    nextEl: ".swiper-acco-button-next",
    prevEl: ".swiper-acco-button-prev",
  },
});
