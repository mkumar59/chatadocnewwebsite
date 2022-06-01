import { Component, OnChanges, OnInit,AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit,OnChanges, AfterContentInit{

  constructor() { }

  ngOnInit(): void {
    console.log("intine")
  }
  ngOnChanges(){
console.log("changes")
  }
  ngAfterContentInit() {
    console.log("hfsdfhgs")
  }
}
