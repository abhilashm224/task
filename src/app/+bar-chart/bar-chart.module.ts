import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module'
import { TabsModule } from 'ng2-bootstrap';
import { AlertModule } from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap';

import { routes } from './bar-chart.routes';
import { BarChartComponent } from './bar-chart.component';
import { BarChartService } from './bar-chart.service';

console.log('`Bar Chart` bundle loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    BarChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes),
    TabsModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    BarChartService
  ],
})
export class BarChartModule {
  public static routes = routes;
}