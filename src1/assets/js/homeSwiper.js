var lexus1 = new Swiper('.lexus1', {
    effect: 'coverflow',
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
      rotate: 100,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });