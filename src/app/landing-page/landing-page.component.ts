//imports
import { Component, OnInit } from '@angular/core';
import { AuthSessionService } from '../auth-session.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {


  constructor( public AuthService: AuthSessionService ) { }

  //New User

  OurUser: any;


  ngOnInit() {
  }
  
  //sign's up the user with service
  signUpUser() { 
    console.log(this.OurUser);
    this.AuthService.signup(this.OurUser);
  }




} //End of CLASS
