import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function numberCheckValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    if (control.value) {
      for (let symbol of [...control.value]) {
        if (!Number(symbol) && Number(symbol)!= 0) {
          return { numberCheck: true }
        }
      }
    }
    return null;
  }
}