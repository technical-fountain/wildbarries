import { Component, EventEmitter, Output } from '@angular/core';
import { SidebarComponent } from "../../sidebar/sidebar.component";
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-left',
  standalone: true,
  imports: [SidebarComponent,RouterLink],
  templateUrl: './left.component.html',
  styleUrl: './left.component.scss'
})
export class LeftComponent {

  @Output() toggleSideBar = new EventEmitter<void>()

  handleClick(): void {
    this.toggleSideBar.emit()
  }

}
