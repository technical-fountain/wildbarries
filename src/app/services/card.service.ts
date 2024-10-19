import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ProductItemOfProductCartInterface } from '../interfaces/product-cart.interface';
import { CardItemInterface } from '../interfaces/card-item.interface';
import { CardUpdateEnum } from '../interfaces/card-update.enum';
import { CardTotalInfoInterface } from '../interfaces/card-totalInfo.interface';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private subject!: BehaviorSubject<void | number>;
  private cardProducts: Array<CardItemInterface> = [];

  constructor() {
    this.subject = new BehaviorSubject<void | number>(0)
    const localStorageData = localStorage.getItem('cardData')
    if (localStorageData) {
      this.cardProducts = JSON.parse(localStorageData)

    }
  }

  send(product: ProductItemOfProductCartInterface, type: CardUpdateEnum): void {
    const foundProductInCard = this.cardProducts.find(
      (cardProduct: CardItemInterface) => cardProduct.product.id == product.id)

    if (type === CardUpdateEnum.ADD) {
      if (foundProductInCard) {
        foundProductInCard.count++

      } else {
        this.cardProducts.push({ count: 1, product: product })

      }
    } else if (type === CardUpdateEnum.REMOVEALL && foundProductInCard) {
      const indexOfFundProductInCard = this.cardProducts.findIndex(
        (item: CardItemInterface) => item.product.id === product.id);

      this.cardProducts.splice(indexOfFundProductInCard, 1)

    } else if (type === CardUpdateEnum.REMOVE && foundProductInCard &&
      foundProductInCard.count > 1) {

      foundProductInCard.count--
    }
    this.subject.next()
  }

  get(): BehaviorSubject<void | number> {
    return this.subject;
  }

  getCardContent(): Array<CardItemInterface> {
    return this.cardProducts
  }

  getTotalInfo(): CardTotalInfoInterface {
    let totalPrice = 0;
    let count = 0;
    this.cardProducts.forEach((cardItem: CardItemInterface) => {
      totalPrice += cardItem.count * cardItem.product.price
      count += cardItem.count
    })
    return {
      count,
      totalPrice: +totalPrice.toFixed(2)
    }
  }

  getIsInCard(id: number): boolean {
    const found = this.cardProducts.find((product: CardItemInterface) => product.product.id == id);
    return found ? true : false;
  }
  
  saveInLocaleStorage(): void {
    localStorage.setItem('cardData', JSON.stringify(this.cardProducts))
  }
}
