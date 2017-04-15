import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule, LOCALE_ID} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import {RouterModule} from '@angular/router';
import {MaterialModule, MdIconRegistry} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

import {AppComponent} from './app.component';
import {IndexComponent} from './index/index.component';
import {AuthService} from './auth.service';
import {routes} from './app.routes';
import {LoginComponent} from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    noJwtError: true,
    tokenGetter: () => localStorage.getItem('id_token'),
    globalHeaders: [{'Content-Type':'application/json'}],
  }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    LogoutComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MaterialModule.forRoot(),
    FlexLayoutModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de-DE'},
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(mdIconRegistry: MdIconRegistry, ds: DomSanitizer) {
    mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    mdIconRegistry.addSvgIcon('rsi', ds.bypassSecurityTrustResourceUrl('./assets/roberts_space_industries.svg'));
  }
}
