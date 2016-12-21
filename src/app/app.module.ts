import {BrowserModule} from '@angular/platform-browser';
import {NgModule, LOCALE_ID} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule, Http} from '@angular/http';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AUTH_PROVIDERS, AuthConfig, AuthHttp} from 'angular2-jwt';

import {AppComponent} from './app.component';
import {IndexComponent} from './index/index.component';
import {AuthService} from './auth.service';
import {routes} from './app.routes';
import {LoginComponent} from './login/login.component';

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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot()
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
