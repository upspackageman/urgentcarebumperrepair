var process = new Swiper('.bumperreplacement', {
      //effect: 'cube',
	  effect:'flip',
      grabCursor: true,
      /*cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },*/
      pagination: {
        el: '.process-pagination',
		dynamicBullets: true,
      },
	  
	  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    });