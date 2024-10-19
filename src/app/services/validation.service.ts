import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  isValidPhoneNumber(phoneNumber: string): boolean {
    if (phoneNumber.length != 8) {
      return false
    }
    for (let i = 0; i < phoneNumber.length; i++) {
      if (Number(phoneNumber[i] != 'NaN')) {
        return false
      }
    }
    return true
  }

}
