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
  signupInfo = {};
  //captures the details of whats inside our actual form in the HTML

  formInfo = {
    fullName: '',
    email: '',
    password: '',
    encryptedPassword: ''
  };


  user: any;
  error: string;

  constructor(private myService: AuthSessionService) { }

  ngOnInit() {
  }



  newBuyer() {
    const thePromise = this.myService.signup(this.formInfo);

    thePromise.then((formInfo) => {
      this.user = formInfo;
      this.error = null;

    });

    thePromise.catch((err) => {
      this.user = null;
      this.error = err;
      console.log(err);

    });
    console.log(this.formInfo);
  }


} //End of CLASS
