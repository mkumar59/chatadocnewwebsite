import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Family =false;
  Psychologist=true;
  Psychiatrist=true;
  constructor() { }


  config: SwiperOptions = {
    pagination: { 
      el: '.swiper-pagination', 
      clickable: true 
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween:10,
    slidesPerView: 6,
  };
config2:  SwiperOptions = {

  // pagination: { el: '.swiper-pagination', clickable: true },
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev'
  // },
  fadeEffect: { crossFade: true },
  // autoplay:2000,
  // speed: 800,
  // autoplayDisableOnInteraction: false,
  effect: "fade",
  // spaceBetween: 30,
  // loop: true,
  // direction: 'horizontal',
  speed:1000,
  // direction: 'horizontal',
  navigation: 
  {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: 
  {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  // zoom: true,
  // keyboard: 
  // {
  // 	enabled: true,
  // 	onlyInViewport: false,
  // },
  // mousewheel: 
  // {
  // 	invert: true,
  // },
  autoplay: 
  {
    delay: 2000,
  },
  loop: false,
};


  ngOnInit(): void {
  
  }
  Family1(){
    this.Psychiatrist=true;
    this.Psychologist=true;
       this.Family=!this.Family
  }
  
  Psychologist1(){
    this.Family=true
  
    this.Psychiatrist=true;
    this.Psychologist=!this.Psychologist
  }
  
  
  Psychiatrist1(){
    this.Family=true;
    this.Psychologist=true;
    this.Psychiatrist=!this.Psychiatrist
  }

}
