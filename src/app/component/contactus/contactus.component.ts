import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor(private formBuilder: FormBuilder,private http:HttpClient) { }

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
    this.http.post('https://mychatadoc.com/mobileaccount/sentMailBycontactUs',this.parameter).subscribe((res)=>{
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
