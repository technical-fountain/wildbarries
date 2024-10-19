import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkingSidebar',
  standalone: true
})
export class CheckingSidebarPipe implements PipeTransform {

  transform(
    colors: Array<string>,
    sidebarIsopened: boolean,
    colorindex: number | null 
   ): boolean {
   return sidebarIsopened 
     && colors[colors.length - 1] === 'green'
     && colorindex !== null 
     && colorindex % 2 === 0;
 }
}
