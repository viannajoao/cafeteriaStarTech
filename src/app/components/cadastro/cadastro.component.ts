import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule,  } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Client } from '../../models/Client';
import { ClientService } from '../../servico/client.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule,],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  client = new Client();

 
  constructor(private service: ClientService, private snackBar: MatSnackBar) { }

  cadastrar(): void {


    this.client.cpf.toString();
    this.client.tel.toString();

    if (this.client.cpf && this.client.tel && this.client.name && this.client.email != '') {
      const add = this.service.cadastrar(this.client)

      add.subscribe(retorno =>  this.onSucess(), error => this.onCpf() );
     
        console.log(this.client)

      this.client = new Client();
    }else{
        this.onErro()
    }

  }

  onSucess(){
    this.snackBar.open("Usuario cadastrado com sucesso", '', {
      duration: 5000
    })
  }

  onErro(){
    this.snackBar.open("Preencha todos os campos para efetuar o cadastrado corretamente", '', {
      duration: 5000
    })
  }

  onCpf(){
    this.snackBar.open("CPF invalido ou E-mail ja cadastrado", '', {duration: 3000})
  }


}
