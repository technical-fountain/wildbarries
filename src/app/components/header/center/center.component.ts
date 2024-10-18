import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchedDataComponent } from './searched-data/searched-data.component';
import { NgClass, NgIf } from '@angular/common'
import { HttpClient } from '@angular/common/http';
import { CartsInterface } from '../../../interfaces/carts.interface';
import { ProductCartInterface } from '../../../interfaces/product-cart.interface';




@Component({
  selector: 'app-center',
  standalone: true,
  imports: [NgIf, SearchedDataComponent, FormsModule, NgClass],
  templateUrl: './center.component.html',
  styleUrl: './center.component.scss'
})
export class CenterComponent {

  @Input() hideSearchedResult!: boolean;

  hideSearchIcons: boolean = true
  searchResults: Array<ProductCartInterface> = []
  filteredResults: Array<ProductCartInterface> = []
  searchTimeout!: any
  inputValue!: string | null

  constructor(private httpClient: HttpClient) {

  }

  inputValueChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout)
    }
    if (!inputElement.value) {
      this.filteredResults = []
      return
    }
    this.searchTimeout = setTimeout(() => {

      this.httpClient.get<CartsInterface>('https://dummyjson.com/carts')
        .subscribe((data: CartsInterface) => {
          this.filteredResults = data.carts.filter((item: ProductCartInterface) => {
            return item.products[0].title.toLowerCase().includes(inputElement.value.toLowerCase())

          })
          console.log(this.filteredResults)
        },
          () => {
            alert('error loading data')
          })
    }, 1000)

  }


  removeInputValue(): void {
    this.inputValue = null;
  }


}
