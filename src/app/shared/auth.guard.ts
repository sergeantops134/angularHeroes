import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "./services/auth.service";
import {NAVIGATION_PATH} from "./enums";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _authService: AuthService,
    private _router: Router,
  ) {  }


  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (!this._authService.isAuthenticated) {
      this._router.navigate([NAVIGATION_PATH.signin], {
        queryParams: {
          sessionExpired: true,
        }
      });
    }
    return this._authService.isAuthenticated;
  }
}
