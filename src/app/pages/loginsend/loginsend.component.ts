import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginsend',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './loginsend.component.html',
  styleUrl: './loginsend.component.css'
})
export class LoginsendComponent implements OnInit,OnDestroy{
  timer: number = 60;
  interval: any; 
  verificationCode: string[] = Array(6).fill('');

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startTimer(); 
  }

  startTimer(): void {
    this.interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      }
    }, 1000); 
  }

  get formattedTime(): string {
    const minutes = Math.floor(this.timer / 60);
    const seconds = this.timer % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`; 
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval); 
    }
  }

  submitCode() {
    const code = this.verificationCode.join('');
    
    if (code === '000000') {
      localStorage.setItem('login', 'true');
      this.router.navigate(['basket']);
    } else {
      console.log('Invalid code');
    }
  }

  onCodeInput(index: number, event: any) {
    this.verificationCode[index] = event.target.value;
    
    if (event.target.value.length === 1 && index < this.verificationCode.length - 1) {
      const nextInput = event.target.nextElementSibling;
      if (nextInput) {
        nextInput.focus();
      }
    }

    if (event.key === 'Backspace' && event.target.value.length === 0 && index > 0) {
      const previousInput = event.target.previousElementSibling;
      if (previousInput) {
        previousInput.focus();
      }
    }
  }
}
