import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "../../shared/custom.validators";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public form: FormGroup;
  public submitted: boolean = false;

  constructor() { }

  ngOnInit(): void {

    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, CustomValidators.customEmail]),
      username: new FormControl('', [Validators.required, Validators.minLength(8), CustomValidators.customUsername]),
      password: new FormControl('', [Validators.required, CustomValidators.customPassword]),
    });
  }

  submit() {
    if (this.form.invalid) return;

    this.submitted = true;
    //future submission
    this.submitted = false;

  }
}
