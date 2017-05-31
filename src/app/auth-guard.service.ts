import { Injectable } from '@angular/core';
import { Router , CanActivate , CanActivateChild} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate , CanActivateChild {

   constructor(protected router: Router) {}

     canActivate() {
     /*   if (localStorage.getItem('authToken')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['']);
        return false;
        */
         return true;
    }
  canActivateChild(): boolean {
    return this.canActivate();
  }
}