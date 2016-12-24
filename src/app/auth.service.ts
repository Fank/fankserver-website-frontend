import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {tokenNotExpired, AuthHttp, JwtHelper} from 'angular2-jwt';
import {Observable, Subject} from 'rxjs';

const jwtHelper: JwtHelper = new JwtHelper();

@Injectable()
export class AuthService {
  public jwtExpiration: Subject<void> = new Subject<void>();

  constructor(private authHttp: AuthHttp) { }

  get token() {
    return jwtHelper.decodeToken(localStorage.getItem('id_token'));
  }

  loggedIn() {
    return tokenNotExpired();
  }

  setJWT(jwt: string) {
    if (jwt) {
      localStorage.setItem('id_token', jwt);
      let expireDate = jwtHelper.getTokenExpirationDate(jwt);
      setTimeout(
        () => this.jwtExpiration.next(),
        (expireDate.valueOf() - (new Date().valueOf()) + 2000)
      );
    }
    else {
      localStorage.removeItem('id_token');
    }
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
