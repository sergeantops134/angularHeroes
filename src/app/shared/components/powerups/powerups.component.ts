import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PowerupService } from "../../services/powerup.service";

@Component({
  selector: 'app-powerups',
  templateUrl: './powerups.component.html',
  styleUrls: ['./powerups.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PowerupsComponent {

  constructor(
    public powerupService: PowerupService,
  ) { }



}
