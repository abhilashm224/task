import { NgModule , Component} from '@angular/core';
import { Routes, RouterModule , PreloadAllModules} from '@angular/router';

import { TmComponent } from './tm/tm.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

const ROUTES: Routes = [
  { path: '', component: TmComponent },
  { path: 'chart', component: BarChartComponent },
  { path: ':status', component: TmComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES,{ useHash: false, /*preloadingStrategy: PreloadAllModules*/ })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}