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
  ngOnInit(): void {
    this.formData=this.fb.group({
      first_name:['',Validators.required],
      last_name:['',Validators.required],
      email:['',Validators.required],
      phone_no:['',Validators.required],
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

  formSubmit(data:any){
    console.log("submit",data.value)
  }
}
