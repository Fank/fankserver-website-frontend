import { Component } from '@angular/core';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(public auth: AuthService) { }

  login() {
    this.auth.post('/auth/login', {
      username: 'fank12342',
      password: 'gameserver'
    }).subscribe(
      (res) => console.log(res),
      (err) => console.error(err)
    );
  }
}
