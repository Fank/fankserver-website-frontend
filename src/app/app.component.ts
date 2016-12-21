import {Component, ChangeDetectorRef} from '@angular/core';

import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public auth: AuthService, private cd: ChangeDetectorRef) {
    this.auth.jwtExpiration.subscribe(
      () => {
        console.log('change');
        this.cd.detectChanges();
      }
    );
  }

  // logout() {
  //   this.auth.setJWT('');
  // }
}
