import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from 'src/app/services/commonservice.service';
import { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listUni=0;
  listLast=6;
  viewMoreBtn=true;
  viewLessBtn=false;
  showImgmedician:any;
  dataLang="English"
  medicianList:any=[
    {id:1,dotimg:'assets/img/treatment/circlewithbg.png',b:'true',imgUrl:'assets/img/treatment/Depression.webp',label:'Depression',description:'Are you Feeling upset or experiencing spells of low mood, invariably for most part of the day, feeling exhausted, losing intrerest in doing things?'},
    {id:2,dotimg:'assets/img/treatment/circlewithnotbg.png',b:'false',imgUrl:'assets/img/treatment/Anxiety.webp',label:'Anxiety',description:'Do you overthink a lot, or worry that bad things might happen to you or someone close to you, always negative thoughts about future?'},
    {id:3,dotimg:'assets/img/treatment/circlewithnotbg.png',b:'false',imgUrl:'assets/img/treatment/Fear.webp',label:'Fear',description:'Do constantly fear about things which are otherwise not a potential treat?'},
    {id:4,dotimg:'assets/img/treatment/circlewithnotbg.png',b:'false',imgUrl:'assets/img/treatment/SleepIssues.webp',label:'Sleep Issues',description:'Are you struggling to fall asleep, or waking up in the middle of the night and not able to sleep again or not able to sleep at all?'},
    {id:5,dotimg:'assets/img/treatment/circlewithnotbg.png',b:'false',imgUrl:'assets/img/treatment/CoupleCounselling.webp',label:'Couple Counselling',description:'Are you fighting with your partner more than usual? Are you finding it difficult to come in common terms with your partner?'},
    {id:6,dotimg:'assets/img/treatment/circlewithnotbg.png',b:'false',imgUrl:'assets/img/treatment/CareerCounselling.webp',label:'Career counselling',description:'Are you struggling with yourself or your parents about which career pathway to choose?'},
    {id:7,dotimg:'assets/img/treatment/circlewithnotbg.png',b:'false',imgUrl:'assets/img/treatment/AdolescentsMentalHealth.webp',label:'Adolescents Mental Health',description:'Turbulent teens? Adolescents think My parents do not understand me Parents think  my child is growing up and doent lsiten to me anymore'},
    {id:8,dotimg:'assets/img/treatment/circlewithnotbg.png',b:'false',imgUrl:'assets/img/treatment/WomenAndMenMentalHealth.webp',label:'Women and Men Mental health',description:'Do you feel the burnout of your day- to day schedule? Irrespective of gender, men and women often expeience stress and burnout out of their routine work and monotonos schedule.'},
    {id:9,dotimg:'assets/img/treatment/circlewithnotbg.png',b:'false',imgUrl:'assets/img/treatment/ParentalCounselling.webp',label:'Parental Counselling',description:'Do you get overwhelmed at times raising your child? Parental meantal health and well being often require a lot of attention'},
    {id:10,dotimg:'assets/img/treatment/circlewithnotbg.png',b:'false',imgUrl:'assets/img/treatment/GriefSupport.webp',label:'Grief Support',description:'Losing a loved one is difficult and griefing takes time . Seeking support from a mental health expert is essentilal.'},
    {id:11,dotimg:'assets/img/treatment/circlewithnotbg.png',b:'false',imgUrl:'assets/img/treatment/PsychologicalFirstAid.webp',label:'Psychological First Aid',description:'Immediate humane intervention after a Trauma! Trauma is delibiltating condition and mental health assistance is essential if you have been through a trauma'},
    {id:12,dotimg:'assets/img/treatment/circlewithnotbg.png',b:'false',imgUrl:'assets/img/treatment/DomesticViolence.webp',label:'Domestic Violence',description:'Have you been a victim of domestic violence of any sort- emotional and physical? We are here to help you'},
    {id:13,dotimg:'assets/img/treatment/circlewithnotbg.png',b:'false',imgUrl:'assets/img/treatment/Bullying.webp',label:'Bullying',description:'Making fun of others, name calling at schools, college, or even work place takes a toll on mental health'},
    {id:14,dotimg:'assets/img/treatment/circlewithnotbg.png',b:'false',imgUrl:'assets/img/treatment/LowInConfidence.webp',label:'Low in confidence',description:'Negative sense of self, enviornmental situation often lowers our confidence, which is likely to impact our efficiency and the way we see ourselves'},
    {id:15,dotimg:'assets/img/treatment/circlewithnotbg.png',b:'false',imgUrl:'assets/img/treatment/WorkPlaceStress.webp',label:'Work Place stress',description:'Are you struggling with occupational stress, or difficult to maintain a work-life balance, or decision to choose an adequate job?'},
    {id:16,dotimg:'assets/img/treatment/circlewithnotbg.png',b:'false',imgUrl:'assets/img/treatment/DifficultyInCoping.webp',label:'Difficulty in coping',description:'Are you struggling to cope with a difficult situation or person or resort to smoking, alcohol abuse or watching inappropriate sexual content when stressed out?'}
  ]
  constructor(private langservice:CommonserviceService) {
    this.langservice.lang.subscribe((res: any) => {  
      this.dataLang = res;
      console.log(this.dataLang);
    })
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
    autoplay: 
    {
      delay: 2000,
      pauseOnMouseEnter:true,
      disableOnInteraction:false
    },
    loop:false,
    spaceBetween:10,
    // slidesPerView: 6,
    breakpoints: {
      1024: {
        slidesPerView:6,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        // slidesPerColumn: 3,
      },
      // 640: {
      //   slidesPerView: 2,
      //   spaceBetween: 20,
      // },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
      }
    }
  };


config2:  SwiperOptions = {

  // pagination: { el: '.swiper-pagination', clickable: true },
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev'
  // },
  // fadeEffect: { crossFade: true },
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
    pauseOnMouseEnter:true,
    disableOnInteraction:false
  },
  loop: true,
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    }
  }

};

config3:  SwiperOptions = {

  // fadeEffect: { crossFade: true },
  // effect: "fade",
  speed:1000,
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
  autoplay: 
  {
    delay: 2000,
    pauseOnMouseEnter:true,
    disableOnInteraction:false
  },
  loop: true,
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,

    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
   
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
  
    }
  }

};
  ngOnInit(): void {
    this.medicianListFun(this.medicianList[0])
  }

  medicianListFun(item:any){
    console.log("callllll",item.id);
    for(let i=0;i<this.medicianList.length;i++){
      if(this.medicianList[i].id==item.id){
       this.medicianList[i].b='true';
       this.medicianList[i].dotimg='assets/img/treatment/circlewithbg.png'
       console.log("kkkkk",this.medicianList[i].dotimg)
       this.showImgmedician=item.imgUrl
      }
      else{
        this.medicianList[i].b='false';
        this.medicianList[i].dotimg='assets/img/treatment/circlewithnotbg.png'
        // this.medicianList[i].dotimg=item.dotimg;
        // console.log("elsepart",this.medicianList[i].dotimg)
      }
      
  }

  console.log(this.medicianList);

  }
  
  viewMore=()=>{
    console.log('click');
    this.listLast=18
    this.viewLessBtn=true;
    this.viewMoreBtn=false;

  }
  lessMore=()=>{
    this.listLast=6;
    this.viewMoreBtn=true;
    this.viewLessBtn=false;
  }
  

}
