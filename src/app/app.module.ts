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
import { HostRegistrationPageComponent } from './host-registration-page/host-registration-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CitiesPageComponent,
    LandingPageComponent,
    ThreePartPageComponent,
    BuyerRegistrationPageComponent,
    HomePageComponent,
    HostRegistrationPageComponent,
    ProfilePageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [AuthSessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
