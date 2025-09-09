# Aula 4 - Resumo das Atividades

## 1. Data Binding no Angular
Esta aula focou na implementação dos diferentes tipos de **Data Binding** no Angular, demonstrando a comunicação entre componente e template.

### 1.1. Interpolação (String Interpolation)
Exibição de dados do componente no template usando `{{ }}`:

```html
<p>noticia-detalhe works! Id: {{ id }}</p>
<p>Valor de x: {{ x }}</p>
```

**Características:**
- Converte automaticamente para string
- Permite expressões JavaScript simples
- Avaliado dinamicamente

### 1.2. Property Binding
Vinculação de propriedades do componente aos atributos HTML usando `[propriedade]`:

```html
<img [src]="caminhoImagem">
```

**Características:**
- Fluxo unidirecional (componente → template)
- Permite vinculação de qualquer propriedade HTML
- Mais flexível que interpolação para propriedades

### 1.3. Event Binding
Captura de eventos do template para métodos do componente usando `(evento)`:

```html
<button (click)="exibirMensagem()">Mensagem</button>
```

**Características:**
- Fluxo unidirecional (template → componente)
- Permite capturar qualquer evento DOM
- Executa métodos do componente

### 1.4. Two-Way Binding
Vinculação bidirecional usando `[(ngModel)]`:

```html
<input [(ngModel)]="x" type="text">
```

**Características:**
- Fluxo bidirecional (componente ↔ template)
- Sincronização automática
- Requer importação do `FormsModule`

## 2. Desenvolvimento da Calculadora
Implementação completa de uma calculadora funcional demonstrando todos os conceitos de Data Binding.

### 2.1. Template da Calculadora
```html
<div class="row">
    <div class="col-12">
        <label class="form-label">Num 1</label>
        <input type="number" class="form-control" [(ngModel)]="n1">
    </div>
    <div class="col-12">
        <label class="form-label">Num 2</label>
        <input type="number" class="form-control" [(ngModel)]="n2">
    </div>
    <div class="col-12">
        <button class="btn btn-primary" (click)="somar()">Somar</button>
        <button class="btn btn-danger" (click)="subtrair()">Subtrair</button>
        <button class="btn btn-success" (click)="multiplicar()">Multiplicar</button>
        <button class="btn btn-warning" (click)="dividir()">Dividir</button>
    </div>
    <div class="col-12">
        <label class="form-label">Resultado</label>
        <input type="number" class="form-control" [ngModel]="resultado" readonly>
    </div>
</div>
```

### 2.2. Lógica do Componente
```typescript
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
```

## 3. Criação do Componente Notícia Detalhe
Desenvolvimento de um componente para demonstrar todos os tipos de Data Binding.

### 3.1. Recursos Implementados
- **Interpolação**: exibição do ID da notícia
- **Property Binding**: exibição de imagem dinâmica
- **Event Binding**: botão com função de alerta
- **Two-Way Binding**: campo de texto sincronizado

### 3.2. Funcionalidades
```typescript
export class NoticiaDetalhe implements OnInit {
  id: number = 0;
  x: string = 'Teste';
  caminhoImagem: string = 'https://facens.br/wp-content/uploads/2021/03/logo-f.png';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'] ?? 0;
  }

  exibirMensagem(): void {
    alert('Olá, esta é uma mensagem!');
  }
}
```

## 4. Parâmetros de Rota
Implementação de rota com parâmetros para o componente NotíciaDetalhe.

### 4.1. Configuração da Rota
```typescript
{ path: 'noticia-detalhe/:id', component: NoticiaDetalhe }
```

### 4.2. Captura do Parâmetro
- Uso do `ActivatedRoute` para acessar parâmetros
- Implementação do `OnInit` para inicialização
- Operador nullish coalescing (`??`) para valor padrão

## 5. Configuração do FormsModule
Adição do `FormsModule` ao módulo da aplicação para habilitar o Two-Way Binding.

```typescript
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule,
    FormsModule  // Adicionado para [(ngModel)]
  ]
})
```

## 6. Conceitos Abordados

### 6.1. Data Binding
- **Interpolação**: `{{ propriedade }}`
- **Property Binding**: `[propriedade]="valor"`
- **Event Binding**: `(evento)="metodo()"`
- **Two-Way Binding**: `[(ngModel)]="propriedade"`

### 6.2. Lifecycle Hooks
- **OnInit**: inicialização do componente
- **Constructor**: injeção de dependências

### 6.3. Roteamento Avançado
- **Parâmetros de rota**: `:parametro`
- **ActivatedRoute**: acesso aos parâmetros
- **Snapshot**: captura instantânea da rota

### 6.4. Módulos Angular
- **FormsModule**: formulários reativos
- **Imports**: dependências do módulo

## 7. Estrutura Final do Projeto
```
src/app/
├── calculadora/             (implementado)
├── noticia-detalhe/         (novo componente)
├── home/
├── pagina-nao-encontrada/
├── tela-pai/
├── tela-filho1/
├── tela-filho2/
├── listar-cliente/
├── destaque/
├── menu-superior/
├── noticia/
├── app-module.ts           (FormsModule adicionado)
└── app-routing-module.ts   (nova rota com parâmetro)
```

## 8. Tecnologias e Conceitos Utilizados
- **Angular Data Binding**: comunicação componente-template
- **FormsModule**: formulários Angular
- **ActivatedRoute**: roteamento com parâmetros
- **TypeScript**: tipagem e lógica
- **Bootstrap**: estilização dos componentes
- **Lifecycle Hooks**: gerenciamento do ciclo de vida

---

Esta aula estabeleceu as bases fundamentais da comunicação entre componente e template no Angular, demonstrando na prática todos os tipos de Data Binding através de exemplos funcionais como a calculadora e o componente de notícia com parâmetros de rota.
