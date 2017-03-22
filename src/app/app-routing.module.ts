import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitiesPageComponent } from './cities-page/cities-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    //When you visit '/' it will be using the
    //phone list component
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'cities',
    component: CitiesPageComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
