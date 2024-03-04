import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Client } from '../../models/Client';
import { ClientService } from '../../servico/client.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  client = new Client();

  clients:Client[] = [];

  constructor(private service:ClientService){}

  cadastrar():void{

    try{
    this.service.cadastrar(this.client)
    .subscribe(retorno => {
      this.clients.push(retorno)
      this.client = new Client()
    })
    }catch{
      alert("problema ao realizar o cadastro")
    }

    alert("Cliente cadastrado")
    


  }

}
