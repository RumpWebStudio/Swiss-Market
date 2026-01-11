const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 3,
    centeredSlides: true,
    slidesPerView: 1,
    breakpoints: {
        1250: {
            slidesPerView: 4
        },
        768: {
            slidesPerView: 3
        },
        528: {
            slidesPerView: 2
        }
    }
  });