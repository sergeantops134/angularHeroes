import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { LoginLayoutComponent } from './login/shared/components/login-layout/login-layout.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { SelectionPageComponent } from './selection-page/selection-page.component';
import { SearchResultComponent } from './shared/components/search-result/search-result.component';
import { HttpClientModule } from "@angular/common/http";
import { AlphabetComponent } from './shared/components/alphabet/alphabet.component';
import { UserInfoPageComponent } from './user-info-page/user-info-page.component';
import { UserHeroesListComponent } from './shared/components/user-heroes-list/user-heroes-list.component';
import { BattlesHistoryComponent } from './shared/components/battles-history/battles-history.component';
import { PowerupsComponent } from './shared/components/powerups/powerups.component';
import { PowerupCardComponent } from './shared/components/powerup-card/powerup-card.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    LoginLayoutComponent,
    SignInComponent,
    SignUpComponent,
    SelectionPageComponent,
    SearchResultComponent,
    AlphabetComponent,
    UserInfoPageComponent,
    UserHeroesListComponent,
    BattlesHistoryComponent,
    PowerupsComponent,
    PowerupCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
