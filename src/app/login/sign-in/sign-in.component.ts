import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute, Params } from "@angular/router";
import { CustomValidators } from "../../shared/custom.validators";
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent implements OnInit {
  public form: FormGroup = this._fb.group({
    email: ['', [Validators.required, Validators.email, CustomValidators.checkEmail]],
    password: ['', [Validators.required]],
  });


  public get isPasswordInvalid(): boolean{
    return this.form.get('password').touched && this.form.get('password').invalid;
  }
  public get isEmailInvalid(): boolean {
    return this.form.get('email').touched && this.form.get('email').invalid;
  }

  public isLoginInvalid: boolean = false;
  public sessionExpired: boolean = false;

  constructor(
   private _authService: AuthService,
   private _route: ActivatedRoute,
   private _fb: FormBuilder
  ) {  }

  public ngOnInit(): void {
    this.checkSessionState();
  }

  private checkSessionState() {
    this._route.queryParams.subscribe((params: Params) => {
      this.sessionExpired = !!params['sessionExpired'];
    });
  }


  public submit(): void {
    if (this.form.invalid) {
      return;
    }
    this.sessionExpired = false;

    this.isLoginInvalid = !this._authService.tryToLogin(this.form.value.email, this.form.value.password);

    this.form.reset();
  }
}
