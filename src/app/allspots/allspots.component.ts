import { Component, OnInit } from '@angular/core';
import { SebmGoogleMap, SebmGoogleMapMarker  } from 'angular2-google-maps/core';

import { Markers } from '../markers'
import { PostService } from '../post.service';

@Component({
  selector: 'app-allspots',
  templateUrl: './allspots.component.html',
  styleUrls: ['./allspots.component.css']
})
export class AllspotsComponent implements OnInit {

  title: string;
  lat: number;
  lng: number;

  constructor( private postService: PostService) { }

  ngOnInit() {

    this.posts();


  }

  posts() {
    const posts = this.postService.allposts();
    
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
