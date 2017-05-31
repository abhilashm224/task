import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { AlertModule } from 'ng2-bootstrap';

import { SharedModule } from './shared/shared.module'
import { AlertService ,LoaderService} from './shared/shared.service';
import {AuthGuardService} from './auth-guard.service';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { TmComponent } from './tm/tm.component';
import { TmService } from './tm/tm.service';
import {Settings} from './settings';
import { MapComponent } from './map/map.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TmComponent,
    MapComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    AlertModule.forRoot(),
    AgmCoreModule.forRoot({
     // apiKey: 'AIzaSyAowmYdY3dZwoe4qI1I_X8Ry-UPepb5dpA'        //old
      apiKey : 'AIzaSyBFvRHfbUVDDTeuu0BaOdekrcdALUITdZE'   //google account :: gmail : tcsiassessor@gmail.com , password : tcs12345
    })
  ],
  providers: [
    AuthGuardService,
    Settings,
    TmService,
    AlertService,
    LoaderService,
   // {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }