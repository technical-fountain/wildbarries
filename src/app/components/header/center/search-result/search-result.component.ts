import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SearchResultinteface } from '../../../../interface/search-result.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [NgFor],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent implements OnChanges {
  @Input() searchResult!: Array<SearchResultinteface>;

  ngOnChanges(changes:SimpleChanges):void{
    console.log(changes['https://dummyjson.com/carts'])
  }
}