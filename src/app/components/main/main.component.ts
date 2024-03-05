import { Component } from '@angular/core';
import { Client } from '../../models/Client';
import { ClientService } from '../../servico/client.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatDividerModule, MatTableModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  clients:Client[] = [];
  clientsFiltered: Client[] = [];
  clientSearch: string = "";
  displayedColumns = [ 'cpf' , 'name', 'email', 'tel'];

  constructor(private service:ClientService){}

  selecionar():void{
    this.service.selecionar()
    .subscribe((retorno) => {
      this.clients = retorno;
      this.clientsFiltered = this.clients;
    },
      (error) => {
        console.log(error);
      }
    )
  }

  pesquisar() {
    console.log(this.clientsFiltered)
    this.clientsFiltered = this.clients.filter(usuario =>
      usuario.name.toLowerCase().includes(this.clientSearch.toLowerCase())
    );
  }

  ngOnInit():void{
    this.selecionar();
    console.log(this.clients)
  }

}
