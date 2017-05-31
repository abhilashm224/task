import { NgModule , Component} from '@angular/core';
import { Routes, RouterModule , PreloadAllModules} from '@angular/router';

import {AuthGuardService} from './auth-guard.service';
import { TmComponent } from './tm/tm.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const ROUTES: Routes = [
  { path: 'a',  canActivate: [AuthGuardService], component: DashboardComponent },
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