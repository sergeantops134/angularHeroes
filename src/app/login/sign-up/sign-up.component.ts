import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "../../shared/custom.validators";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  public form: FormGroup =new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, CustomValidators.checkEmail]),
    username: new FormControl('', [Validators.required, Validators.minLength(8), CustomValidators.checkUsername]),
    password: new FormControl('', [Validators.required, CustomValidators.checkPassword]),
  });
  public submitted: boolean = false;
  public get isPasswordInvalid(): boolean{
    return this.form.get('password').touched && this.form.get('password').invalid;
  }
  public get isEmailInvalid(): boolean {
    return this.form.get('email').touched && this.form.get('email').invalid;
  }
  public get isUsernameInvalid(): boolean {
    return this.form.get('username').touched && this.form.get('username').invalid;
  }

  constructor() { }

  submit() {
    if (this.form.invalid) return;

    this.submitted = true;
    //future submission
    this.submitted = false;

  }
}
