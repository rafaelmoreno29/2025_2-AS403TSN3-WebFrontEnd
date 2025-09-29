import { Component } from '@angular/core';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-listar-cliente',
  standalone: false,
  templateUrl: './listar-cliente.html',
  styleUrl: './listar-cliente.css'
})
export class ListarCliente {
  mostrarTabela: boolean = false;
  nome: string = '';
  clientes: Cliente[] = [
    {
      id: 1, nome: 'Ana', celular: '99999-9999',
      cidade: 'São Paulo'
    },
    {
      id: 2, nome: 'Bruno', celular: '88888-8888',
      cidade: 'Rio de Janeiro'
    },
    {
      id: 3, nome: 'Carlos', celular: '77777-7777',
      cidade: 'Belo Horizonte'
    }
  ];
}
