import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';


import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppConfigService } from './service/app-config.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouteConfigService } from './helper/route-config.service';



const appInitializerFn = (appConfig: AppConfigService) => {
  return () => {
    return appConfig.loadAppConfig();
  };
};

const appRouteInitializerFn = (routeConfig: RouteConfigService) => {
  return () => {
    return routeConfig.loadRouteConfig();
  };
};
@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    LoginLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    NgbModule
  ],
  providers: [
    AppConfigService,
    RouteConfigService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [AppConfigService]
    }, {
      provide: APP_INITIALIZER,
      useFactory: appRouteInitializerFn,
      multi: true,
      deps: [RouteConfigService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
