import { Component } from '@angular/core';
import { sidebarnavigation } from '../../../../interface/sidebar-navigation.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  categories: Array<sidebarnavigation> = [
    {
      imageName: 'shos',
      categoryName : 'shoes for man'
    },
    {
      imageName: 'mayka',
      categoryName: 'mayka for man'
    },
    {
      imageName: 'pets',
      categoryName : 'pets for man'
    }
  ]
}
