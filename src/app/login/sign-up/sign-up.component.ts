import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

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
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
  }

  submit() {
    if (this.form.invalid) return;

    this.submitted = true;
    //future submission
    this.submitted = false;

  }
}
