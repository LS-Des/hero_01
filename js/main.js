new Swiper('.news .swiper', {
  autoplay: true, 
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.news .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.news .swiper-button-prev',
    nextEl: '.news .swiper-button-next'
  }
})

new Swiper('.store .swiper', {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.store .swiper-pagination',
    clickable: true
  }
})

new Swiper('.theme .swiper', {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.theme .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.theme .swiper-button-prev',
    nextEl: '.theme .swiper-button-next'
  }
})