import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {HeroService} from "../shared/services/hero.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "../shared/custom.validators";

@Component({
  selector: 'app-selection-page',
  templateUrl: './selection-page.component.html',
  styleUrls: ['./selection-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectionPageComponent {

  public form: FormGroup = this._fb.group(
    { searchInput: ['', [Validators.required, CustomValidators.checkSearch]],
       },
    );


  public isAlphabetVisible: boolean = false;
  public recentSearches: string[] = sessionStorage.getItem('searches')?.split(',') || [];
  public currentLetter: string = 'a';

  constructor(
    public heroService: HeroService,
    private _cd: ChangeDetectorRef,
    private _fb: FormBuilder
  ) { }

  private search(): void {
    this.addRecentSearch(this.form.value.searchInput)

    if (this.form.invalid) {
      return;
    }

    this.heroService.loadHeroes(this.form.value.searchInput, this._cd);
  }

  public searchByEnter(event: KeyboardEvent) {
    if (event.code !== 'Enter') {
      return;
    }
    this.search();

  }

  public toggleAlphabet(): void {
    this.isAlphabetVisible = !this.isAlphabetVisible;
  }

  public searchByClick(): void {
    this.search();
  }

  public searchByAlphabetSelector(letter: string) {
    this.form.setValue({
      searchInput: letter,
    });
    this.currentLetter = letter;
    this.search();
  }

  public addRecentSearch(query): void {
    if (this.recentSearches.includes(query)) {
      return;
    }

    this.recentSearches.unshift(query);

    if (this.recentSearches.length === 6) this.recentSearches.pop();

    sessionStorage.setItem('searches', this.recentSearches.join(','));
    this._cd.markForCheck();
  }

  public searchByRecent(search: string): void {
    this.form.setValue({
      searchInput: search,
    });
    this.search();
  }
}
