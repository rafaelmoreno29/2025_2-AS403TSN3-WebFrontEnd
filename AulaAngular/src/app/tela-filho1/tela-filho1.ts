import { Component } from '@angular/core';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-tela-filho1',
  standalone: false,
  templateUrl: './tela-filho1.html',
  styleUrl: './tela-filho1.css'
})
export class TelaFilho1 {
  cliente: Cliente = {};

  submit(form: any) {
    if (form.valid) {
      alert('Cliente cadastrado com sucesso!');
    } else {
      form.control.markAllAsTouched();
    }
  }
}
