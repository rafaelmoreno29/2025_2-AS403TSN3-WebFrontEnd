import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  standalone: false,
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css'
})
export class Calculadora {
  n1: number = 0;
  n2: number = 0;
  resultado: number = 0;
  somar(): void {
    this.resultado = this.n1 + this.n2;
  }
  subtrair(): void {
    this.resultado = this.n1 - this.n2;
  }
  multiplicar(): void {
    this.resultado = this.n1 * this.n2;
  }
  dividir(): void {
    this.resultado = this.n1 / this.n2;
  }
}
