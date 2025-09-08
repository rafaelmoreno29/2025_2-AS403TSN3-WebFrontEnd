import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuSuperior } from './menu-superior/menu-superior';
import { Noticia } from './noticia/noticia';
import { Destaque } from './destaque/destaque';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListarCliente } from './listar-cliente/listar-cliente';
import { Home } from './home/home';
import { Calculadora } from './calculadora/calculadora';
import { PaginaNaoEncontrada } from './pagina-nao-encontrada/pagina-nao-encontrada';
import { TelaPai } from './tela-pai/tela-pai';
import { TelaFilho1 } from './tela-filho1/tela-filho1';
import { TelaFilho2 } from './tela-filho2/tela-filho2';
import { NoticiaDetalhe } from './noticia-detalhe/noticia-detalhe';

@NgModule({
  declarations: [
    App,
    MenuSuperior,
    Noticia,
    Destaque,
    ListarCliente,
    Home,
    Calculadora,
    PaginaNaoEncontrada,
    TelaPai,
    TelaFilho1,
    TelaFilho2,
    NoticiaDetalhe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
