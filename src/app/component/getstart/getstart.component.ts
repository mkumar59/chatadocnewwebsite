import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-getstart',
  templateUrl: './getstart.component.html',
  styleUrls: ['./getstart.component.css']
})
export class GetstartComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  formData:any;
  submitted = false;
  ngOnInit(): void {
    
    this.formData=this.fb.group({
      first_name:['',Validators.required],
      last_name:['',Validators.required],
      email:['', [Validators.email]],
      phone_no:[
        "",
        [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
      ],
      age:['',Validators.required],
      gender:['',Validators.required],
      city:['',Validators.required],
      md_history:['',Validators.required],
      face_difculty:['',Validators.required],
      know_chatadoc:['',Validators.required],
      looking_for_chatadoc:['',Validators.required],

    });

    

    var dateUTC = new Date();
    var dateUTC1 = dateUTC.getTime();
    console.log(dateUTC1) 
    var dateIST = new Date(dateUTC);
    console.log(dateIST)
    
    //date shifting for IST timezone (+5 hours and 30 minutes)
    dateIST.setHours(dateIST.getHours() + 5); 
    dateIST.setMinutes(dateIST.getMinutes() + 30);
    console.log(dateIST)
    
  }
  get f() { return this.formData.controls; }

  formSubmit(data:any){
    this.submitted = true;
    // console.log(form.value);
    // this.parameter=form.value;
    // if (this.formData.invalid) {
    //   return;
  }
}

