import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tela-filho2',
  standalone: false,
  templateUrl: './tela-filho2.html',
  styleUrl: './tela-filho2.css'
})
export class TelaFilho2 {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      nome: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required,
      Validators.email]),
    });
  }

  submit() {
    if (this.form.valid) {
      alert('Formulário enviado com sucesso!');
    }
  }
}
