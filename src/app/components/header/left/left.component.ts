import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LoginComponent } from '../rigth/login/login.component';

@Component({
  selector: 'app-left',
  standalone: true,
  imports: [SidebarComponent,NgIf,RouterLink],
  templateUrl: './left.component.html',
  styleUrl: './left.component.css'
})
export class LeftComponent {
  isOpened = false

  toggleSidebar(): void{
    console.log('toggle')
    this.isOpened = !this.isOpened;
  }
}
