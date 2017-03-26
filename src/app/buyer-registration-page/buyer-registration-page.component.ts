import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthSessionService } from '../auth-session.service';

@Component({
  selector: 'app-buyer-registration-page',
  templateUrl: './buyer-registration-page.component.html',
  styleUrls: ['./buyer-registration-page.component.css']

})
export class BuyerRegistrationPageComponent implements OnInit {

  loginInfo = [];
  signupInfo = {
    buyerInfo: { }
  };
  //captures the details of whats inside our actual form in the HTML


  user: any;
  error: string;

  constructor(private myService: AuthSessionService) { }

  ngOnInit() {
  }



  signUp() {
    console.log(this.signupInfo);
    const thePromise = this.myService.signup(this.signupInfo);
    thePromise.then((userInfo) => {

      this.user = userInfo;
      this.error = null;
      console.log('success');
    });

    thePromise.catch((err) => {
      this.user = null;
      this.error = err;
      console.log(err);

    });
  }


} //End of CLASS
