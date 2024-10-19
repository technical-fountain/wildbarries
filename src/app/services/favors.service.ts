import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductItemOfProductCartInterface } from '../interfaces/product-cart.interface';

@Injectable({
  providedIn: 'root'
})
export class FavorsService {

  private subject!: BehaviorSubject<void | number>;
  private favorsProducts: Array<ProductItemOfProductCartInterface> = []

  constructor() {
    this.subject = new BehaviorSubject<void | number>(0);
    this.getFavorsProductsFromLocalStorage();
  }

  getFavorsProductsFromLocalStorage(): void {
    const localStorageData = localStorage.getItem('favorsData');
    if (localStorageData) {
      this.favorsProducts = JSON.parse(localStorageData)
    }
  }



  send(product: ProductItemOfProductCartInterface): void {
    const favorItem = this.favorsProducts.find((item: ProductItemOfProductCartInterface) =>
      item.id == product.id);
    if (!favorItem) {
      this.favorsProducts.push(product)

    } else if (favorItem) {
      const indexOfFavorItem = this.favorsProducts.indexOf(favorItem)
      this.favorsProducts.splice(indexOfFavorItem, 1)
    }
    this.subject.next();

  }

  get(): BehaviorSubject<void | number> {
    return this.subject
  }

  getFavorsContent(): Array<ProductItemOfProductCartInterface> {
    return this.favorsProducts
  }

  isFavor(product: ProductItemOfProductCartInterface): boolean {
    const found = this.favorsProducts.find((favorItem: ProductItemOfProductCartInterface) =>
      favorItem.id == product.id)
    return found ? true : false;
  }

  saveInLocaleStorage(): void {
    localStorage.setItem('favorsData', JSON.stringify(this.favorsProducts))
  }

}
