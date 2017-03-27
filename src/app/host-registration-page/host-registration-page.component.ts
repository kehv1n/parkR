import { Component, OnInit } from '@angular/core';
import { AuthSessionService } from '../auth-session.service';

@Component({
  selector: 'app-host-registration-page',
  templateUrl: './host-registration-page.component.html',
  styleUrls: ['./host-registration-page.component.css']
})
export class HostRegistrationPageComponent implements OnInit {

  signupInfo = {
    sellerInfo: { }
  };

  user: any;
  error: string;

  ngOnInit() {
  }

  constructor( private myService: AuthSessionService ) { }



  signUp() {
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

} ///end of class
