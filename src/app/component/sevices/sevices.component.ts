import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { CommonserviceService } from 'src/app/services/commonservice.service';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sevices',
  templateUrl: './sevices.component.html',
  styleUrls: ['./sevices.component.css'],
})
export class SevicesComponent implements OnInit {
  show: any = 'Is there any solution for Depression?';

  datamessage: any = 'English';
  quetionList: any = [
    {
      id: 1,
      t: 'true',
      title: 'Is there any solution for Depression?',
      img: '',
      description:
        ' Answer : Well it will be wrong to use the word solution for Depression. Since Depression is a psychiatric disorder it needs treatment, and with proper treatment people mark remarkable improvements and maintain symptom free. Please seek professional help immediately. ',
    },
    {
      id: 2,
      t: 'false',
      title:
        'What are some tips for maintaining a positive mental well being? ',
      description:
        'Answer : There are no universal tips applicable for everyone to maintain a positive mental health. But certain lifestyle aspects such as maintaining good sleep - wake cycle, adequate diet, regular physical activities, engaging in meaningful activities, adequate social support. ',
    },
    {
      id: 3,
      t: 'false',
      title: ' Does stress have any impact on health?',
      description:
        'Answer : Yes certainly! There is a mutual connection between mind and body. Stress leads to secreation of cortisol which negatively impacts various bodily functions - respiration, digestation, metabolism etc.',
    },
    {
      id: 4,
      t: 'false',
      title: 'Is tele counselling safe ?',
      description:
        ' Answer : Tele counselling is absolutely safe in terms of encryption and confidentiality. The professional ethical measures are not reduced or compromised while taking sessions on an online platform.',
    },
    {
      id: 5,
      t: 'false',
      title:
        'I am not able to sleep, work is at mess too, is therapy necessary?',
      description:
        'Answer : Yes! You can take therapy as and when you feel like- even if you are at slightest of difficulty or emotionally distress. There is no harm in taking therapy even if you just need a space to vent out or share your difficult feelings.',
    },
  ];

  quetionList1: any = [
    {
      id: 1,
      t: 'true',
      title: 'क्या डिप्रेशन का कोई समाधान है?',
      img: '',
      description:
        ' उत्तर: वैसे डिप्रेशन के लिए सॉल्यूशन शब्द का इस्तेमाल करना गलत होगा। चूंकि अवसाद एक मानसिक विकार है, इसलिए इसे उपचार की आवश्यकता होती है, और उचित उपचार के साथ लोग उल्लेखनीय सुधार करते हैं और लक्षण मुक्त रहते हैं। कृपया तुरंत पेशेवर मदद लें',
    },
    {
      id: 2,
      t: 'false',
      title: 'सकारात्मक मानसिक स्वास्थ्य बनाए रखने के लिए कुछ सुझाव क्या हैं?',
      description:
        'उत्तर : सकारात्मक मानसिक स्वास्थ्य बनाए रखने के लिए सभी के लिए कोई सार्वभौमिक सुझाव लागू नहीं हैं। लेकिन जीवनशैली के कुछ पहलू जैसे अच्छी नींद बनाए रखना - जागने का चक्र, पर्याप्त आहार, नियमित शारीरिक गतिविधियाँ, सार्थक गतिविधियों में संलग्न होना, पर्याप्त सामाजिक समर्थन ',
    },
    {
      id: 3,
      t: 'false',
      title: 'क्या टेली काउंसलिंग सुरक्षित है?',
      description:
        'उत्तर: हाँ बिल्कुल! मन और शरीर के बीच एक पारस्परिक संबंध है। तनाव से कोर्टिसोल का स्राव होता है जो विभिन्न शारीरिक कार्यों - श्वसन, पाचन, चयापचय आदि पर नकारात्मक प्रभाव डालता है ',
    },
    {
      id: 4,
      t: 'false',
      title:
        'मुझे नींद नहीं आ रही है, काम भी अस्त-व्यस्त है, क्या इलाज ज़रूरी है?',
      description:
        ' उत्तर: एन्क्रिप्शन और गोपनीयता की दृष्टि से टेली काउंसलिंग बिल्कुल सुरक्षित है। ऑनलाइन प्लेटफॉर्म पर सत्र लेते समय पेशेवर नैतिक उपायों को कम या समझौता नहीं किया जाता है',
    },
    {
      id: 5,
      t: 'false',
      title: 'क्या तनाव का स्वास्थ्य पर कोई प्रभाव पड़ता है?',
      description:
        'उत्तर: हाँ! जब भी आपका मन करे आप थेरेपी ले सकते हैं- भले ही आप थोड़ी सी भी कठिनाई या भावनात्मक रूप से परेशान हों। थेरेपी लेने में कोई बुराई नहीं है, भले ही आपको बाहर निकलने या अपनी मुश्किल भावनाओं को साझा करने के लिए जगह की आवश्यकता हो',
    },
  ];
  constructor(
    public langaugeChange: CommonserviceService,
    private route: Router,
    private title: Title,
    private meta: Meta
  ) {
    this.langaugeChange.lang.subscribe((res: any) => {
      this.datamessage = res;
      console.log(this.datamessage);
    });
    this.title.setTitle(
      'Chat-a-Doc | Online Counseling & Therapy with A Licensed, Board Certified Therapist'
    );
    this.meta.updateTag(
      {
        name: 'keywords',
        content:
          'online mental health counseling, online mental health professional, counseling for anxiety disorder, sleep disorder, family counselors, depression therapist, psychologist therapist, mental health therapist, therapy for anxiety, online psychological counseling, mental health app, counseling app, therapy app',
      },
     );
    this.meta.updateTag({
      name: 'description',content:'Instantly book a live counseling or therapy session at any time that’s convenient for you. Connect from any device and any time. Counseling for stress, relationship, anxiety, depression, sleep issues, career, confidence, bullying, work-place stress, difficultly in coping, grief and more.',
    });

    this.meta.updateTag({
      property: 'og:title',content:'Chat-a-Doc | Online Counseling & Therapy with A Licensed, Board Certified Therapist',
    });

    this.meta.updateTag({
      property: 'og:image',
      content: 'https://chatadoc.com/assets/img/home/logo.png',
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://chatadoc.com/service',
    });
  }

  ngOnInit(): void {}
  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 10,
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    loop: true,
  };

  config2: SwiperOptions = {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 10,
    slidesPerView: 1,
  };

  config3: SwiperOptions = {
    speed: 1000,
    autoplay: {
      delay: 2000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    slidesPerView: 3,
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
      },
    },
  };

  doctorhide(item: any) {
    console.log(item.id);
    for (let i = 0; i < this.quetionList.length; i++) {
      console.log(this.quetionList[i].t);
      if (this.quetionList[i].id == item.id) {
        this.quetionList[i].t = 'true';
        //  alert("Hi");
        //  break;
      } else {
        this.quetionList[i].t = 'false';
      }
    }
  }
  doctorhide1(item: any) {
    console.log(item.id);
    for (let i = 0; i < this.quetionList1.length; i++) {
      console.log(this.quetionList1[i].t);
      if (this.quetionList1[i].id == item.id) {
        this.quetionList1[i].t = 'true';
        //  alert("Hi");
        //  break;
      } else {
        this.quetionList1[i].t = 'false';
      }
    }
  }
}
