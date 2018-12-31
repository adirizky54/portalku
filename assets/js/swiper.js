// Promo Produk
//
var swiperPromo = new Swiper('.swiper-promo', {
  slidesPerView: 6,
  slidesPerGroup: 6,
  spaceBetween: 15,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    1140: {
      slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 15,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 5,
    }
  }
});

var swiperReseller = new Swiper('#swiper-reseller', {
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.swiper-pagination'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
});

var swiperPenulis = new Swiper('#swiper-penulis', {
  slidesPerView: 5,
  spaceBetween: 15,
  slidesPerGroup: 5,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    1200: {
      slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 15,
    },
    1199: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 5,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 5,
    }
  }
});

var swiperTerkait = new Swiper('#swiper-terkait', {
  slidesPerView: 5,
  spaceBetween: 15,
  slidesPerGroup: 5,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    1200: {
      slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 15,
    },
    1199: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 5,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 5,
    }
  }
});

// Best Product
//
var swiperBest = new Swiper('#swiper-best', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    640: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    }
  }
});

// Banner Promo
//
var swiperbanner = new Swiper('#swiper-banner', {
  // slidesPerView: 2,
  // spaceBetween: 10,
  // centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // breakpoints: {
  //   1024: {
  //     slidesPerView: 2,
  //     spaceBetween: 10,
  //     centeredSlides: true,
  //   },
  //   640: {
  //     slidesPerView: 1,
  //     spaceBetween: 10,
  //     centeredSlides: false,
  //   },
  //   576: {
  //     slidesPerView: 1,
  //     spaceBetween: 10,
  //     centeredSlides: false,
  //   },
  // }
});

var swiperKategori = new Swiper('.swiper-produk', {
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 15,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    1140: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 15,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 5,
    }
  }
})