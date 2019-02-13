import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

// Globals
import { Globals } from 'src/app/app.globals';

@Injectable({
  providedIn: 'root'
})
export class RouteAuthService implements CanActivate{

  constructor(private globals: Globals, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.globals.isLoggedIn()){
      return true;
    }
    
    /** @todo burada burada baska yetki kistaslari daa yapilmali 
     * globalste page permissions gibi. 
     * nav menu dolarken bunu da dusunelim
    */
  //  this.router.navigate(['/no-permission']);

    // login e geri gonder
    this.router.navigate(['/login']);
    return false;
  }
}
