import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from "./shared/components/main-layout/main-layout.component";
import { LoginLayoutComponent } from "./login/shared/components/login-layout/login-layout.component";
import { SignInComponent } from "./login/sign-in/sign-in.component";
import { SignUpComponent } from "./login/sign-up/sign-up.component";
import { AuthGuard } from "./shared/auth.guard";
import { SelectionPageComponent } from "./selection-page/selection-page.component";
import { UserInfoPageComponent } from "./user-info-page/user-info-page.component";
import { UserHeroesListComponent } from "./shared/components/user-heroes-list/user-heroes-list.component";
import { BattlesHistoryComponent } from "./shared/components/battles-history/battles-history.component";
import { PowerupsComponent } from "./shared/components/powerups/powerups.component";
import { HeroInfoPageComponent } from "./hero-info-page/hero-info-page.component";
import { BattlePageComponent } from "./battle-page/battle-page.component";
import {BattleGuard} from "./shared/battle.guard";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, canActivate: [AuthGuard], children: [
      {path: '', redirectTo: '/select', pathMatch: 'full'},
      {path: 'select', component: SelectionPageComponent},
      {path: 'info', component: UserInfoPageComponent, children: [
          {path: 'list', component: UserHeroesListComponent},
          {path: 'battles', component: BattlesHistoryComponent},
          {path: 'powerups', component: PowerupsComponent},
        ]},
      {path: 'hero', component: HeroInfoPageComponent},
      {path: 'battle', component: BattlePageComponent, canActivate: [BattleGuard]}
    ]
  },
  {
    path: 'login', component: LoginLayoutComponent, children: [
      {path: 'signin', component: SignInComponent},
      {path: 'signup', component: SignUpComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
