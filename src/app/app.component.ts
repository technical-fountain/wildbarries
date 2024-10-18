import { Component, HostListener } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { MainComponent } from "./components/main/main.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardService } from './services/card.service';
import { FavorsService } from './services/favors.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MainComponent, FooterComponent, SidebarComponent, NgClass, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  @HostListener('window:beforeunload', ['$event'])
  beforeOnload(event: Event) {
    event.preventDefault();
    this.cardService.saveInLocaleStorage();
    this.favorService.saveInLocaleStorage();
  }

  @HostListener('mousedown', ['$event'])
  onMousedown(event: Event) {
    const eventTarget = event.target as HTMLElement

    if (eventTarget.className != 'searched-data' ||
      eventTarget.parentElement?.className != 'searched-data') {
      this.hideSearchedResult = false
    }
    if (eventTarget.id == 'searchInput') {
      this.hideSearchedResult = true
    }
    if (eventTarget.className != 'sidebar' && eventTarget.className != 'menu-burger') {
      this.showSideBar = false
    }

  }

  title = 'wildberries';
  hideSearchedResult: boolean = false;
  showSideBar: boolean = false;

  constructor(
    private cardService: CardService,
    private favorService: FavorsService) {

  }

  toggleSideBar(): void {
    this.showSideBar = !this.showSideBar
  }

}
