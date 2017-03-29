import { Component, OnInit } from '@angular/core';
import { SebmGoogleMap, SebmGoogleMapMarker, SebmGoogleMapInfoWindow  } from 'angular2-google-maps/core';

import { PostService } from '../post.service';

@Component({
  selector: 'app-allspots',
  templateUrl: './allspots.component.html',
  styleUrls: ['./allspots.component.css']
})
export class AllspotsComponent implements OnInit {

  title: string;
  // Hardcoded to ironhacks "relative" position
  // Should be made dynamic so that all users have it to their automatic loc
  lat: Number = 25.766204;
  lng: Number =  -80.19609;
  zoom: Number = 16;
  content: String = 'hello';

  postList: Array<Object> = [];
  errorMessage: String = '';


  constructor( private postService: PostService) { }

  ngOnInit() {

    this.posts();


  }

  posts() {
    this.postService.allposts()
    .then((postList) => {
      this.postList = postList;
      console.log(postList);
    })
    .catch((err) => {
          this.errorMessage = 'There was an error. Try again Later.';
    });


  }

} // END OF CLASS
