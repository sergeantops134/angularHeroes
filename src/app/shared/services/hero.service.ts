import {ChangeDetectorRef, Injectable} from '@angular/core';
import { Hero } from "../interfaces";
import { ApiService } from "./api.service";
import {Observable} from "rxjs";
import {finalize} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  public heroes: Hero[] = [];
  public selectedHeroes: Hero[] = [];
  public get lastSelectedHero(): Hero {
    return this.selectedHeroes[this.selectedHeroes.length - 1];
  }

  constructor(
    private _apiService: ApiService,
  ) { }

  public loadHeroes(query: string, cd: ChangeDetectorRef): void {

      this._apiService.getHeroes(query)
        .pipe(finalize(() => cd.markForCheck()))
        .subscribe(heroes => {
          this.heroes = heroes;
        });


  }

  public isHeroSelected(id: string): boolean {
    return this.selectedHeroes.some(hero => hero.id === id);
  }

  public selectHero(hero: Hero): void {
    if (this.isHeroSelected(hero.id)) {
      return;
    }

    this.selectedHeroes.push(hero);
  }

  public unselectHero(hero: Hero): void {
    if (!this.isHeroSelected(hero.id)) {
      return;
    }

    this.selectedHeroes = this.selectedHeroes.filter(selectedHero => selectedHero.id !== hero.id);
  }

}
