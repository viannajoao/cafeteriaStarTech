import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';


 export const routes: Routes = [
  {
    path: 'cadastrar',
    component: CadastroComponent
  },
  {
    path: '',
    component: MainComponent
  }
];


