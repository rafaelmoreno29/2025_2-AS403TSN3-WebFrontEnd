import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private urlApi: string = 'https://650b1f82dfd73d1fab099fbb.mockapi.io/api/v1/cliente';
  constructor(private http: HttpClient) { }
  listarClientes() {
    return this.http.get<Cliente[]>(this.urlApi);
  }
  inserirCliente(cliente: Cliente) {
    return this.http.post<Cliente>(this.urlApi, cliente);
  }
  excluirCliente(id: number) {
    return this.http.delete(this.urlApi + '/' + id);
  }
}
