import { NgModule , Component} from '@angular/core';
import { Routes, RouterModule , PreloadAllModules} from '@angular/router';

import { TmComponent } from './tm/tm.component';

const ROUTES: Routes = [
  { path: '', component: TmComponent },
  { path : 'chart', loadChildren: './+bar-chart#BarChartModule'},
  { path: ':status', component: TmComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES,{ useHash: true, /*preloadingStrategy: PreloadAllModules*/ })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}