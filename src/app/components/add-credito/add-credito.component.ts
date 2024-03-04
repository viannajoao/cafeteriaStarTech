import { Component } from '@angular/core';
import { ClientService } from '../../servico/client.service';
import { Client } from '../../models/Client';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import { Credito } from '../../models/Credito';

@Component({
  selector: 'app-add-credito',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatDividerModule, MatTableModule],
  templateUrl: './add-credito.component.html',
  styleUrl: './add-credito.component.css'
})
export class AddCreditoComponent {

  clients:Client[] = [];
  clientsFiltered: Client[] = [];
  termoPesquisa: string = "";
   displayedColumns = [ 'numero' , 'cliente', 'limite', 'validade'];

   credits:Credito[] = [];
   creditsFiltered:Credito[] = [];


  constructor(private service:ClientService){}

  selecionarCard():void{
    this.service.selecionarCartoes()
    .subscribe( retorno => this.credits = retorno)
  }

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
    this.clientsFiltered = this.clients.filter(usuario =>
      usuario.name.toLowerCase().includes(this.termoPesquisa.toLowerCase())
    );
  }

  ngOnInit():void{
    this.selecionarCard();
    console.log(this.credits)
  }


}
