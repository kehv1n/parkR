import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitiesPageComponent } from './cities-page/cities-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BuyerRegistrationPageComponent } from './buyer-registration-page/buyer-registration-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppComponent } from './app.component';
import { HostRegistrationPageComponent } from './host-registration-page/host-registration-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { NewSpotComponent } from './new-spot/new-spot.component';
import { AllspotsComponent } from './allspots/allspots.component';

const routes: Routes = [
  {
    //When you visit '/' it will be using the
    //phone list component
    path: '',
    component: HomePageComponent
  },
  {
    path: 'signup',
    component: BuyerRegistrationPageComponent
  },
  {
    path: 'cities',
    component: CitiesPageComponent
  },
  {
    path: 'hostRegistration',
    component: HostRegistrationPageComponent
  },
  {
    path: 'userProfile',
    component: ProfilePageComponent
  },
  {
    path: 'newPost',
    component: NewSpotComponent
  },
  {
    path: 'posts',
    component: AllspotsComponent
  },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
