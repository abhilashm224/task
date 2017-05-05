import { NgModule , Component} from '@angular/core';
import { Routes, RouterModule , PreloadAllModules} from '@angular/router';

import { TmComponent } from './tm/tm.component';

const ROUTES: Routes = [
  { path: '', component: TmComponent },
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