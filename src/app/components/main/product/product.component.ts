import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { pipe } from 'rxjs';
import { FilterDataPipe } from '../../../pipes/filter-data.pipe';
import { CardService } from '../../../services/card.service';
import { Router } from '@angular/router';

import { ProductItemOfProductCartInterface } from '../../../interfaces/product-cart.interface';
import { CardUpdateEnum } from '../../../interfaces/card-update.enum';
import { CardItemInterface } from '../../../interfaces/card-item.interface';
import { FavorsService } from '../../../services/favors.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FilterDataPipe, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {


  @Input() item!: ProductItemOfProductCartInterface;

  cardUpdateEnum = CardUpdateEnum;
  currentDate: Date = new Date();
  receivingDate!: Date;
  inCard: boolean = false;
  isFavor: boolean = false;




  constructor(
    private cardService: CardService,
    private router: Router,
    private favorsService: FavorsService) {

  }

  ngOnInit(): void {
    this.setReceivingDate()
    this.isInCard()
    this.isInFavorites(this.item)
  }

  setReceivingDate() {
    this.currentDate.setDate(this.currentDate.getDate() + 14)
    this.receivingDate = this.currentDate

  }


  addToCard(event: Event, product: ProductItemOfProductCartInterface): void {
    event.stopPropagation();
    if (this.inCard) {
      this.router.navigate(['/card'])
    } else {
      this.cardService.send(product, CardUpdateEnum.ADD)
      this.inCard = true
    }
  }


  isInCard(): void {
    this.inCard = this.cardService.getIsInCard(this.item.id);
  }

  isInFavorites(product: ProductItemOfProductCartInterface): void {
    this.isFavor = this.favorsService.isFavor(this.item);
  }


  addToFavoritesOrRemove(event: MouseEvent, product: ProductItemOfProductCartInterface) {
    event.stopPropagation();
    this.favorsService.send(product)
    this.isInFavorites(product);
  }


}
