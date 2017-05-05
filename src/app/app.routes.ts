import { NgModule , Component} from '@angular/core';
import { Routes, RouterModule , PreloadAllModules} from '@angular/router';

import { TmComponent } from './tm/tm.component';
import { NoContentComponent } from './no-content/no-content.component';

declare let System: any;
const ROUTES: Routes = [
  { path: '', component: TmComponent },
  { path: ':status', component: TmComponent },
  //{ path: '**', redirectTo: '/all' }
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