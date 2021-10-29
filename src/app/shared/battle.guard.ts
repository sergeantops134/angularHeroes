import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {HeroService} from "./services/hero.service";

@Injectable({
  providedIn: 'root'
})
export class BattleGuard implements CanActivate {

  constructor(
    private _heroService: HeroService,
    private _router: Router,
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this._heroService.selectedHeroes.length) {
      return true;
    }

    this._router.navigate(['/select']);

    return;
  }

}
