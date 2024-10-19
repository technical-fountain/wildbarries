import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interface/define';


@Pipe({
  name: 'checkingdata',
  standalone: true
})
export class CheckingdataPipe implements PipeTransform {

  transform(products: Product[], searchTerm: string): Product[] {
    if (!products || !searchTerm) {
      return products;
    }
    return products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
