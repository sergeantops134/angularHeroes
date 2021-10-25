import {ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

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
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });


  }

  public submit(): void {
    if (this.form.invalid) return;

    this.submitted = true;
    //future submission
    this.submitted = false;
  }

}
