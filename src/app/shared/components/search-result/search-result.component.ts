import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {Hero} from "../../interfaces";
import {HeroService} from "../../services/hero.service";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultComponent {

  @Input() public hero: Hero;
  @ViewChild('select') button: ElementRef;

  constructor(
    public heroService: HeroService,
    private _cd: ChangeDetectorRef
  ) { }

  public selectHero(): void {
    if (this.heroService.isHeroSelected(this.hero.id)) {
      this.heroService.unselectHero(this.hero);
      console.log(this.heroService.selectedHeroes);
      this._cd.markForCheck();
      return;
    }
    console.log(this.heroService.selectedHeroes);

    this.heroService.selectHero(this.hero);
    this._cd.markForCheck();
  }
}
