import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { CitiesPageComponent } from './cities-page/cities-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ThreePartPageComponent } from './three-part-page/three-part-page.component';
import { BuyerRegistrationPageComponent } from './buyer-registration-page/buyer-registration-page.component';
import { HomePageComponent } from './home-page/home-page.component';



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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
