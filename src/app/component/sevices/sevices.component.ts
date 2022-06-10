import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { CommonserviceService } from 'src/app/services/commonservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sevices',
  templateUrl: './sevices.component.html',
  styleUrls: ['./sevices.component.css']
})
export class SevicesComponent implements OnInit {
  show:any='Is there any solution for Depression?';

  datamessage:any='English';
  quetionList:any=[
    {
      id:1,
      t:'true',
      title:'Is there any solution for Depression?',
      img:'',
      description:' Answer : Well it will be wrong to use the word solution for Depression. Since Depression is a psychiatric disorder it needs treatment, and with proper treatment people mark remarkable improvements and maintain symptom free. Please seek professional help immediately. '
    },
    {
      id:2,
      t:'false',
      title:'What are some tips for maintaining a positive mental well being?',
      description:'Answer : Well it will be wrong to use the word solution for Depression. Since Depression is a psychiatric disorder it needs treatment, and with proper treatment people mark remarkable improvements and maintain symptom free. Please seek professional help immediately. '
    },
    {
      id:3,
      t:'false',
      title:'Is tele counselling safe?',
      description:'Answer : Well it will be wrong to use the word solution for Depression. Since Depression is a psychiatric disorder it needs treatment, and with proper treatment people mark remarkable improvements and maintain symptom free. Please seek professional help immediately. '
    },
    {
      id:4,
      t:'false',
      title:'I am not able to sleep, work is at mess too, is therapy necessary?',
      description:' Answer : Well it will be wrong to use the word solution for Depression. Since Depression is a psychiatric disorder it needs treatment, and with proper treatment people mark remarkable improvements and maintain symptom free. Please seek professional help immediately.'
    },
    {
      id:5,
      t:'false',
      title:'Does stress have any impact on health?',
      description:'Answer : Yes certainly! There is a mutual connection between mind and body. Stress leads to secretion of cortisol which negatively impacts various bodily functions - respiration, digestion, metabolism etc.'
    }
  ]
  constructor(public langaugeChange:CommonserviceService,private route:Router) { 
    this.langaugeChange.lang.subscribe((res: any) => {  
      this.datamessage = res;  
      console.log(this.datamessage)
    })
  }

  ngOnInit(): void {

  }
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
    slidesPerView:1,
    autoplay: 
    {
      delay: 3000,
      pauseOnMouseEnter:true,
      disableOnInteraction:false
    },
    loop:true,
  };

  config2: SwiperOptions = {

    loop:true,
    speed:1000,
    autoplay: 
    {
      delay: 2000,
      pauseOnMouseEnter:true,
      disableOnInteraction:false
    },
    pagination: { 
      el: '.swiper-pagination', 
      clickable: true 
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween:10,
    slidesPerView:1,
   
  };


  config3: SwiperOptions = {
    speed:1000,
    autoplay: 
    {
      delay: 2000,
      pauseOnMouseEnter:true,
      disableOnInteraction:false
    },
    loop: false,
    pagination: { 
      el: '.swiper-pagination', 
      clickable: true 
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween:30,
    slidesPerView:3,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
  
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: false,
     
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: false,
      
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: false,
    
      }
    }
  };


  doctorhide(item:any){
    console.log(item.id)
      for(let i=0;i<this.quetionList.length;i++){

          console.log(this.quetionList[i].t)
          if(this.quetionList[i].id==item.id){
           this.quetionList[i].t='true';
          //  alert("Hi");
          //  break;
          }
          else{
            this.quetionList[i].t='false';
          }
       
      
      }

    }
  
    
}
