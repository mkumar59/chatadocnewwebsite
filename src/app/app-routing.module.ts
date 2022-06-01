import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './component/home/home.component'
import { HowitworkComponent } from './component/howitwork/howitwork.component';
import { SevicesComponent } from './component/sevices/sevices.component';
import { ResourceComponent } from './component/resource/resource.component';
import { ContactusComponent } from './component/contactus/contactus.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'service',component:SevicesComponent},
  {path:'contact-us',component:ContactusComponent},
  {path:'how-it-work',component:HowitworkComponent},
  {path:'resource',component:ResourceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
