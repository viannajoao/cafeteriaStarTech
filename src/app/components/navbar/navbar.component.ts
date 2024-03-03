import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @ViewChild("campoButton") compoButton!: ElementRef;

  visualizar(){
    console.log(this.compoButton);
    this.compoButton.nativeElement.style.backgroundColor = 'green'
  }

}
