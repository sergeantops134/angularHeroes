import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HeroService} from "../../services/hero.service";

@Component({
  selector: 'app-user-heroes-list',
  templateUrl: './user-heroes-list.component.html',
  styleUrls: ['./user-heroes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserHeroesListComponent {

  constructor(
    public heroService: HeroService
  ) { }


}
