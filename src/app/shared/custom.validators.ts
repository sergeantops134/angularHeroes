import { FormControl } from "@angular/forms";


export interface ValidatorResult {
  [key: string]: boolean,
}

export class CustomValidators {

  public static checkEmail(control: FormControl): ValidatorResult {
    return control.value?.match(/(?!(?:.*\.){5})[a-zA-Z0-9.]+@[a-zA-Z0-9]{0,5}\.(com|org|net|co|us)/g)?.toString() === control.value ? null : {email: true};
  }

  public static checkPassword(control: FormControl): ValidatorResult {
    return control.value?.match(/(?=.*[0-9])(?=.*[!$%.-])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!$%.-]{5,}/g) ? null : {invalidPass: true};
  }

  public static checkUsername(control: FormControl): ValidatorResult {
    return control.value?.match(/([a-z]+[A-Z][a-z]+|[a-z]+-[a-z]+|[A-Z][a-z]+ [A-Z][a-z]+)/g)?.toString() === control.value ? null : {invalidUsername: true};
  }

  public static isEmailUnique(control: FormControl) {
    return localStorage.getItem(control.value) ? {emailTaken: true} : null;
  }


}


