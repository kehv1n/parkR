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
import { HostRegistrationPageComponent } from './host-registration-page/host-registration-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { NewSpotComponent } from './new-spot/new-spot.component';
import { AllspotsComponent } from './allspots/allspots.component';
import { AgmCoreModule } from 'angular2-google-maps/core';

////////////// Services ///////////////////////

import { AuthSessionService } from './auth-session.service';
import { PostService } from './post.service';



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
    NewSpotComponent,
    AllspotsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBBQAFfeUvYQf5gcWvaGPhHX6POAGIOwi4'
    })
  ],
  providers: [
    AuthSessionService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
