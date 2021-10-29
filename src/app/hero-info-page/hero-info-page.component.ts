import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import { SingleHero } from "../shared/interfaces";
import { ApiService } from "../shared/services/api.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-hero-info-page',
  templateUrl: './hero-info-page.component.html',
  styleUrls: ['./hero-info-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroInfoPageComponent implements OnInit{

  public hero: Observable<SingleHero>;
  private _routeSnapshot: ActivatedRouteSnapshot;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _apiService: ApiService
  ) {
    this._routeSnapshot = _activatedRoute.snapshot;
  }

  public ngOnInit(): void {
    this.getHero();
  }

  private getHero(){
    this.hero = this._apiService.getSingleHero<SingleHero>(this._routeSnapshot.queryParams['id']);
  }


}
