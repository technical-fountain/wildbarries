import { Component } from '@angular/core';
import { LoginCountryInterface } from '../../interfaces/loginCountryInterface';
import { LoginCountriesComponent } from './login-countries/login-countries.component';
import { ValidationService } from '../../services/validation.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { numberCheckValidator } from '../../custom-validators/number-check.validator';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginCountriesComponent, NgClass, FormsModule, NgIf, NgFor, ReactiveFormsModule, RouterLink],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  randomCode: string = '';
  showCountries: boolean = false
  currentCountryId: number = 1;
  checkPhoneNumber: boolean = false;
  fullPhoneNumber!: string;

  loginCountries: Array<LoginCountryInterface> = [
    {
      id: 1,
      countryFlagImage: 'rus',
      countryName: 'Russia',
      countryCode: '+7'
    },
    {
      id: 2,
      countryFlagImage: 'arm',
      countryName: 'Armenia',
      countryCode: '+374'
    },
    {
      id: 3,
      countryFlagImage: 'bel',
      countryName: 'Belarus',
      countryCode: '+375'
    },
    {
      id: 4,
      countryFlagImage: 'kaz',
      countryName: 'Kazakstan',
      countryCode: '+7'
    },
    {
      id: 5,
      countryFlagImage: 'kir',
      countryName: 'Kirgizia',
      countryCode: '+996'
    },
    {
      id: 6,
      countryFlagImage: 'uzb',
      countryName: 'Uzbekstan',
      countryCode: '+998'
    },
  ]

  formGroup = new UntypedFormGroup({
    phoneNumber: new UntypedFormControl(null, [Validators.required, numberCheckValidator(), Validators.minLength(8), Validators.maxLength(8)])
  })


  constructor(
    private validationService: ValidationService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

  }

  getCode(): void {
    if (this.formGroup.invalid) {
      this.checkPhoneNumber = true;
      return
    }

    this.randomCode = String(Math.random()).slice(5, 11)
    this.fullPhoneNumber = this.loginCountries[this.currentCountryId].countryCode + this.formGroup.value.phoneNumber
    localStorage.setItem('newCode', JSON.stringify(true))
    this.router.navigate(['/random-code'], { state: { data: { fullPhoneNumber: this.fullPhoneNumber, randomCode: this.randomCode } } })

  }

  toggleShowCounties(): void {
    this.showCountries = !this.showCountries
  }

  changeCountry(event: LoginCountryInterface) {
    this.currentCountryId = event.id - 1
    this.showCountries = false
  }


}
