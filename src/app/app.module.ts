import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AUTH_PROVIDERS, AuthConfig, AuthHttp } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';

import { AuthService } from './auth.service';

import { routes } from './app.routes';
import { ContactsComponent } from './header/contacts/contacts.component';
import { NavbarComponent } from './header/navbar/navbar.component';

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    headerPrefix: 'TOKA',
    noJwtError: true,
    globalHeaders: [{'Accept': 'application/json'}],
    tokenGetter: (() => localStorage.getItem('id_token')),
  }), http);
}

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ContactsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de-DE'},
    AUTH_PROVIDERS,
    AuthService,
    {provide: AuthHttp, useFactory: getAuthHttp, deps: [Http]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
