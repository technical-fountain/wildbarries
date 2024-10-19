import { Component, OnDestroy } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

import { ProductItemOfProductCartInterface } from '../../../interfaces/product-cart.interface';
import { CardService } from '../../../services/card.service';
import { Subscription } from 'rxjs';
import { CardItemInterface } from '../../../interfaces/card-item.interface';
import { FavorsService } from '../../../services/favors.service';

@Component({
  selector: 'app-rigth',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './rigth.component.html',
  styleUrl: './rigth.component.scss'
})
export class RigthComponent implements OnDestroy {

  currentCount: number = 0;
  Subscription!: Subscription;
  FavorsSubscription!: Subscription;
  favorsCount: number = 0;
 // cardProducts: Array<ProductItemOfProductCartInterface> = [];

  constructor(private cardService: CardService,
    private favorsService: FavorsService) {
    this.subscribeToCardUpdates();
    this.subscribeToFavorsUpdates();
  }

  subscribeToCardUpdates(): void {
    this.Subscription = this.cardService.get().subscribe(() => {
      this.currentCount = this.cardService.getTotalInfo().count;
    })
  }

  subscribeToFavorsUpdates(): void {
    this.FavorsSubscription = this.favorsService.get().subscribe(() => {
      this.favorsCount = this.favorsService.getFavorsContent().length ;
    })
  }

  ngOnDestroy(): void {
    this.Subscription.unsubscribe();
    this.FavorsSubscription.unsubscribe()
  }

}
