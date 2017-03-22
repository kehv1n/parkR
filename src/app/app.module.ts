import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
<<<<<<< HEAD
import { CitiesPageComponent } from './cities-page/cities-page.component';
=======
import { LandingPageComponent } from './landing-page/landing-page.component';
>>>>>>> 3ca3a43a61e176ea09b064405f9007c868fa4878

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
<<<<<<< HEAD
    CitiesPageComponent
=======
    LandingPageComponent
>>>>>>> 3ca3a43a61e176ea09b064405f9007c868fa4878
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
