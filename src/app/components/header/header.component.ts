import { Component, Output,EventEmitter} from '@angular/core';
import { LeftComponent } from './left/left.component';
import { RigthComponent } from './rigth/rigth.component';
import { CenterComponent } from './center/center.component';
import { FormsModule,} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CartService } from '../../services/cart.service';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LeftComponent,RigthComponent,CenterComponent, FormsModule,HttpClientModule,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() searchResults = new EventEmitter<any[]>();
  constructor(private http: HttpClient) { }
  
  onSearch(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    if (input.length >= 3) {  
      this.http.get<any>('https://dummyjson.com/carts')
        .subscribe(response => {
          const carts = response.carts;
          const filteredCarts = carts.filter((cart: { products: { title: string; }[]; }) => 
            cart.products.some((product: { title: string; }) => product.title.toLowerCase().includes(input.toLowerCase()))
          );
          this.searchResults.emit(filteredCarts);
        });
    }
  }
}
 