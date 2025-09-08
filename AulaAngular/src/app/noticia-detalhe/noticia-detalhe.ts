import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noticia-detalhe',
  standalone: false,
  templateUrl: './noticia-detalhe.html',
  styleUrl: './noticia-detalhe.css'
})
export class NoticiaDetalhe implements OnInit {
  id: number = 0;
  x: string = 'Teste';
  caminhoImagem: string =
    'https://facens.br/wp-content/uploads/2021/03/logo-f.png';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'] ?? 0;
  }
  exibirMensagem(): void {
    alert('Olá, esta é uma mensagem!');
  }

}
