import { ChangeDetectorRef, Injectable } from '@angular/core';
import { Battle } from "../interfaces";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class BattleService {

  public battlesHistory: Battle[] = [{
    date: new Date(new Date().getTime() + 3600 * 2000),
    hero: 'Iron Man',
    enemy: 'Hulk',
    result: 'Lose'
  },{
    date: new Date(new Date().getTime() + 3600 * 1000),
    hero: 'Thor',
    enemy: 'Taser',
    result: 'Lose'
  },
    {
    date: new Date(),
    hero: 'Hulk',
    enemy: 'Loky',
    result: 'Win'
  },];

  constructor(
    private authService: AuthService,
  ) { }

  public sort(selector: string, direction: number): void {
    this.battlesHistory.sort((prev, next) => direction * (next[selector] > prev[selector] ? -1 : 1));
  }


}
