import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { CommonserviceService } from 'src/app/services/commonservice.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  requestCallsubmit:any=FormGroup;
  submitted = false;
  message:any;
  data:any;
  parameter:any;
  dataLang='English'

  constructor(private formbuilder:FormBuilder,private http:HttpClient,private langservice:CommonserviceService ) { }

  ngOnInit(): void {
   
    this.langservice.lang.subscribe((res)=>{
      this.dataLang=res;
    })

    this.requestCallsubmit=this.formbuilder.group({
      first_name: ["",Validators.required],
      last_name: [""],
      email: [""],
      phone: [
        "",
        [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
      ],
      message: [""],
    })

  }

  get f() { return this.requestCallsubmit.controls; }


  requestCall(form:any){
    this.submitted = true;
    console.log(form.value);
    this.parameter=form.value;
    if (this.requestCallsubmit.invalid) {
      return;
  }
  
    this.http.post(environment.baseUrl+"mobileaccount/sentMailBycontactUs",this.parameter).subscribe((res)=>{
      this.data=res;
      this.message=this.data.message;

    })

  }

}
