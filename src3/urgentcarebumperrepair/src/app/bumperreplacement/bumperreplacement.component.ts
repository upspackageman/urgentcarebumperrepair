import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bumperreplacement',
  templateUrl: './bumperreplacement.component.html',
  styleUrls: ['./bumperreplacement.component.css']
})
export class BumperreplacementComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
