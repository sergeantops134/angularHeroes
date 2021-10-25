import {ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {CustomValidators} from "../../shared/custom.validators";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
 // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {

  public form: FormGroup =new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, CustomValidators.checkEmail]),
    password: new FormControl('', [Validators.required, CustomValidators.checkPassword]),
  });
  public submitted: boolean = false;
  public get isPasswordInvalid(): boolean{
    return this.form.get('password').touched && this.form.get('password').invalid;
  }
  public get isEmailInvalid(): boolean {
    return this.form.get('email').touched && this.form.get('email').invalid;
  }


  constructor(
    private _route: ActivatedRoute,
  ) { }


  public submit(): void {
    if (this.form.invalid) return;

    this.submitted = true;
    //future submission
    this.submitted = false;
  }

}
