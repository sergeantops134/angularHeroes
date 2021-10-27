import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BattleService } from "../../services/battle.service";
import { DIRECTION } from "../../enums";

@Component({
  selector: 'app-battles-history',
  templateUrl: './battles-history.component.html',
  styleUrls: ['./battles-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BattlesHistoryComponent {

  public readonly DIRECTION = DIRECTION;

  constructor(
    public battleService: BattleService,
  ) { }
}
