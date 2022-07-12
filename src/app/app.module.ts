
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { SevicesComponent } from './component/sevices/sevices.component';
import { HowitworkComponent } from './component/howitwork/howitwork.component';
import { ResourceComponent } from './component/resource/resource.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { HttpClientModule } from '@angular/common/http';
import { PrivacyPolicyComponent } from './component/privacy-policy/privacy-policy.component';
import { TermAndConditionComponent } from './component/term-and-condition/term-and-condition.component';
import { GetstartComponent } from './component/getstart/getstart.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SevicesComponent,
    HowitworkComponent,
    ResourceComponent,
    ContactusComponent,
    HeaderComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    TermAndConditionComponent,
    GetstartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxUsefulSwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
