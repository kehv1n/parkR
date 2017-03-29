import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class PostService {
  BASE_URL='http://localhost:3000'

  constructor(private myHttp: Http) { }

  allposts() {
    return this.myHttp.get(this.BASE_URL+'/posts')
    .toPromise()
    .then(result => result.json());
    }

  newpost(post) {
    const theOriginalPromise = this.myHttp.post(this.BASE_URL+'/newPost', post).toPromise();

    const theParsedPromise = theOriginalPromise.then((result) => {
      return result.json();
    });

    return theParsedPromise;
  }

}
