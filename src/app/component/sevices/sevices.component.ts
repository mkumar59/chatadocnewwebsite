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

  quetionList1:any=[
    {
      id:1,
      t:'true',
      title:'क्या डिप्रेशन का कोई समाधान है?',
      img:'',
      description:' उत्तर: वैसे डिप्रेशन के लिए सॉल्यूशन शब्द का इस्तेमाल करना गलत होगा। चूंकि अवसाद एक मानसिक विकार है, इसलिए इसे उपचार की आवश्यकता होती है, और उचित उपचार के साथ लोग उल्लेखनीय सुधार करते हैं और लक्षण मुक्त रहते हैं। कृपया तुरंत पेशेवर मदद लें।'
    },
    {
      id:2,
      t:'false',
      title:'सकारात्मक मानसिक स्वास्थ्य बनाए रखने के लिए कुछ सुझाव क्या हैं?',
      description:'उत्तर: वैसे डिप्रेशन के लिए सॉल्यूशन शब्द का इस्तेमाल करना गलत होगा। चूंकि अवसाद एक मानसिक विकार है, इसलिए इसे उपचार की आवश्यकता होती है, और उचित उपचार के साथ लोग उल्लेखनीय सुधार करते हैं और लक्षण मुक्त रहते हैं। कृपया तुरंत पेशेवर मदद लें। '
    },
    {
      id:3,
      t:'false',
      title:'क्या टेली काउंसलिंग सुरक्षित है?',
      description:'उत्तर: वैसे डिप्रेशन के लिए सॉल्यूशन शब्द का इस्तेमाल करना गलत होगा। चूंकि अवसाद एक मानसिक विकार है, इसलिए इसे उपचार की आवश्यकता होती है, और उचित उपचार के साथ लोग उल्लेखनीय सुधार करते हैं और लक्षण मुक्त रहते हैं। कृपया तुरंत पेशेवर मदद लें। '
    },
    {
      id:4,
      t:'false',
      title:'मुझे नींद नहीं आ रही है, काम भी अस्त-व्यस्त है, क्या इलाज ज़रूरी है?',
      description:' उत्तर: वैसे डिप्रेशन के लिए सॉल्यूशन शब्द का इस्तेमाल करना गलत होगा। चूंकि अवसाद एक मानसिक विकार है, इसलिए इसे उपचार की आवश्यकता होती है, और उचित उपचार के साथ लोग उल्लेखनीय सुधार करते हैं और लक्षण मुक्त रहते हैं। कृपया तुरंत पेशेवर मदद लें।'
    },
    {
      id:5,
      t:'false',
      title:'क्या तनाव का स्वास्थ्य पर कोई प्रभाव पड़ता है?',
      description:'उत्तर: हाँ बिल्कुल! मन और शरीर के बीच एक पारस्परिक संबंध है। तनाव से कोर्टिसोल का स्राव होता है जो विभिन्न शारीरिक कार्यों जैसे श्वसन, पाचन, चयापचय आदि पर नकारात्मक प्रभाव डालता है।'
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
    doctorhide1(item:any){
      console.log(item.id)
        for(let i=0;i<this.quetionList1.length;i++){
  
            console.log(this.quetionList1[i].t)
            if(this.quetionList1[i].id==item.id){
             this.quetionList1[i].t='true';
            //  alert("Hi");
            //  break;
            }
            else{
              this.quetionList1[i].t='false';
            }
         
        
        }
  
      }
    
}
