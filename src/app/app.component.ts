import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MainComponent, FormsModule, HttpClientModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cafeteria';


}
