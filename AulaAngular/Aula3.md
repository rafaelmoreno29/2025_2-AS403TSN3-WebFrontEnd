# Aula 3 - Resumo das Atividades

## 1. Criação de Novos Componentes
Foram criados vários componentes usando o Angular CLI:

### Componentes Criados:
- **Home**: `ng g c home`
- **Calculadora**: `ng g c calculadora`
- **Página Não Encontrada**: `ng g c PaginaNaoEncontrada`
- **Tela Pai**: `ng g c tela-pai`
- **Tela Filho 1**: `ng g c tela-filho1`
- **Tela Filho 2**: `ng g c TelaFilho2`

## 2. Configuração do Sistema de Rotas
Foi implementado um sistema completo de roteamento no arquivo `app-routing-module.ts`:

### Rotas Configuradas:
```typescript
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'calculadora', component: Calculadora },
  { path: 'listar-clientes', component: ListarCliente },
  {
    path: 'tela-pai', component: TelaPai, children: [
      { path: 'tela-filho1', component: TelaFilho1 },
      { path: 'tela-filho2', component: TelaFilho2 }
    ]
  },
  { path: '**', component: PaginaNaoEncontrada }
];
```

### Características do Roteamento:
- **Rota padrão**: redirecionamento para '/home'
- **Rotas aninhadas**: implementação de child routes (tela-pai/tela-filho1, tela-pai/tela-filho2)
- **Wildcard route**: captura de rotas não encontradas (404)

## 3. Desenvolvimento da Página 404
Criação de uma página de erro 404 profissional e atrativa:

### Características:
- **Layout responsivo** com Bootstrap
- **Ícones animados** do Bootstrap Icons
- **Design centrado** ocupando toda a altura da tela
- **Botões de navegação** para voltar ao início ou página anterior
- **Links úteis** para seções importantes do site
- **Animações CSS** com efeitos de hover e pulse

### Elementos Visuais:
- Ícone de aviso grande com animação
- Número "404" estilizado com gradiente
- Texto explicativo amigável
- Botões com ícones e efeitos de transição
- Links de navegação rápida

## 4. Atualização do Menu Superior
O menu de navegação foi atualizado para incluir todas as novas rotas:

### Itens do Menu:
- **Home**: página inicial
- **Clientes**: listagem de clientes
- **Calculadora**: aplicação de calculadora
- **Tela Pai**: demonstração de rotas aninhadas

### Funcionalidades:
- **routerLink**: navegação declarativa
- **routerLinkActive**: indicação visual da rota ativa
- **Classes Bootstrap**: estilização com nav-pills

## 5. Implementação de Rotas Aninhadas (Child Routes)
Demonstração do conceito de rotas filhas:

### Estrutura:
- **Tela Pai**: componente principal com navigation sidebar
- **Tela Filho 1 e 2**: componentes filhos carregados via `<router-outlet>`

### Layout da Tela Pai:
- **Coluna esquerda** (3/12): menu de navegação para os filhos
- **Coluna direita** (9/12): área de conteúdo dos componentes filhos

## 6. Estrutura Final do Projeto
```
src/app/
├── home/                    (novo)
├── calculadora/             (novo)
├── pagina-nao-encontrada/   (novo)
├── tela-pai/                (novo)
├── tela-filho1/             (novo)
├── tela-filho2/             (novo)
├── listar-cliente/          (aula anterior)
├── destaque/                (aula 1)
├── menu-superior/           (aula 1 - atualizado)
├── noticia/                 (aula 1)
└── app-routing-module.ts    (configurado)
```

## 7. Conceitos Aplicados
- **Single Page Application (SPA)**: navegação sem recarregar a página
- **Roteamento Angular**: configuração de rotas simples e aninhadas
- **Lazy Loading**: preparação para carregamento sob demanda
- **User Experience (UX)**: página 404 amigável
- **Responsive Design**: adaptação a diferentes tamanhos de tela
- **Component Architecture**: organização modular do código

---

Esta aula focou na implementação de um sistema de navegação completo, demonstrando conceitos avançados de roteamento Angular e criação de uma experiência de usuário profissional.
