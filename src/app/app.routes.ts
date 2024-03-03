import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { CartoesComponent } from './components/cartoes/cartoes.component';


 export const routes: Routes = [
  {
    path: 'cadastrar',
    component: CadastroComponent
  },
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'cartoes',
    component: CartoesComponent
  }
];


