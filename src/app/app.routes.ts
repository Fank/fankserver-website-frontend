import {Routes} from '@angular/router';

import {IndexComponent} from './index/index.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from "./logout/logout.component";
import {ProfileComponent} from "./profile/profile.component";

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'profile', component: ProfileComponent },
];
