import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-rigth',
  standalone: true,
  imports: [NgIf,LoginComponent,RouterLink],
  templateUrl: './rigth.component.html',
  styleUrl: './rigth.component.css'
})
export class RigthComponent {
  totalQuantity: number = 0;
  constructor(private http: HttpClient,private cartService: CartService) { }
  
  ngOnInit() {
    this.cartService.cart$.subscribe(items => {
      this.totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
    });
  }
  loginFormVisible = false;

  openLoginForm() {
    this.loginFormVisible = true;
  }

  closeLoginForm() {
    this.loginFormVisible = false;
  }
}
