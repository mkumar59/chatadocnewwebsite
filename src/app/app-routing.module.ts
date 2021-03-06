import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './component/home/home.component'
import { HowitworkComponent } from './component/howitwork/howitwork.component';
import { SevicesComponent } from './component/sevices/sevices.component';
import { ResourceComponent } from './component/resource/resource.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import{TermAndConditionComponent} from './component/term-and-condition/term-and-condition.component'
import {PrivacyPolicyComponent} from './component/privacy-policy/privacy-policy.component'
import { GetstartComponent } from './component/getstart/getstart.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'service',component:SevicesComponent},
  {path:'contact-us',component:ContactusComponent},
  {path:'how-it-work',component:HowitworkComponent},
  {path:'resource',component:ResourceComponent},
  {path:'term-and-condition',component:TermAndConditionComponent},
  {path:'privacy-policy',component:PrivacyPolicyComponent},
  {path:'get-started',component:GetstartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, scrollPositionRestoration: 'enabled', scrollOffset: [0, 0],
    // Enable scrolling to anchors
    anchorScrolling: "enabled", initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
