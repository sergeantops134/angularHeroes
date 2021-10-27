import { Injectable } from '@angular/core';
import { Hero } from "../interfaces";
import { environment } from "../../../environments/environment";
import { map } from "rxjs/operators";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Expression, isNull} from "@angular/compiler/src/output/output_ast";

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(
    private _http: HttpClient,
  ) { }


  public getHeroes(query: string): Observable<Hero[]> {
    return this._http.get<Hero[]>(`${environment.apiUrl}${environment.apiToken}/search/${query}`)
      .pipe(
        map(response => response['results'].filter(this.filterByStats) as Hero[]),
      );
  }

  private filterByStats(hero: Hero): boolean {
    return !Object.values(hero.powerstats).some(stat => stat === 'null');
  }

}
