import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthSessionService {
  BASE_URL='http://localhost:3000'
  constructor(private myHttp: Http) { }

  signup(user) {
   const theOriginalPromise = this.myHttp.post(this.BASE_URL+'/signup', user).toPromise();

   const theParsedPromise = theOriginalPromise.then((result) => {
     return result.json();
   });

   return theParsedPromise;
 }

  login(credentials) {
     const theOriginalPromise = this.myHttp.post(this.BASE_URL+'/login', credentials).toPromise();

     const theParsedPromise = theOriginalPromise.then((result) => {
       return result.json();
     });

     return theParsedPromise;
   }


  logout(){
    return this.myHttp.post(this.BASE_URL+'/logout', { })
    .toPromise()
    .then(result => result.json());

  }

  isLoggedIn() {
    return this.myHttp.get(this.BASE_URL+'/loggedin')
    .toPromise()
    .then(result => result.json());
  }

  getPrivate() {
    return this.myHttp.get(this.BASE_URL+'/private')
    .toPromise()
    .then(result => result.json());
  }
}
