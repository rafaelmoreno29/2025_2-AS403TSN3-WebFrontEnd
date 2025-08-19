# Aula 1 - Passo a Passo do Projeto Angular

## 1. Criação do Projeto Angular
- Utilizado o Angular CLI para criar o projeto base:
  ```sh
  ng new AulaAngular --defaults
  ```
- Estrutura inicial criada com pastas `src/`, `app/`, arquivos de configuração e dependências.

## 2. Estrutura de Pastas e Arquivos
- Organização dos componentes dentro de `src/app/`:
  - `destaque/`: componente para destaques.
  - `menu-superior/`: componente para o menu superior.
  - `noticia/`: componente para notícias.
- Cada componente possui arquivos `.ts`, `.html`, `.css` e `.spec.ts`.

## 3. Criação dos Componentes
- Comandos utilizados para criar os componentes:
  ```sh
  ng generate component destaque
  ng generate component menu-superior
  ng generate component noticia
  ```
- Ajuste dos arquivos gerados para separar HTML, CSS e lógica TypeScript.

## 4. Edição dos Componentes
- Implementação do layout e estilos em cada componente:
  - `menu-superior.html`: estrutura do menu de navegação.
  - `destaque.html`: área de destaque da página.
  - `noticia.html`: exibição de notícias.
- Estilização nos arquivos `.css` de cada componente.

## 5. Configuração de Rotas
- Criação do arquivo de rotas `app-routing-module.ts`.
- Definição das rotas para navegação entre os componentes.
- Importação do módulo de rotas no `app-module.ts`.

## 6. Edição do App Principal
- Modificação do arquivo `app.html` para incluir os componentes:
  ```html
  <app-menu-superior></app-menu-superior>
  <router-outlet></router-outlet>
  ```
- Ajuste do arquivo `app.ts` para importar e declarar os componentes.

## 7. Execução do Projeto
- Comando para rodar o servidor de desenvolvimento:
  ```sh
  npm start
  ```
- Acesso ao projeto pelo navegador em `http://localhost:4200`.

## 8. Testes
- Estrutura de arquivos `.spec.ts` para testes unitários de cada componente.
- Comando para rodar os testes:
  ```sh
  npm test
  ```

## 9. Outras Configurações
- Ajuste dos arquivos de configuração (`angular.json`, `tsconfig.json`) conforme necessário.
- Inclusão de favicon e ajustes no `index.html`.

---

Este passo a passo documenta todas as etapas realizadas na primeira aula para a criação e estruturação do projeto Angular.
