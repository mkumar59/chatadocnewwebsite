import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { CommonserviceService } from 'src/app/services/commonservice.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  loaderShow=false
  registerForm:any= FormGroup;
  submitted = false;
  parameter:any;
  showMessage:any;
  data:any;
  dataLang='English';
  constructor(private formBuilder: FormBuilder,private http:HttpClient,private langaugeChange:CommonserviceService,private meta:Meta,private title:Title) {
    
    this.langaugeChange.lang.subscribe((res)=>{
        this.dataLang=res;
    });
    this.title.setTitle('Chat-a-Doc | Contact Us, We Are Just A Click Away');
    this.meta.updateTag(
      { name: 'keywords', content: 'mental health app, counseling app, therapy app, online counsellor and therapist, online psychologist, online psychiatrist, online mental health counseling, counseling for anxiety disorder, sleep disorder, family counselors, depression therapist, psychologist therapist, mental health therapist, therapy for anxiety, online psychological counseling.' },

      );
    this.meta.updateTag(
      { name: 'description', content:'mental health app, counseling app, therapy app, online counsellor and therapist, online psychologist, online psychiatrist, online mental health counseling, counseling for anxiety disorder, sleep disorder, family counselors, depression therapist, psychologist therapist, mental health therapist, therapy for anxiety, online psychological counseling'}
    );

   }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      first_name: ["",Validators.required],
      last_name: ["",Validators.required],
      phone: [
        "",
        [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
      ],
      email: ['', [Validators.email]],
      message: [''],
     
  });
    
  }

  get f() { return this.registerForm.controls; }

  formSubmit(form:any){
    
    this.submitted = true;
    this.parameter=form.value
    // stop here if form is invalid
   
    if (this.registerForm.invalid) {
        return;
    }
    this.loaderShow=true;
    this.http.post(environment.baseUrl+'mobileaccount/sentMailBycontactUs',this.parameter).subscribe((res)=>{
    this.data=res;
    this.showMessage=this.data.message;
    console.log(this.showMessage)
    this.loaderShow=false;
    console.log(res)
    this.registerForm = this.formBuilder.group({
      first_name: [""],
      last_name: [""],
      email: [""],
      phone: [""],
      message: [""],
    });

    })
    console.log(form.value);
  }
  // https://chatadocuat.com/

}
