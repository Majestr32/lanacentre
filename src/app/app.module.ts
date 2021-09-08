import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { AgmCoreModule } from '@agm/core';
import { Loader } from '@googlemaps/js-api-loader';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ServicesComponent } from './services/services.component';
import { DoctorsComponent } from './doctors/doctors.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    FooterComponent,
    ServicesComponent,
    DoctorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAo28QNlDAdLBGkOYV0xI-j5GQJeRST1IM'
    }),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
