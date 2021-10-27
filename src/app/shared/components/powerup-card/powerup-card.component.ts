import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {UserPowerup} from "../../interfaces";
import {PowerupService} from "../../services/powerup.service";

@Component({
  selector: 'app-powerup-card',
  templateUrl: './powerup-card.component.html',
  styleUrls: ['./powerup-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PowerupCardComponent {

  @Input() public powerup: UserPowerup;

  constructor(
    public powerupService: PowerupService,
  ) { }


}
