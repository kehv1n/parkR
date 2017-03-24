import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

////////////// Components ///////////////////////
import { CitiesPageComponent } from './cities-page/cities-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ThreePartPageComponent } from './three-part-page/three-part-page.component';
import { BuyerRegistrationPageComponent } from './buyer-registration-page/buyer-registration-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ModalModule } from 'ng2-bootstrap/modal';

////////////// Services ///////////////////////

import { AuthSessionService } from './auth-session.service';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CitiesPageComponent,
    LandingPageComponent,
    ThreePartPageComponent,
    BuyerRegistrationPageComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ModalModule
  ],
  providers: [AuthSessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
