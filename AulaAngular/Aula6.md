# Aula 6 - Resumo das Atividades

## 1. Criação do Modelo Cliente
Foi criado um modelo/interface para representar a entidade Cliente no sistema.

### 1.1. Interface Cliente
```typescript
export interface Cliente {
    id: number;
    nome: string;
    celular: string;
    cidade: string;
}
```

**Características:**
- **Tipagem forte**: definição clara da estrutura dos dados
- **Reutilização**: interface pode ser usada em todo o projeto
- **IntelliSense**: melhor suporte do editor com autocompletar

## 2. Implementação de Diretivas Estruturais
Foram aplicadas as principais diretivas estruturais do Angular no componente `listar-cliente`.

### 2.1. Diretiva @if
Controle condicional para exibir/ocultar a tabela:
```html
@if(mostrarTabela) {
    <table class="table table-hover table-striped">
        <!-- conteúdo da tabela -->
    </table>
}
```

### 2.2. Diretiva @for
Iteração sobre array de clientes:
```html
@for (c of clientes; track $index) {
    <tr>
        <th scope="row">{{c.id}}</th>
        <td>{{c.nome}}</td>
        <td>{{c.celular}}</td>
        <td>{{c.cidade}}</td>
        <td><!-- status dinâmico --></td>
    </tr>
}
```

### 2.3. Diretiva @switch
Exibição condicional de status baseado na cidade:
```html
@switch (c.cidade) {
    @case ("São Paulo") {
        <span class="badge bg-success">Ativo</span>
    }
    @case ("Rio de Janeiro") {
        <span class="badge bg-warning text-dark">Pendente</span>
    }
    @default {
        <span class="badge bg-secondary">Inativo</span>
    }
}
```

## 3. Componente Calcular Média
Criação de um novo componente para demonstrar cálculos acadêmicos.

### 3.1. Funcionalidades
- **Campos de entrada**: AC1, AC2, AF, AG
- **Cálculo automático**: média ponderada baseada nos pesos da faculdade
- **Resultado dinâmico**: exibição da média e situação (Aprovado/Reprovado)

### 3.2. Lógica de Cálculo
```typescript
calcularMedia(): void {
    this.media = (this.ac1 * 0.15) + (this.ac2 * 0.30) +
      (this.ag * 0.10) + (this.af * 0.45);
    if (this.media >= 5) {
      this.situacao = 'Aprovado';
    } else {
      this.situacao = 'Reprovado';
    }
}
```

**Pesos das Avaliações:**
- AC1: 15%
- AC2: 30%
- AG: 10%
- AF: 45%

## 4. Dados Mock no Componente Cliente
Implementação de dados estáticos para simulação:

```typescript
clientes: Cliente[] = [
    { id: 1, nome: 'Ana', celular: '99999-9999', cidade: 'São Paulo' },
    { id: 2, nome: 'Bruno', celular: '88888-8888', cidade: 'Rio de Janeiro' },
    { id: 3, nome: 'Carlos', celular: '77777-7777', cidade: 'Belo Horizonte' }
];
```

## 5. Controle de Visibilidade
Implementação de checkbox para controlar exibição da tabela:

```html
<input type="checkbox" id="mostrarTabela" [(ngModel)]="mostrarTabela" />
<label for="mostrarTabela"> Mostrar Tabela</label>
```

## 6. Configurações de Rota
Adição da nova rota para o componente de calcular média:

```typescript
{ path: 'calcular-media', component: CalcularMedia }
```

## 7. Conceitos Abordados

### 7.1. Diretivas Estruturais Angular 17+
- **@if**: renderização condicional
- **@for**: iteração com tracking
- **@switch/@case**: múltiplas condições

### 7.2. Modelos/Interfaces TypeScript
- **Tipagem forte**: definição de contratos de dados
- **Reutilização**: interfaces compartilhadas
- **Organização**: separação em pasta models/

### 7.3. Two-Way Data Binding
- **[(ngModel)]**: sincronização bidirecional
- **Formulários**: captura de dados do usuário
- **Interatividade**: atualizações em tempo real

### 7.4. Interpolação e Property Binding
- **{{ }}**: exibição de dados dinâmicos
- **Expressões**: cálculos e lógica no template

## 8. Estrutura Final do Projeto
```
src/app/
├── models/
│   └── cliente.ts           (nova interface)
├── calcular-media/          (novo componente)
├── listar-cliente/          (atualizado com diretivas)
├── app-module.ts            (CalcularMedia declarado)
├── app-routing-module.ts    (nova rota)
└── ...
```

## 9. Tecnologias e Recursos Utilizados
- **Angular 17+**: novas diretivas estruturais
- **TypeScript**: interfaces e tipagem
- **Bootstrap**: estilização com badges e tabelas
- **FormsModule**: Two-Way Data Binding

---

Esta aula demonstrou o poder das diretivas estruturais do Angular 17+, criação de modelos de dados tipados e implementação de lógica de negócio em componentes, consolidando conceitos fundamentais de desenvolvimento front-end moderno.