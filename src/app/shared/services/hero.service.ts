import { Injectable } from '@angular/core';
import { Hero } from "../interfaces";
import { ApiService } from "./api.service";
import {Observable} from "rxjs";

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

  public loadHeroes(query: string): Observable<void> {
    return new Observable<void>( (subscriber) => {
      this._apiService.getHeroes(query)
        .subscribe(heroes => {
          this.heroes = heroes;
          subscriber.next();
        }, () => {
          subscriber.next();
        });
    });

  }

  public isHeroSelected(id: string): boolean {
    let isSelected = false;
    this.selectedHeroes.forEach(hero => {
      if (hero.id === id) isSelected = true;
    });
    return isSelected;
  }

  public selectHero(hero: Hero): void {
    if (this.isHeroSelected(hero.id)) return;

    this.selectedHeroes.push(hero);
  }

  public unselectHero(hero: Hero): void {
    if (!this.isHeroSelected(hero.id)) return;

    this.selectedHeroes = this.selectedHeroes.filter(selectedHero => selectedHero.id !== hero.id);
  }

}
