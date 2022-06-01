import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';  
@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
  lang=new Subject();
  constructor() { 
   console.log(this.lang) 
  }



}
