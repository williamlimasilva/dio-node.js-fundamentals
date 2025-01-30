# Projeto Champions API

## Descrição

API RESTful para gerenciamento de informações de clubes e jogadores de futebol.

## Tecnologias Utilizadas

- **Node.js:** Ambiente de execução JavaScript no servidor.
- **Express.js:** Framework web para Node.js, utilizado para construir a API.
- **TypeScript:** Superset de JavaScript que adiciona tipagem estática.
- **Cors:** Middleware para habilitar o Cross-Origin Resource Sharing (CORS).
- **tsup:** Bundler para empacotar o código TypeScript.
- **tsx:** Executor de TypeScript para desenvolvimento.

## Arquitetura de Software

O projeto utiliza uma arquitetura em camadas, seguindo os princípios de separação de responsabilidades. As camadas principais são:

- **Controller:** Responsável por receber as requisições HTTP, validar os dados de entrada e delegar a lógica de negócio para a camada de serviço.
- **Service:** Contém a lógica de negócio da aplicação, orquestrando as operações e utilizando os repositórios para acessar os dados.
- **Repository:** Responsável por abstrair o acesso aos dados, neste caso, utilizando arquivos JSON como fonte de dados.
- **Model:** Define a estrutura dos dados (entidades) utilizadas na aplicação.
- **Routes:** Define as rotas da API e associa cada rota ao seu respectivo controller.
- **App:** Configuração principal do Express.js, incluindo middlewares e rotas.
- **Server:** Ponto de entrada da aplicação, responsável por iniciar o servidor HTTP.

**Padrões de Design:**

- **RESTful API:** A API segue os princípios REST para uma comunicação eficiente e escalável.
- **Camadas (Layers):** O projeto é estruturado em camadas para promover a organização, modularidade e testabilidade do código.

## Endpoints

A API expõe os seguintes endpoints:

### Jogadores (Players)

- **GET /api/players:** Retorna uma lista de todos os jogadores.
- **POST /api/players:** Adiciona um novo jogador.
- **GET /api/players/:id:** Retorna um jogador específico pelo ID.
- **PATCH /api/players/:id:** Atualiza parcialmente um jogador existente pelo ID.
- **DELETE /api/players/:id:** Remove um jogador pelo ID.

### Clubes (Clubs)

- **GET /api/clubs:** Retorna uma lista de todos os clubes.

## Modelo de Dados

- **PlayerModel:**
  ```typescript
  interface PlayerModel {
    id: number;
    name: string;
    club: string;
    statistics: StatisticsModel;
  }
  ```
- **ClubModel:**
  ```typescript
  interface ClubModel {
    id: number;
    name: string;
    players: PlayerModel[];
  }
  ```
- **StatisticsModel:**
  ```typescript
  interface StatisticsModel {
    goals: number;
    assists: number;
    matches: number;
  }
  ```

## Como Executar

1. **Instale as dependências:**

   ```bash
   npm install
   ```

2. **Execute o servidor em modo de desenvolvimento:**

   ```bash
   npm run start:dev
   ```

   O servidor estará disponível em `http://localhost:<porta>` (a porta é definida na variável de ambiente `PORT` ou padrão 3000).

## Estrutura de Pastas

```
.
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
├── docs
│   └── arch
│       ├── arch-editavel.tldr
│       └── arch.png
└── src
    ├── server.ts
    ├── app
    │   └── app.ts
    ├── controllers
    │   ├── clubs-controller.ts
    │   └── players-controller.ts
    ├── data
    │   ├── clubs.json
    │   └── players.json
    ├── models
    │   ├── club-model.ts
    │   ├── http-response-model.ts
    │   ├── player-model.ts
    │   └── statistics-model.ts
    ├── repositories
    │   ├── clubs-repository.ts
    │   └── players-repository.ts
    ├── routes
    │   └── routes.ts
    ├── services
    │   ├── clubs-service.ts
    │   └── players-service.ts
    └── utils
        ├── charset-enum.ts
        ├── database-enums.ts
        └── http-helper.ts
```

## Documentação Adicional

Para mais detalhes sobre a arquitetura, consulte o diagrama de arquitetura em `docs/arch/arch.png`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.
