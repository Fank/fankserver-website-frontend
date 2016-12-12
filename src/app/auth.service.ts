import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { tokenNotExpired, AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private authHttp: AuthHttp) { }

  loggedIn() {
    return tokenNotExpired();
  }

  setJWT(jwt: string) {
    localStorage.setItem('id_token', jwt);
  }

  // get(url: string, data: any) {
  //   return this.authHttp.get();
  // }

  post(url: string, body: Object): Observable<Response> {
    return this.authHttp.post(
      'http://localhost:8080' + url,
      JSON.stringify(body)
    );
  }
}
