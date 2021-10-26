import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
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

  public form: FormGroup =new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, CustomValidators.checkEmail]),
    password: new FormControl('', [Validators.required]),
  });

  public get isPasswordInvalid(): boolean{
    return this.form.get('password').touched && this.form.get('password').invalid;
  }
  public get isEmailInvalid(): boolean {
    return this.form.get('email').touched && this.form.get('email').invalid;
  }

  public submitted: boolean = false;
  public isLoginInvalid: boolean = false;
  public sessionExpired: boolean = false;

  constructor(
   private _authService: AuthService,
   private _route: ActivatedRoute
  ) {  }

  public ngOnInit(): void {
    this._route.queryParams.subscribe((params: Params) => {
      this.sessionExpired = !!params['sessionExpired'];
    });
  }


  public submit(): void {
    if (this.form.invalid) return;

    this.submitted = true;

    if (!this._authService.tryToLogin(this.form.value.email, this.form.value.password)) {
      this.isLoginInvalid = true;
      this.submitted = false;
      this.sessionExpired = false;
      return;
    }

    this.form.reset();
    this.isLoginInvalid = false;
    this.sessionExpired = false;
    this.submitted = false;
  }
}
