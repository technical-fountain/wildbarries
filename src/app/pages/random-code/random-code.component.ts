import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { numberCheckValidator } from '../../custom-validators/number-check.validator';
import { NgFor } from '@angular/common';
import { MakeArrayPipe } from "../../pipes/make-array.pipe";
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-random-code',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, MakeArrayPipe],
  templateUrl: './random-code.component.html',
  styleUrl: './random-code.component.scss'
})
export class RandomCodeComponent implements OnInit, AfterViewInit {
  randomCode: string = '';
  fullPhoneNumber!: string;
 

  formGroup = new UntypedFormGroup({
    codeSymbol1: new UntypedFormControl('', [Validators.required, numberCheckValidator(), Validators.minLength(1), Validators.maxLength(1)]),
    codeSymbol2: new UntypedFormControl('', [Validators.required, numberCheckValidator(), Validators.minLength(1), Validators.maxLength(1)]),
    codeSymbol3: new UntypedFormControl('', [Validators.required, numberCheckValidator(), Validators.minLength(1), Validators.maxLength(1)]),
    codeSymbol4: new UntypedFormControl('', [Validators.required, numberCheckValidator(), Validators.minLength(1), Validators.maxLength(1)]),
    codeSymbol5: new UntypedFormControl('', [Validators.required, numberCheckValidator(), Validators.minLength(1), Validators.maxLength(1)]),
    codeSymbol6: new UntypedFormControl('', [Validators.required, numberCheckValidator(), Validators.minLength(1), Validators.maxLength(1)]),

  })


  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.getData();

  }

  ngOnInit(): void {
    //this.getPhoneNumberAndCode()
  }

  getData(): void {
    //console.log(this.router.getCurrentNavigation()?.extras.state)
    this.fullPhoneNumber = this.router.getCurrentNavigation()?.extras.state?.['data'].fullPhoneNumber
    this.randomCode = this.router.getCurrentNavigation()?.extras.state?.['data'].randomCode
  }

  ngAfterViewInit(): void {
    const newCode = localStorage.getItem('newCode')
    if (newCode) {
      if (JSON.parse(newCode) == true) {
        setTimeout(() => {
          alert(this.randomCode)
        }, 2000)
      }
    }
    localStorage.setItem('newCode', JSON.stringify(false))
  }

  checkCodeValidation(event: Event): void {
    const target = event.target as HTMLElement
    target.setAttribute('disabled', 'true')
    const filledCode = Object.values(this.formGroup.value).join('');
    if (this.randomCode == filledCode) {
      localStorage.setItem('loggedIn', JSON.stringify(true))
      this.router.navigate(['/'])
    }
  }

}



// getPhoneNumberAndCode(): void {
//   this.activatedRoute.queryParams.subscribe((data) => {
//     this.fullPhoneNumber = data['fullPhoneNumber']
//     this.randomCode = data['randomCode']
//   })

// }