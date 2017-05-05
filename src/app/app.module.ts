import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { TmComponent } from './tm/tm.component';
import { TmService } from './tm/tm.service';
import { NoContentComponent } from './no-content/no-content.component';

@NgModule({
  declarations: [
    AppComponent,
    TmComponent,
    NoContentComponent
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