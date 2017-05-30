import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AlertModule } from 'ng2-bootstrap';

import { SharedModule } from './shared/shared.module'
import { AlertService ,LoaderService} from './shared/shared.service';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { TmComponent } from './tm/tm.component';
import { TmService } from './tm/tm.service';
import {Settings} from './settings';

@NgModule({
  declarations: [
    AppComponent,
    TmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    AlertModule.forRoot()
  ],
  providers: [
    Settings,
    TmService,
    AlertService,
    LoaderService,
   // {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }