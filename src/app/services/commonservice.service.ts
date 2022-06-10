import { Injectable } from '@angular/core';
import { Subject,BehaviorSubject } from 'rxjs';  
@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
  lang= new BehaviorSubject("English");
  constructor() { 
   console.log(this.lang) 
  }



}
