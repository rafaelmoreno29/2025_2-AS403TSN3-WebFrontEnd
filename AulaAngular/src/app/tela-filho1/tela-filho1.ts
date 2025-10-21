import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { StorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-tela-filho1',
  standalone: false,
  templateUrl: './tela-filho1.html',
  styleUrl: './tela-filho1.css'
})
export class TelaFilho1 implements OnInit {
  cliente: Cliente = {};

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    if (this.storageService.getSessionStorage('cliente')) {
      this.cliente = this.storageService.getSessionStorage('cliente');
    }
  }

  submit(form: any) {
    if (form.valid) {
      this.storageService.setSessionStorage('cliente', this.cliente);
      alert('Cliente cadastrado com sucesso!');
    } else {
      form.control.markAllAsTouched();
    }
  }
}
