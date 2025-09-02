import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Calculadora } from './calculadora/calculadora';
import { ListarCliente } from './listar-cliente/listar-cliente';
import { Home } from './home/home';
import { PaginaNaoEncontrada } from './pagina-nao-encontrada/pagina-nao-encontrada';
import { TelaPai } from './tela-pai/tela-pai';
import { TelaFilho1 } from './tela-filho1/tela-filho1';
import { TelaFilho2 } from './tela-filho2/tela-filho2';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'calculadora', component: Calculadora },
  { path: 'listar-clientes', component: ListarCliente },
  {
    path: 'tela-pai', component: TelaPai, children: [
      { path: 'tela-filho1', component: TelaFilho1 },
      { path: 'tela-filho2', component: TelaFilho2 }
    ]
  },
  { path: '**', component: PaginaNaoEncontrada }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
