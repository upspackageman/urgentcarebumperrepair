import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BumperrepairComponent } from './bumperrepair/bumperrepair.component';
import { BumperreplacementComponent } from './bumperreplacement/bumperreplacement.component';
import { EstimateComponent } from './estimate/estimate.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { ProcessComponent } from './process/process.component';
import { ServiceComponent } from './service/service.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {Route} from './route';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true
};

@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      AboutComponent,
      BumperrepairComponent,
      BumperreplacementComponent,
      EstimateComponent,
      InsuranceComponent,
      ProcessComponent,
      ServiceComponent,
      NavbarComponent,
      FooterComponent
   ],
  imports: [
    FontAwesomeModule,
    CommonModule,
    BrowserAnimationsModule,
    SwiperModule,
    CollapseModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(Route),
    BsDropdownModule.forRoot(),
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
