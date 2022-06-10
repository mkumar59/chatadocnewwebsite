import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { CommonserviceService } from 'src/app/services/commonservice.service';

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
  arr1:any=[
    {name:'Manoj'},
    {name:'aanoj'},
    {name:'ranoj'},
    {name:'danoj'},
  ];
  arrList:any=["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
  constructor(private formbuilder:FormBuilder,private http:HttpClient,private langservice:CommonserviceService ) { }

  ngOnInit(): void {
    console.log(this.arrList)
    let uni=this.arrList.filter((i:any,pop:any)=>{
      return this.arrList.indexOf(i)==pop;
    })
    console.log(uni)

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
    let sortString=this.arr1.sort((a:any, b:any) => (a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1));
    console.log(sortString)
  }

  get f() { return this.requestCallsubmit.controls; }


  requestCall(form:any){
    this.submitted = true;
    console.log(form.value);
    this.parameter=form.value;
    if (this.requestCallsubmit.invalid) {
      return;
  }
  
    this.http.post("https://mychatadoc.com/mobileaccount/sentMailBycontactUs",this.parameter).subscribe((res)=>{
      this.data=res;
      this.message=this.data.message;

    })

  }

}
