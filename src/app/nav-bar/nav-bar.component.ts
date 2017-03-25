import { Component, OnInit } from '@angular/core';
import { AuthSessionService } from '../auth-session.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loginInfo = {};

  user: any;
  error: string;


  constructor( private myService: AuthSessionService ) { }

  ngOnInit() {
  }

  userLogin() {
    const thePromise = this.myService.login(this.loginInfo);

    thePromise.then((userInfo) => {
      this.user = userInfo;
      this.error = null;
      console.log('success');
    });

    thePromise.catch((err) => {
      this.user = null;
      this.error = err;
    });
  }

}
