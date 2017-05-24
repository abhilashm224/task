import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import {nvD3} from 'ng2-nvd3'
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { TmComponent } from './tm/tm.component';
import { TmService } from './tm/tm.service';
import { BarChartComponent } from './bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TmComponent,
    BarChartComponent,
    nvD3
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    TmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }