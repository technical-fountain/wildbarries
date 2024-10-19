import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interface/define';
@Pipe({
  name: 'searchFilterPipe',
  standalone: true
})
export class SearchFilterPipePipe implements PipeTransform {
  transform(products: any[], searchTerm: string): any[] {
    if (!products || !searchTerm) {
      return products;
    }
    return products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
