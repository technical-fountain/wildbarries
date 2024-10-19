import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { UserInfoInterface } from '../../interfaces/UserInfo.interface';
import { numberCheckValidator } from '../../custom-validators/number-check.validator';


@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss'
})
export class UserInfoComponent implements OnInit {

  checkValidation: boolean = false;
  userInfo: UserInfoInterface | null = null;
  onlyNumbers: boolean = true;
  months: Array<string> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  years: Array<string> = ['2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030']
  countries: Array<string> = ['United States', 'Afghanistan', 'Aland Islands', 'Albania', 'Algeria', 'American Samoa',
    'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia',
    'Austria', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belgium', 'Belize', 'Benin', 'Bermuda']


  formGroup = new UntypedFormGroup({
    paymentMethod: new UntypedFormControl(null, [Validators.required]),
    cardNumber: new UntypedFormControl(null, [Validators.required, numberCheckValidator(), Validators.minLength(16), Validators.maxLength(16)]),
    expMonth: new UntypedFormControl(null, [Validators.required]),
    expYear: new UntypedFormControl(null, [Validators.required, Validators.min(2024), numberCheckValidator()]),
    cardOunerName: new UntypedFormControl(null, [Validators.required]),
    streetAddress: new UntypedFormControl(null),
    city: new UntypedFormControl(null),
    zipCode: new UntypedFormControl(null),
    country: new UntypedFormControl(null),

  })

  ngOnInit(): void {

    this.userInfo = {
      cardOunerName: 'Johnny Applesed',
      streetAddress: '1234 Spectrum Way',
      city: 'San Francisco',
      zipCode: 91114,
      country: 'United States'
    }
    this.formGroup.patchValue(this.userInfo)
  }


  save(): void {
    if (this.formGroup.invalid) {
      this.checkValidation = true;
      return
    }
    alert('Created successfuly')
  }


}