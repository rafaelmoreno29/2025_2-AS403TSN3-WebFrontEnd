# Aula 2 - Resumo das Atividades

## 1. Criação do Componente Listar Cliente
- Criado o novo componente `listar-cliente` usando o Angular CLI:
  ```sh
  ng generate component listar-cliente
  ```
- Estrutura criada:
  - `listar-cliente.ts`: componente TypeScript
  - `listar-cliente.html`: template HTML
  - `listar-cliente.css`: estilos do componente
  - `listar-cliente.spec.ts`: arquivo de testes

## 2. Desenvolvimento do Template HTML
- Implementação de interface para listagem de clientes
- Criação de formulário de pesquisa com:
  - Campo de input para busca
  - Botão "Pesquisar"
  - Botão "Novo" com ícone do Bootstrap Icons
- Estrutura básica para exibição da tabela de clientes
- Uso de classes do Bootstrap para layout responsivo

## 3. Instalação do Bootstrap Icons
- Instalação do pacote bootstrap-icons:
  ```sh
  npm i bootstrap-icons
  ```
- Configuração no `angular.json` para incluir os estilos dos ícones:
  ```json
  "styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "node_modules/bootstrap-icons/font/bootstrap-icons.css",
    "src/styles.css"
  ]
  ```

## 4. Implementação de Ícones
- Utilização de ícones do Bootstrap Icons no template
- Exemplo de uso: `<i class="bi bi-plus"></i>` no botão "Novo"
- Configuração correta para exibição dos ícones

## 5. Estrutura do Projeto Atual
```
src/app/
├── destaque/
├── menu-superior/
├── noticia/
├── listar-cliente/        (novo componente)
├── app.ts
├── app.html
├── app.css
├── app-module.ts
└── app-routing-module.ts
```
---

Esta aula focou na criação de um novo componente para listagem de clientes, integração com Bootstrap Icons e configuração adequada dos assets para exibição de ícones na interface.
