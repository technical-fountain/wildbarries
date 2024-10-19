import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoginCountryInterface } from '../../../interfaces/loginCountryInterface';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-login-countries',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './login-countries.component.html',
  styleUrl: './login-countries.component.scss'
})
export class LoginCountriesComponent {

  @Input() loginCountries!: Array<LoginCountryInterface>
  @Output() changeCountry = new EventEmitter<LoginCountryInterface>()

  handleClick(item: LoginCountryInterface,event:Event) {
    event.CAPTURING_PHASE
    this.changeCountry.emit(item)
  }


}
