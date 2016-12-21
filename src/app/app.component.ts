import {Component, ChangeDetectorRef} from '@angular/core';

import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  constructor(public auth: AuthService, private cd: ChangeDetectorRef) {
    this.auth.jwtExpiration.subscribe(
      () => {
        console.log('change');
        this.cd.detectChanges();
      }
    );
  }

  login() {
    this.auth.post('/auth/login', {
      username: 'fank12342',
      password: 'gameserver'
    }).subscribe(
      (res) => {
        this.auth.setJWT(res.text());
      },
      (err) => console.error(err)
    );
  }

  logout() {
    this.auth.setJWT('');
  }
}
