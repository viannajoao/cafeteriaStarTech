import { Component } from '@angular/core';
import { Client } from '../../models/Client';
import { ClientService } from '../../servico/client.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  clients:Client[] = [];

  constructor(private service:ClientService){}

  selecionar():void{
    this.service.selecionar()
    .subscribe(retorno => this.clients = retorno)
  }

  ngOnInit():void{
    this.selecionar();
    console.log(this.clients)
  }

}
