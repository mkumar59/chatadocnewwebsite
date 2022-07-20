import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from 'src/app/services/commonservice.service';
import { Meta,Title } from '@angular/platform-browser';
@Component({
  selector: 'app-howitwork',
  templateUrl: './howitwork.component.html',
  styleUrls: ['./howitwork.component.css']
})
export class HowitworkComponent implements OnInit {
 dataLang='English'
  constructor(private langservice:CommonserviceService,private meta:Meta,private title:Title ) { 
    this.langservice.lang.subscribe((res)=>{
      this.dataLang=res;
    });

    this.title.setTitle('Chat-a-Doc | Mental Health App – Professional Therapy With A Licensed Expert');

    this.meta.updateTag(
      { name: 'description', content:'Download Chat-a-Doc app, register yourself, choose your desired psychologist or psychiatrist and book a session at any time that’s convenient to you. Your sessions are 100% confidential and data is completely safe & secured.'}
    );

    this.meta.updateTag(
      { name: 'keywords', content: 'mental health app, counseling app, therapy app, online counsellor and therapist, online psychologist, online psychiatrist, online mental health counseling, counseling for anxiety disorder, sleep disorder, family counselors, depression therapist, psychologist therapist, mental health therapist, therapy for anxiety, online psychological counseling.' }

    );


    this.meta.updateTag({property: 'og:title', content: 'Chat-a-Doc | Online Counseling & Therapy with A Licensed, Board Certified Therapist,This is how it work page'});
    

  }

  ngOnInit(): void {
  }

}
