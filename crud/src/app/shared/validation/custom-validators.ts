import { AbstractControl, ValidatorFn } from '@angular/forms';

export class CustomValidators {

  static min(arg: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const value = control.value;
      if (!value) return;

      if (value < arg) {
        return { 'min': { 'requiredValue': arg, 'actualValue': value } };
      }

      return null;
    };
  }

  static max(arg: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const value = control.value;
      if (!value) return;

      if (value > arg) {
        return { 'max': { 'requiredValue': arg, 'actualValue': value } };
      }

      return null;
    };
  }

}
