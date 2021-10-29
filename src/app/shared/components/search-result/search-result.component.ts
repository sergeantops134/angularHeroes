import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import {Hero} from "../../interfaces";
import {HeroService} from "../../services/hero.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultComponent {

  @Input() public hero: Hero;

  constructor(
    public heroService: HeroService,
    private _cd: ChangeDetectorRef,
    private _router: Router
  ) { }

  public selectHero(): void {
    if (this.heroService.isHeroSelected(this.hero.id)) {
      this.heroService.unselectHero(this.hero);
      console.log(this.heroService.selectedHeroes);
      this._cd.markForCheck();
      return;
    }

    this.heroService.selectHero(this.hero);
    this._cd.markForCheck();
  }

  public openHeroInfoPage(): void {
    this._router.navigate(['hero'], {
      queryParams: {
        id: this.hero.id,
      }
    });
  }
}
