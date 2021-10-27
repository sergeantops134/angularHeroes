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
