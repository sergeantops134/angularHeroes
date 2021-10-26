import { Injectable } from '@angular/core';
import { User } from "../interfaces";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser: User;
  public get isAuthenticated(): boolean {
    const currentToken = JSON.parse(sessionStorage.getItem(sessionStorage.getItem('currentUser')));

    if (!currentToken) return  false;

    const expDate: number = currentToken.expiresDate;

    if (new Date().getTime() > expDate) {
      this.logout();
      return false;
    }
    return true;
  }

  constructor(
    private _router: Router,
  ) {
    const currentUserEmail: string = sessionStorage.getItem('currentUser');
    this.currentUser = JSON.parse(localStorage.getItem(currentUserEmail));
  }


  public login(user: User): void {

    this.currentUser = JSON.parse(localStorage.getItem(user.email));

    const token = {
      value: '1488',
      expiresDate: (new Date().getTime() + 3600 * 1000).toString(),
    }

    sessionStorage.setItem(user.email, JSON.stringify(token));
    sessionStorage.setItem('currentUser', user.email);

    this._router.navigate(['/']);
  }

  public logout(): void {
      sessionStorage.clear();
      this.currentUser = null;
  }

  public createAccount(user: User): void {
      //Если бы тут была апишка, можно было б и что-то намутить
      localStorage.setItem(user.email, JSON.stringify(user));
      this.login(user);
  }

  public tryToLogin(email: string, password: string): boolean {
    const loggingUserJSON: string = localStorage.getItem(email);

    if (!loggingUserJSON) return false;

    const loggingUser = JSON.parse(loggingUserJSON);

    if (loggingUser.password === password) {
      this.login(loggingUser);
      return true;
    } else {
      return false;
    }
  }
}
