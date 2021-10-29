import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import { HeroService } from "../shared/services/hero.service";
import { PowerupService } from "../shared/services/powerup.service";
import { AuthService } from "../shared/services/auth.service";
import {Observable} from "rxjs";
import {BattleService} from "../shared/services/battle.service";

@Component({
  selector: 'app-battle-page',
  templateUrl: './battle-page.component.html',
  styleUrls: ['./battle-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BattlePageComponent {

  public readonly statKeys: string[] = Object.keys(this.powerupService.bonuses);
  public showModal: boolean = false;
  public message: string = 'Battling...';
  public isBattleFinished: boolean = false;

  constructor(
    public heroService: HeroService,
    public powerupService: PowerupService,
    public authService: AuthService,
    public battleService: BattleService,
    private _cd: ChangeDetectorRef
  ) {
    battleService.pickNewEnemy();
  }


  public conductBattle(): void {
    this.showModal = true;
    this.isBattleFinished = false;
    this.battleService.getWinner()
      .subscribe((result) => {
        this.isBattleFinished = true;
        this.message = result;
        this._cd.markForCheck();
      });

  }

  public hideModal(): void {
    this.showModal = false;
    this.message = 'Battling...'
    this.battleService.pickNewEnemy();
  }
}
