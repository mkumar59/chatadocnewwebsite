import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from 'src/app/services/commonservice.service';

@Component({
  selector: 'app-howitwork',
  templateUrl: './howitwork.component.html',
  styleUrls: ['./howitwork.component.css']
})
export class HowitworkComponent implements OnInit {
 dataLang='English'
  constructor(private langservice:CommonserviceService ) { 
    this.langservice.lang.subscribe((res)=>{
      this.dataLang=res;
    })
  }

  ngOnInit(): void {
  }

}
