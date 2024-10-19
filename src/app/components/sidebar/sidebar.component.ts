import { Component, Input } from '@angular/core';
import { SidebarCategoriesInterface } from '../../interfaces/sidebarCategories.inteface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  @Input() showSideBar!:boolean
  categories: Array<SidebarCategoriesInterface> = [
    {
      imageName: 'women',
      categoryName: 'Women'
    },
    {
      imageName: 'shoes',
      categoryName: 'Shoes'
    },
    {
      imageName: 'babies',
      categoryName: 'Babies'
    },
    {
      imageName: 'men',
      categoryName: 'Men'
    },
    {
      imageName: 'home',
      categoryName: 'Home'
    },
    {
      imageName: 'beauty',
      categoryName: 'Beauty'
    },
    {
      imageName: 'accesories',
      categoryName: 'Accesories'
    },
    {
      imageName: 'electronics',
      categoryName: 'Electronics'
    },
    {
      imageName: 'toys',
      categoryName: 'Toys'
    },
    {
      imageName: 'furniture',
      categoryName: 'Furniture'
    },
    {
      imageName: 'adults',
      categoryName: 'Products for adults'
    },
    {
      imageName: 'food',
      categoryName: 'Food'
    },
    {
      imageName: 'home-electronics',
      categoryName: 'Home Electronics'
    },
    {
      imageName: 'pets',
      categoryName: 'Zoo Products'
    },
    {
      imageName: 'sport',
      categoryName: 'Sport'
    },
    {
      imageName: 'auto-products',
      categoryName: 'Auto Products'
    },
    {
      imageName: 'school',
      categoryName: 'School'
    },
    {
      imageName: 'books',
      categoryName: 'Books'
    },
    {
      imageName: 'for-repair',
      categoryName: 'For repair'
    },
    {
      imageName: 'garden',
      categoryName: 'Garden'
    },
    {
      imageName: 'alcohol',
      categoryName: 'Alcohols'
    },
    {
      imageName: 'health',
      categoryName: 'Health'
    },
    {
      imageName: 'office',
      categoryName: 'Office'
    },
    {
      imageName: 'actions',
      categoryName: 'Actions'
    },
  ]
 
}
