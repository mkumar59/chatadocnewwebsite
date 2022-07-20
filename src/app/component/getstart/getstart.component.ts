import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Meta, Title } from '@angular/platform-browser';
import { CommonserviceService } from 'src/app/services/commonservice.service';
declare var $: any;
@Component({
  selector: 'app-getstart',
  templateUrl: './getstart.component.html',
  styleUrls: ['./getstart.component.css'],
})
export class GetstartComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private modalService: NgbModal,
    private meta:Meta,
    private title:Title,
    private langaugeChange:CommonserviceService
  ) {
    this.title.setTitle('Chat-a-Doc | Get Started With Online Mental Health Counseling and Therapy');
    this.meta.updateTag(
      { name: 'keywords', content: 'mental health app, counseling app, therapy app, online counsellor and therapist, online psychologist, online psychiatrist, online mental health counseling, counseling for anxiety disorder, sleep disorder, family counselors, depression therapist, psychologist therapist, mental health therapist, therapy for anxiety, online psychological counseling.' },
     
    
    ); 
    this.meta.updateTag(
      { name: 'description', content:'Fill in the following fields to so that we can get you the best match of licensed, accredited, and board-certified providers who fits your needs and preferences. Online counseling & therapy for stress, depression, anxiety, sleep issues, relationships, trauma, grief, and more.'}
    ); 
    this.langaugeChange.lang.subscribe((res)=>{
      this.dataLang=res;
  });
  }
  formData: any;
  submitted = false;
  messageShow: any;
  loaderShow: any = false;
  closeResult: string = '';
  dataLang='English';
  ngOnInit(): void {
    this.formData = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: [''],
      email: ['', [Validators.required, Validators.email]],
      phone_no: [
        '',
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      city: ['', Validators.required],
      occupation: ['', Validators.required],
      md_history: ['', Validators.required],
      face_difficulty: ['', Validators.required],
      know_chatadoc: ['', Validators.required],
      looking_for_chatadoc: ['', Validators.required],
    });
  }
  get f() {
    return this.formData.controls;
  }

  formSubmit(data: any, mymodal: any) {
    // this.open(mymodal);
    this.submitted = true;
    if (this.formData.invalid) {
      return;
    }
    console.log(data.value);
    this.loaderShow = true;

    this.http.post('https://chatadocuat.com/mobilepatient/getStartedForm',data.value).subscribe((res)=>{
        console.log(res);
        this.messageShow=res;
        this.messageShow=this.messageShow;
        if(this.messageShow.success==1){
          this.open(mymodal);
          this.loaderShow = false;
        }
       
        this.formData.reset();
        this.submitted =false;
      })
  }

  open(content: any) {
    this.modalService
      .open(content, { modalDialogClass: 'dark-modal',ariaLabelledBy: 'modal-basic-title',size: 'lg',centered: true })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
