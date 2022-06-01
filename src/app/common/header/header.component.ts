
import { Component, OnInit,HostListener,Input } from '@angular/core';
import {Router} from "@angular/router";
declare var $: any;
import {FormGroup,FormBuilder,Validators,  } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { timeout } from 'rxjs/operators';
import { CommonserviceService } from 'src/app/services/commonservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  datamessage='English';
  constructor(public langaugeChange:CommonserviceService) { 
    // this.langaugeChange.lang.subscribe((res: any) => {  
    //   this.datamessage = res;  
    //   console.log(this.datamessage)
    // })
  }

  ngOnInit(): void {
    window.onscroll = function() {myFunction()};
    var header = document.getElementById("myHeader")!;
    var sticky = header?.offsetTop;
    //console.log(sticky)
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header?.classList.add("sticky");
       // console.log(sticky)
      } else {
        header?.classList.remove("sticky");
      }
    }

    
}

  
  openNav() {
    var mynav=document.getElementById("mySidenav")!;
    mynav.style.width = "250px"
  }
  
 closeNav() {
    var mynavclose=document.getElementById("mySidenav")!;
       mynavclose.style.width = "0"
  }

  dataChangeLanguage(data:any){
    console.log("data",data)
    this.dataChangeLanguage=data
    console.log(this.dataChangeLanguage)
    var ddd=this.langaugeChange.lang.next(this.dataChangeLanguage); 
    console.log(",,,,,",ddd)

  }

  dataChangeLanguageHindi(data:any){
    console.log("data",data)
    this.dataChangeLanguage=data
    console.log(this.dataChangeLanguage)
    var ddd=this.langaugeChange.lang.next(this.dataChangeLanguage); 
    console.log(",,,,,",ddd)
  }

  

}
