import { Component, Input, OnInit } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CartsInterface } from '../../interfaces/carts.interface';
import { ProductCartInterface } from '../../interfaces/product-cart.interface';
import { ProductItemOfProductCartInterface } from '../../interfaces/product-cart.interface';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ProductComponent, NgFor,RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {

  @Input() productsData!: Array<ProductItemOfProductCartInterface>

  pending: boolean = false;
  limit: number = 10;
  pages: number = 0;
  stopCalculateScrolling: boolean = false;
  products: Array<ProductCartInterface> = [];

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(): void {
    if (this.pending) {
      return
    }
    this.pending = true
    this.httpClient.get<CartsInterface>(`https://dummyjson.com/carts?${this.limit}&skip=${this.limit * this.pages}`)
      .subscribe((data: CartsInterface) => {
        this.products = this.products.concat(data.carts)
        this.pending = false
        this.pages++
        if (this.limit * this.pages >= data.total) {
          this.stopCalculateScrolling = true
        }

      },
        () => { alert('Error loading data') })
  }

  handleScrollEvent(event: Event): void {
    if (this.stopCalculateScrolling) {
      return
    }
    const mainDiv = event.target as HTMLElement
    if (mainDiv.scrollTop + mainDiv.clientHeight + 20 >= mainDiv.scrollHeight) {
      this.getProducts()
    }
  }

}
