import { Component } from '@angular/core';
import { SearchResultComponent } from './search-result/search-result.component';
import { NgIf } from '@angular/common';
import { SearchResultinteface } from '../../../interface/search-result.interface';
import { Product } from '../../../interface/define';
import { HeaderComponent } from '../header.component';
@Component({
  selector: 'app-center',
  standalone: true,
  imports: [SearchResultComponent,NgIf,HeaderComponent],
  templateUrl: './center.component.html',
  styleUrl: './center.component.css'
})
export class CenterComponent {
  showResult = false
  searchResult :Array<SearchResultinteface>= []
  filteredResults: Array<SearchResultinteface> = [];


  inputValueChangean(event: KeyboardEvent): void{

    const inputElement = event.target as HTMLInputElement
    this.filteredResults = this.searchResult.filter((item : SearchResultinteface) =>{
      return item.title.toLowerCase().includes(inputElement.value.toLowerCase())
    });
    this.showResult = !!this.filteredResults.length
  }
}
