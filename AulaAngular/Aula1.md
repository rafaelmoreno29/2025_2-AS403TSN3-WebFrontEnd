# Aula 1 - Passo a Passo do Projeto Angular

## 1. Criação do Projeto Angular
- Utilizado o Angular CLI para criar o projeto base com suporte a módulos e roteamento:
  ```sh
  ng new AulaAngular --standalone=false --routing
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
  - `menu-superior.html`: estrutura do menu de navegação baseado em bootstrap

## 5. Configuração de Rotas
- O projeto foi criado com suporte a rotas (`--routing`), mas nenhuma rota foi configurada ou editada nesta aula.

## 6. Edição do App Principal
- Modificação do arquivo `app.html` para incluir os componentes:
  ```html
  <app-menu-superior></app-menu-superior>
  <router-outlet></router-outlet>
  ```

## 7. Execução do Projeto
- Comando para rodar o servidor de desenvolvimento:
  ```sh
  ng serve -o
  ```
- Acesso ao projeto pelo navegador em `http://localhost:4200`.


## 8. Instalação do ng-bootstrap
- Instalação do pacote ng-bootstrap para utilizar componentes do Bootstrap no Angular:
  ```sh
  ng add @ng-bootstrap/ng-bootstrap
  ```

---

Este passo a passo documenta todas as etapas realizadas na primeira aula para a criação e estruturação do projeto Angular.
