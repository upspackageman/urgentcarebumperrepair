import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {

  constructor() { }

  public config = {
    effect: 'coverflow',
    slidesPerView: 'auto',
    init: true,
    loop: true,
    coverflowEffect: {
      rotate: 100,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,

    },
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

};

// tslint:disable-next-line: typedef
toHeader(){
  document.getElementById('header').scrollIntoView();
}

  ngOnInit() {
  }

}
