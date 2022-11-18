import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../Service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private service:UserService, private route:Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return true; // return true will allow you access to all the page

      // If this condition is not satified, you can't access all pages with canActivate:[AuthGuard] link in app-routing.module.ts
    if(this.service.IsLogin()) {
      return true;
    } else {
      this.route.navigate(['login']);
      return false
    }
  }
  
}
