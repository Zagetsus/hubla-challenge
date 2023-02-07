<h1 align="center">
   Hubla Challenge
</h1>


<p align="center">
  <img alt="challenge" src="https://badgen.net/badge/hubla/Challenge/b">

  <a href="https://github.com/Zagetsus">
    <img alt="Made by Luan Verdelho" src="https://badgen.net/badge/made by/Luan Verdelho/b">
  </a>

<a href="https://github.com/Zagetsus/hubla-challenge/blob/main/LICENSE">
  <img alt="License" src="https://badgen.net/badge/license/MIT/b">
</a>
</p>

<p align="center">
  <a href="#about">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#hosting">Link do desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">Licença</a>
</p>

## Sobre o projeto <a href='about'></a>

Surgiu uma nova demanda urgente e precisamos de uma área exclusiva para fazer o upload de um arquivo das transações
feitas na venda de produtos por nossos clientes.

Nossa plataforma trabalha no modelo criador-afiliado, sendo assim um criador pode vender seus produtos e ter 1 ou mais
afiliados também vendendo esses produtos, desde que seja paga uma comissão por venda.

Sua tarefa é construir uma interface web que possibilite o upload de um arquivo de transações de produtos vendidos,
normalizar os dados e armazená-los em um banco de dados relacional.

Você deve utilizar o arquivo [sales.txt](instructions/sales.txt) para fazer o teste da aplicação. Para mais detalhes veja
em [instructions.md](instructions/instructions.md)

### Requisitos:

- [NodeJS `>18.13.0`](https://nodejs.org/en/)
- [Yarn `>1.22.19`](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

### Tecnologias Utilizadas:

<details>
  <summary><b>Typescript</b> (click to show)</summary>

Esta arquitetura utiliza [**Typescript**](https://www.typescriptlang.org/) como linguagem de codificação. Todas as
features disponíveis pelo framework estão em Typescript e são altamente extensiveis, o que torna todo o código produzido
super flexível para o desenvolvimento de softwares.

Apesar de adicionar uma estrutura diferente há sintaxe do javascript e que muitos programadores poderão não estar
habitualidos a usar, TS trás vários benefícios a codificação:

- Suporte [intellisense](https://code.visualstudio.com/docs/editor/intellisense) para prover auto-completo, informações
  de parametros, informações rápidas, lista de membros, etc., tudo a nível de IDEs de código-fonte.
- Melhor tooling para debug do desenvolvedor, fazendo verificações de erros e garantias de tipagens ao codificar.
- Adição de suporte para design patterns como Abstract, Factories, Decorators, Singles, etc., para facilitar a gerência
  das dependências de forma padronizada e reutilizável.
- Fornece um código mais confiável e explícito, menos sucetível a erros durante a programação.
- Entre outros.

O projeto já possui um linter e o prettier configurados para garantir boa parte da formatação desejada no padrão de
código definido. Arquivos de configuração `.prettierrc` e `.eslintrc.js` explicitam as configurações que dentre as
poucas decisões definem: **utilização obrigatória de aspas SIMPLES** e a **não-utilização de ponto e vírgula**.

Um arquivo `.editorconfig` também dita as configurações acerca da formatação de arquivos: **identação com 2 espaços**,
com **codificação em UTF-8** e com **linha em branco ao final dos arquivos**.

</details>

<details>
  <summary><b>NestJS (back-end)</b> (click to show)</summary>

Nestjs adota extensivamente conceitos como a **Injeção de Dependência** e a **Inversão de Controle**. `Providers` é um
dos principais conceitos dentro do framework, que são basicamente classes anotadas que podem se comportar de diferentes
formas (services, repositories, factories, helpers, ...).

A ideia principal é que um `provider` pode **injetar** uma ou mais dependências. O framework possui uma gerência em
run-time de um design pattern bem comum, que é a de injeção de dependência. O Nest baseou-se profundamente no padrão
adotado pelo Angular e pode ser melhor explorado [na sua documentação](https://angular.io/guide/dependency-injection).

> Isso permite adotar estratégias _SOLID-like_ entre outras que, não necessariamente precisam ser programadas. Nest faz uso da [estrutura de módulos](https://docs.nestjs.com/modules) para organizar seus projetos, um módulo base é encontrado dentro da pasta `src` com o nome de arquivo `app.module.ts`, todo novo módulo deve ser adicionado a sua lista de arquivos para importação.

Este projeto está configurado para trabalhar com a estrutura de módulos e um módulo `root` pode ser encontrado dentro da
pasta `src` como exemplo.

### Outros Links:

- [Providers (Nest)](https://docs.nestjs.com/providers)
- [Circular Dependency (Nest)](https://docs.nestjs.com/fundamentals/circular-dependency)
- [Dependency Injection & Inversion of Control (Nest)](https://docs.nestjs.com/fundamentals/custom-providers)
- [Dependency Inversion Principle (Wikipedia)](https://en.wikipedia.org/wiki/Dependency_inversion_principle)

</details>

<details>
  <summary><b>NextJS {front-end}</b> (click to show)</summary>

Este é um projeto [Next.js](https://nextjs.org/) inicializado
com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado .

Você pode começar a editar a página modificando `pages/index.tsx`. A página é atualizada automaticamente conforme você
edita o arquivo.

[API routes](https://nextjs.org/docs/api-routes/introduction) pode ser acessado em
[http://localhost:3000/api/hello](http://localhost:3000/api/hello). Este endpoint pode ser editado
em `pages/api/hello.ts`.

O Diretório `pages/api` é mapeado para `/api/*`. Os arquivos neste diretório são tratados
como [API routes](https://nextjs.org/docs/api-routes/introduction) em vez de páginas React.

#### Saiba mais

Para saber mais sobre o Next.js, consulte os seguintes recursos:

- [Next.js Documentation](https://nextjs.org/docs) - Aprenda sobre os recursos e a API do Next.js.
- [Learn Next.js](https://nextjs.org/learn) - Um tutorial interativo do Next.js.

Você pode conferir [o repositório no GitHub do Next.js](https://github.com/vercel/next.js/)

#### Deploy on Vercel

A maneira mais fácil de implantar seu aplicativo Next.js é usar
a [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
dos criadores do Next.js.

Confira o [Next.js deployment documentation](https://nextjs.org/docs/deployment) para mais detalhes.

</details>

## Hospedagens <a href='hosting'></a>

#### Heroku

Heroku é uma plataforma amplamente confiável como uma oferta de serviço que permite aos desenvolvedores realizar
implantação, escalonamento e gerenciamento de aplicativos sem complicações. Esta plataforma oferece suporte para uma
ampla gama de linguagens de programação, como Java, Ruby, PHP, Node.js, Python, Scala e Clojure. O Heroku executa
aplicativos por meio de contêineres virtuais conhecidos como Dynos.

#### Vercel

O Vercel é uma plataforma na nuvem para sites estáticos e funções sem servidor que se encaixa de forma ideal no fluxo de
trabalho. Permite que os desenvolvedores hospedem sites e serviços da internet que são implantados instantaneamente,
dimensionados automaticamente e não exigem supervisão, nem configuração.

A plataforma permite que as equipes de front-end façam o trabalho combinando a experiência ideal do desenvolvedor com um
foco obsessivo no desempenho do usuário final.

#### Links do projeto

- **back-end:** https://hubla-challenge-backend.herokuapp.com/
- **front-end:** https://hubla-challenge.vercel.app/

## Licença <a href='license'></a>

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
