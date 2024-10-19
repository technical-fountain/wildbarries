import { Pipe, PipeTransform } from '@angular/core';
import { ProductItemOfProductCartInterface } from '../interfaces/product-cart.interface';

@Pipe({
  name: 'filterData',
  standalone: true
})
export class FilterDataPipe implements PipeTransform {

  transform(items: Array<ProductItemOfProductCartInterface>,inputValue: string): Array<ProductItemOfProductCartInterface> {
    if (!inputValue) {
      return items
    }
    return items.filter((item) => {
      return item.title.toLowerCase().includes(inputValue)
    });
  }


}
