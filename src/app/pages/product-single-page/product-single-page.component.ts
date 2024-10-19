import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductCartInterface, ProductItemOfProductCartInterface } from '../../interfaces/product-cart.interface';
import { NgIf } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-single-page',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product-single-page.component.html',
  styleUrl: './product-single-page.component.scss'
})
export class ProductSinglePageComponent implements OnInit {

  id!: number | null;
  productId!: number | null;
  product!: ProductItemOfProductCartInterface | null;

  constructor(private activatedRoute: ActivatedRoute,
    private location: Location,
    private httpClient: HttpClient,
    private router: Router) {
      
    console.log(this.router.getCurrentNavigation()?.extras.state)
    this.product = this.router.getCurrentNavigation()?.extras.state?.['selectedProduct']

  }
  ngOnInit(): void {
    //console.log(history.state)
    //console.log(this.location.getState())


    //console.log(this.activatedRoute)
    // this.activatedRoute.queryParams.subscribe((data) => {
    //   this.product = data as ProductItemOfProductCartInterface
    // })


    //const id = this.activatedRoute.snapshot.paramMap.get('id') || null
    //const productId = this.activatedRoute.snapshot.paramMap.get('productId') || null

    // if (id && productId) {
    //   this.id = +id
    //   this.productId = +productId
    //   this.getProduct()
    // } else { alert('Wrong parameter') }

  }

  getProduct(): void {
    this.httpClient.get<ProductCartInterface>(`https://dummyjson.com/carts/${this.productId}?delay=2000`)
      .subscribe((data: ProductCartInterface) => {

        this.product = data.products.find((item: ProductItemOfProductCartInterface) => item.id == this.id) || null

      },
        () => {
          alert('Error loading data')
        })
  }


  copyUrl(): void {

    navigator.clipboard.writeText(window.location.href)
    alert('url copied!')
  }

}
