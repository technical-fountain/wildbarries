import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function phoneNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const phoneWithoutCode = control.value.replace(/^\+374|^0/, ''); 
    const isValid = /^\d{8}$/.test(phoneWithoutCode);

    return isValid ? null : { invalidPhoneNumber: true }; 
  };
}
