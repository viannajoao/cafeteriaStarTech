import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select'
import { Client } from '../../models/Client';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../servico/client.service';

@Component({
  selector: 'app-cartoes',
  standalone: true,
  imports: [MatSelectModule, FormsModule, CommonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './cartoes.component.html',
  styleUrl: './cartoes.component.css'
})
export class CartoesComponent {

  clients:Client[] = [];

  constructor(private servico:ClientService){}

  selecionar():void{
    this.servico.selecionarCartoes()
    .subscribe(retorno => this.clients = retorno)
  }

  ngOnInit() {
    this.selecionar()
    console.log(this.clients)
  }

}
