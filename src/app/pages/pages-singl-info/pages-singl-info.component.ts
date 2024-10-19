import { Component, OnInit } from '@angular/core';
import { Product } from '../../interface/define';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pages-singl-info',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './pages-singl-info.component.html',
  styleUrl: './pages-singl-info.component.css'
})
export class PagesSinglInfoComponent implements OnInit {
  id!: number;
  product!: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      this.getProduct();
    } else {
      alert('Invalid product ID');
    }
  }

  getProduct(): void {
    this.httpClient.get<Product>(`https://dummyjson.com/carts/${this.id}`)
      .subscribe({
        next: (data: Product) => {
          this.product = data;
        },
        error: (error) => {
          console.error('Error fetching product details:', error);
          alert('Product not found');
        }
      });
  }
  addToCart(product: Product): void {
    alert('ваш товар в корзине');
  }
}
