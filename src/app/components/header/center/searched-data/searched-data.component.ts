import { Component, Input } from '@angular/core';
import { SearchedDataInterface } from '../../../../interfaces/searchedData.interface';
import { NgFor, NgIf } from '@angular/common';
import { ProductCartInterface } from '../../../../interfaces/product-cart.interface';


@Component({
  selector: 'app-searched-data',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './searched-data.component.html',
  styleUrl: './searched-data.component.scss'
})
export class SearchedDataComponent {

  @Input() filteredResults!: Array<ProductCartInterface>

}
