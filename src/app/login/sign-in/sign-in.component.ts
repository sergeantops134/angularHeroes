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
export class SignInComponent implements OnInit {

  public form: FormGroup;
  public submitted: boolean = false;

  constructor(
    private _route: ActivatedRoute,
  ) { }

  public ngOnInit(): void {

    this.form = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email, CustomValidators.customEmail]),
        password: new FormControl('', [Validators.required, CustomValidators.customPassword]),
    });


  }

  public submit(): void {
    if (this.form.invalid) return;

    this.submitted = true;
    //future submission
    this.submitted = false;
  }

}
