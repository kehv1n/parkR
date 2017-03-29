import { Component, OnInit } from '@angular/core';
import { SebmGoogleMap, SebmGoogleMapMarker  } from 'angular2-google-maps/core';

import { Markers } from '../markers'
import { AuthSessionService } from '../auth-session.service';

@Component({
  selector: 'app-allspots',
  templateUrl: './allspots.component.html',
  styleUrls: ['./allspots.component.css']
})
export class AllspotsComponent implements OnInit {

  title: string;
  lat: number;
  lng: number;

  constructor() { }

  ngOnInit() {



  }

  

  // markerOne() {
  //   this.title = 'hello';
  //   this.lat = -10.54328;
  //   this.lng = 128.78856;
  // }
  //
  // markerTwo() {
  //   this.title = 'hello';
  //   this.lat = -12.54328;
  //   this.lng = 128.78856;
  // }




}
