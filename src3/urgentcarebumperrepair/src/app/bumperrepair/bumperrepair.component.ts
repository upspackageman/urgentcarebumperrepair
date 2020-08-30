import { Component, OnInit, Input } from '@angular/core';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-bumperrepair',
  templateUrl: './bumperrepair.component.html',
  styleUrls: ['./bumperrepair.component.css']
})
export class BumperrepairComponent implements OnInit {

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
