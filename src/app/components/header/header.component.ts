import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LeftComponent } from "./left/left.component";
import { CenterComponent } from './center/center.component';
import { RigthComponent } from './rigth/rigth.component';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LeftComponent, CenterComponent, RigthComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input() hideSearchedResult!: boolean
  @Output() toggleSideBarFromHeader = new EventEmitter<void>()

  toggleSideBar(): void {
    this.toggleSideBarFromHeader.emit()
  }

}



