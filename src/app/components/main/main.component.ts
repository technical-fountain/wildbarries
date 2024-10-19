import { Component, OnInit} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule, NgFor } from '@angular/common';
import { CheckingdataPipe } from '../../pipe/checkingdata.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SearchFilterPipePipe } from '../../pipe/search-filter-pipe.pipe';
import { RouterLink } from '@angular/router';
import { Productitem } from '../../interface/define';
import { CartService } from '../../services/cart.service';
import { Cartitem } from '../../interface/cartitem';
import { CartAction } from '../../interface/cart-action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, NgFor,CheckingdataPipe,HttpClientModule,CommonModule,SearchFilterPipePipe,RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
  carts: any[] = [];
  products: Productitem[] = [];
  filteredProducts: Productitem[] = [];
  searchTerm: string = '';
  pending = false;
  page = 0;
  isAlertVisible: boolean = false;
  alertMessage: string = '';
  isAlertHidden = false;
  cartItems: Cartitem[] = [];

  constructor(
    private http: HttpClient,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
    });
    this.fetchCarts();
  }
  
  goToProductInfo(productId: number): void {
    this.router.navigate(['/pagesinfo', productId]);
  }

  fetchCarts(): void {
    if (this.pending) return;
    this.pending = true;

    this.http.get(`https://dummyjson.com/carts?limit=10&skip=${this.page * 10}`)
      .subscribe((response: any) => {
        this.carts = response.carts;
        this.products.push(...response.carts);
        this.page++;
        this.extractProducts();
        this.filteredProducts = [...this.products];
        this.pending = false;
      });
  }

  extractProducts(): void {
    this.products = this.carts.map(cart => cart.products).flat();
    this.filteredProducts = [...this.products];
  }

  onSearch(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.filteredProducts = this.searchTerm
      ? this.products.filter(product =>
          product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
      : [...this.products]; 
  }

  onScroll(event: Event): void {
    const mainDiv = event.target as HTMLElement;
    if (mainDiv.clientHeight + mainDiv.scrollTop + 20 >= mainDiv.scrollHeight) {
      this.fetchCarts();
    }
  }

  isInCart(product: Productitem): boolean {
    return this.cartItems.some(item => item.id === product.id);
  }

  addToCart(product: Productitem): void {
    const cartItem: Cartitem = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      discountPercentage: product.discountPercentage,
      discountedTotal: product.discountedTotal,
      total: product.total,
      thumbnail: product.thumbnail
    };

    this.cartService.modifyCart(cartItem, CartAction.ADD);

    this.alertMessage = `Добавлен в карзину`;
    this.showAlert();
  }

  removeFromCart(product: Productitem): void {
    const cartItem: Cartitem = { ...product, quantity: 1 }; 
    this.cartService.modifyCart(cartItem, CartAction.REMOVE);

    this.alertMessage = `Удален из карзины`;
    this.showAlert();
  }

  clearCart(): void {
    this.cartService.modifyCart({} as Cartitem, CartAction.REMOVEALL);

    this.alertMessage = `Корзина очищена`;
    this.showAlert();
  } 

  private showAlert(): void {
    this.isAlertVisible = true;
    this.isAlertHidden = false;

    setTimeout(() => {
      this.isAlertVisible = false;
      this.isAlertHidden = true;
    }, 3000);

    setTimeout(() => {
      this.alertMessage = '';
      this.isAlertHidden = false;
    }, 3500);
  }
}
