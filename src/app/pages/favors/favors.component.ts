import { Component, OnInit } from '@angular/core';
import { FavorsService } from '../../services/favors.service';
import { NgFor } from '@angular/common';
import { ProductItemOfProductCartInterface } from '../../interfaces/product-cart.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favors',
  standalone: true,
  imports: [NgFor],
  templateUrl: './favors.component.html',
  styleUrl: './favors.component.scss'
})
export class FavorsComponent implements OnInit {

  favorsProducts: Array<ProductItemOfProductCartInterface> = [];


  constructor(private favorsService: FavorsService) {

  }

  ngOnInit(): void {
    this.favorsProducts = this.favorsService.getFavorsContent()
  }

  getFavorsProduct(): void {
    this.favorsProducts = this.favorsService.getFavorsContent()
  }


  removeFromFavors(product: ProductItemOfProductCartInterface): void {
    this.favorsService.send(product);
    this.getFavorsProduct()
  }

}
