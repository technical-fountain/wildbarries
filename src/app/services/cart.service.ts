import { Injectable } from '@angular/core';
import { Productitem } from '../interface/define';
import { BehaviorSubject } from 'rxjs';
import { Cartitem } from '../interface/cartitem';
import { CartAction } from '../interface/cart-action';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject = new BehaviorSubject<Cartitem[]>([]);
  cart$ = this.cartSubject.asObservable();
  private cartItems: Cartitem[] = [];

  totalPrice = 0;
  totalDiscount = 0;

  constructor() {}

  private calculateTotal() {
    this.totalPrice = this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    this.totalDiscount = this.cartItems.reduce((sum, item) =>
      sum + ((item.price * ((item.discountPercentage ?? 0) / 100)) * item.quantity), 0);
  }

  private updateCart() {
    this.cartSubject.next([...this.cartItems]);
    this.calculateTotal();
  }

  modifyCart(item: Cartitem, action: CartAction) {
    switch(action) {
      case CartAction.ADD:
        const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
          existingItem.quantity++;
        } else {
          this.cartItems.push(item);
        }
        this.updateCart();
        break;

      case CartAction.REMOVE:
        this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id);
        this.updateCart();
        break;

      case CartAction.REMOVEALL:
        this.cartItems = [];
        this.updateCart();
        break;

      default:
        console.error('Invalid action');
    }
  }

  increaseQuantity(item: Cartitem) {
    this.modifyCart(item, CartAction.ADD);  
  }

  decreaseQuantity(item: Cartitem) {
    const cartItem = this.cartItems.find(cartItem => cartItem.id === item.id);
    if (cartItem && cartItem.quantity > 1) {
      cartItem.quantity--;
      this.updateCart();
    }
  }

  getTotalPrice(): number {
    return this.totalPrice;
  }

  getTotalDiscount(): number {
    return this.totalDiscount;
  }

  clearCart() {
    this.modifyCart({} as Cartitem, CartAction.REMOVEALL);  
  }
}
