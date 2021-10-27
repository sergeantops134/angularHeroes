import { ChangeDetectionStrategy, Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { CustomValidators } from "../../shared/custom.validators";
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {

  public form: FormGroup = this._fb.group({
    email: ['', [Validators.required, Validators.email, CustomValidators.checkEmail, CustomValidators.isEmailUnique]],
    username: ['', [Validators.required, Validators.minLength(8), CustomValidators.checkUsername]],
    password: ['', [Validators.required, CustomValidators.checkPassword]],
  });



  public get isPasswordInvalid(): boolean{
    return this.form.get('password').touched && this.form.get('password').invalid;
  }
  public get isEmailInvalid(): boolean {
    return this.form.get('email').touched && this.form.get('email').invalid;
  }
  public get isUsernameInvalid(): boolean {
    return this.form.get('username').touched && this.form.get('username').invalid;
  }


  constructor(
    private _authService: AuthService,
    private _fb: FormBuilder,
  ) { }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this._authService.createAccount(this.form.value);
    this.form.reset();
  }
}
