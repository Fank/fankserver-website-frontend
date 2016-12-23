import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import {NgModule, LOCALE_ID} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {MaterialModule, MdIconRegistry} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AuthModule} from 'angular2-jwt';

import {AppComponent} from './app.component';
import {IndexComponent} from './index/index.component';
import {AuthService} from './auth.service';
import {routes} from './app.routes';
import {LoginComponent} from './login/login.component';

export function asd() {
  return localStorage.getItem('id_token');
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
    FlexLayoutModule.forRoot(),
    AuthModule.forRoot({
      headerPrefix: 'TOKA',
      noJwtError: true,
      globalHeaders: [{'Accept': 'application/json'}],
      tokenGetter: asd,
    })
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de-DE'},
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
