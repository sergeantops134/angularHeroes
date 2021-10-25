import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from "./shared/components/main-layout/main-layout.component";
import { LoginLayoutComponent } from "./login/shared/components/login-layout/login-layout.component";
import { SignInComponent } from "./login/sign-in/sign-in.component";
import { SignUpComponent } from "./login/sign-up/sign-up.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [],
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
