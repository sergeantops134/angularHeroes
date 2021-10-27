import { ChangeDetectorRef, Component } from '@angular/core';
import { BattleService } from "../../services/battle.service";
import { DIRECTION } from "../../enums";

@Component({
  selector: 'app-battles-history',
  templateUrl: './battles-history.component.html',
  styleUrls: ['./battles-history.component.scss']
})
export class BattlesHistoryComponent {

  public DIRECTION = DIRECTION;

  constructor(
    public battleService: BattleService,
    public cd: ChangeDetectorRef
  ) { }


}
