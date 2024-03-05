import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select'
import { Client } from '../../models/Client';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../servico/client.service';
import { Credito } from '../../models/Credito';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-cartoes',
  standalone: true,
  imports: [MatSelectModule, FormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule,],
  templateUrl: './cartoes.component.html',
  styleUrl: './cartoes.component.css'
})
export class CartoesComponent {

  client = new Client();
  credit = new Credito();

  clients:Client[] = [];
  credits:Credito[] = [];

  clientSelect: string = '';

  constructor(private servico:ClientService, private snackBar: MatSnackBar){}

  selecionar():void{
    this.servico.selecionarClientes()
    .subscribe(retorno => this.clients = retorno)
  }

  cadastrar():void{
    this.credit.limity.toString()
    this.servico.cadastrarCard(this.credit).subscribe(retorno => {
      this.credits.push(retorno)
      this.onSucess();
      this.credit = new Credito()
    }, err => {
      this.onError();
    })
   
    console.log(this.credit)
  }

  onSucess():void{
    this.snackBar.open("Cartao cadastrado com sucesso", '', {
      duration: 3000
    })
  }

  onError():void{
    this.snackBar.open("Erro ao cadastrar", '', {
      duration: 3000
    })
  }


  ngOnInit() {
    this.selecionar()
    console.log(this.clients)
  }

}
