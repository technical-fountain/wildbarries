import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgStyle } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/header/left/sidebar/sidebar.component';
import { CheckingSidebarPipe } from './pipe/checking-sidebar.pipe';
import { FormsModule } from '@angular/forms';
import { Validators, FormBuilder,FormGroup,FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,HeaderComponent,FooterComponent,MainComponent,SidebarComponent, CheckingSidebarPipe,FormsModule,NgStyle,ReactiveFormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
