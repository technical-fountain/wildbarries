import { Component, OnInit } from '@angular/core';
import { ProductItemOfProductCartInterface } from '../../interfaces/product-cart.interface';
import { CommonModule, NgFor } from '@angular/common';
import { CardService } from '../../services/card.service';
import { CardItemInterface } from '../../interfaces/card-item.interface';
import { CardUpdateEnum } from '../../interfaces/card-update.enum';
import { CardTotalInfoInterface } from '../../interfaces/card-totalInfo.interface';
import { FavorsService } from '../../services/favors.service';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {

  cardProducts: Array<CardItemInterface> = [];
  totalInfo!: CardTotalInfoInterface;
  isFavor!: boolean;

  constructor(
    private cardService: CardService,
    private favorsService: FavorsService) {

  }
  ngOnInit(): void {

    this.getProducts();
    this.updateTotalInfo();
 
  }


  getProducts(): void {
    this.cardProducts = this.cardService.getCardContent()
  }

  decreaseCount(product: ProductItemOfProductCartInterface): void {
    this.cardService.send(product, CardUpdateEnum.REMOVE);
    this.updateTotalInfo();
  }

  increaseCount(product: ProductItemOfProductCartInterface): void {
    this.cardService.send(product, CardUpdateEnum.ADD);
    this.updateTotalInfo();
  }

  deleteProduct(product: ProductItemOfProductCartInterface): void {
    this.cardService.send(product, CardUpdateEnum.REMOVEALL);
    this.updateTotalInfo();
  }

  updateTotalInfo(): void {
    this.totalInfo = this.cardService.getTotalInfo();

  }



  addOrRemoveFromFavors(product: ProductItemOfProductCartInterface): void {
    
      this.favorsService.send(product);
      this.isInFavorites(product);
      
  }

  isInFavorites(product: ProductItemOfProductCartInterface) {
    this.isFavor = this.favorsService.isFavor(product)
  }

}
