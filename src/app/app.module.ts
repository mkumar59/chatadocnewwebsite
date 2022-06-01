
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
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
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SevicesComponent,
    HowitworkComponent,
    ResourceComponent,
    ContactusComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxUsefulSwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
