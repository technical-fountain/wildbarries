import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'makeArray',
  standalone: true
})
export class MakeArrayPipe implements PipeTransform {

  transform(data:string): Array<string>{
    return [...data];
  }

}
