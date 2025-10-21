import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-tela-filho2',
  standalone: false,
  templateUrl: './tela-filho2.html',
  styleUrl: './tela-filho2.css'
})
export class TelaFilho2 {
  form: FormGroup;

  constructor(private clienteService: ClienteService) {
    this.form = new FormGroup({
      nome: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required,
      Validators.email]),
    });
  }
  submit() {
    if (this.form.valid) {
      this.clienteService.
        inserirCliente(this.form.value).subscribe({
          next: () => {
            alert('Formulário enviado com sucesso!');
          },
          error: (error: any) => {
            console.error('Erro ao cadastrar cliente:', error);
          }
        });
    }
  }
}
