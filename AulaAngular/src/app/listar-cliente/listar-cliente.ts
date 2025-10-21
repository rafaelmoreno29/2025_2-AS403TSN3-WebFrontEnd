import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-listar-cliente',
  standalone: false,
  templateUrl: './listar-cliente.html',
  styleUrl: './listar-cliente.css'
})
export class ListarCliente implements OnInit {
  mostrarTabela: boolean = true;
  nome: string = '';
  clienteSelecionado: Cliente | null = null;
  clientes: Cliente[] = [];
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.buscarClientes();
  }
  buscarClientes(): void {
    this.clienteService.listarClientes().subscribe({
      next: (data: Cliente[]) => {
        this.clientes = data;
      },
      error: (error: any) => {
        console.error('Erro ao buscar clientes:', error);
      }
    });
  }
}
