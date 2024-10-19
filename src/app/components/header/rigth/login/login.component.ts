import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators, ReactiveFormsModule} from '@angular/forms';
import { phoneNumberValidator } from '../../../../Custom-validation/Custom.validation';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf,NgFor,FormsModule,RouterLink,NgClass,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isFormVisible = true
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      phoneNumber: ['', [Validators.required, phoneNumberValidator()]]
    });
  }
  closeForm() {
    this.isFormVisible = false; 
  }

  submitForm() {
    if (this.loginForm.valid) {
      console.log('Valid phone number:', this.loginForm.value.phoneNumber);
      this.router.navigate(['/loginsend']);
    } else {
      console.log('Invalid phone number');
    }
  }
}
