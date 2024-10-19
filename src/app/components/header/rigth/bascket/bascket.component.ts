import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../../services/cart.service';
import { CommonModule } from '@angular/common';
import { Cartitem } from '../../../../interface/cartitem';

@Component({
  selector: 'app-bascket',
  standalone: true,
  imports: [NgFor,NgIf, CommonModule],
  templateUrl: './bascket.component.html',
  styleUrl: './bascket.component.css'
})
export class BascketComponent implements OnInit {
  cartItems: Cartitem[] = [];
  totalPrice = 0;
  totalDiscount = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      this.totalPrice = this.cartService.getTotalPrice();
      this.totalDiscount = this.cartService.getTotalDiscount();
    });
  }

  increaseQuantity(item: Cartitem) {
    this.cartService.increaseQuantity(item);
  }

  decreaseQuantity(item: Cartitem) {
    this.cartService.decreaseQuantity(item);
  }

  clearBasket() {
    this.cartService.clearCart();
    alert('Корзина очищена!');
  }

  placeOrder() {
    if (this.cartItems.length === 0) {
      alert('Ваша корзина пуста. Пожалуйста, добавьте товары в корзину перед оформлением заказа.');
      return;
    }


    alert('Заказ оформлен успешно!');
    this.clearBasket();
  }
}
