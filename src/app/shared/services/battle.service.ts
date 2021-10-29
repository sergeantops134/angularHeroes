import { Injectable } from '@angular/core';
import { Battle, Hero } from "../interfaces";
import { HeroService } from "./hero.service";
import {ApiService} from "./api.service";
import {Observable, Subscriber} from "rxjs";
import {PowerupService} from "./powerup.service";

@Injectable({
  providedIn: 'root'
})
export class BattleService {

  public battlesHistory: Battle[] = [];
  public enemy: Observable<Hero>;
  private _currentEnemy;
  public hero: Hero;

  constructor(
    private _heroService: HeroService,
    private _apiService: ApiService,
    private _powerupService: PowerupService
  ) { }

  public sort(selector: string, direction: number): void {
    this.battlesHistory.sort((prev, next) => direction * (next[selector] > prev[selector] ? -1 : 1));
  }

  public pickNewEnemy() {
    const randomId = Math.round(Math.random() * 731);

    this.enemy = this._apiService.getSingleHero<Hero>(randomId.toString());
    this.enemy.subscribe(enemy => {
      this._currentEnemy = enemy;
    })
  }

  public getWinner(): Observable<string> {
    const currentHero: Hero = this._heroService.lastSelectedHero;

    let totalHeroPower: number = 0;

    for (let stat in currentHero.powerstats) {
      if (!currentHero.powerstats.hasOwnProperty(stat)) {
        continue;
      }

      const heroStat: number = +currentHero.powerstats[stat] + (this._powerupService.bonuses[stat] ? 10 : 0);

      if (this._powerupService.bonuses[stat]) {
          this._powerupService.decreasePowerup(stat);
      }

      if (heroStat > +this._currentEnemy.powerstats[stat]) {
        totalHeroPower += 10;
      }

    }

    const totalEnemyPower: number = Math.random() * 60;

    const battleResult = totalHeroPower > totalEnemyPower ? 'Win' : 'Lose';

    this.battlesHistory.push({
      date: new Date(),
      hero: currentHero.name,
      enemy: this._currentEnemy.name,
      result: battleResult,
    })

    return new Observable<string>((observer:Subscriber<string>) => {
      setTimeout(() => {
        observer.next(battleResult);
      }, 5000);
    });
  }

}
