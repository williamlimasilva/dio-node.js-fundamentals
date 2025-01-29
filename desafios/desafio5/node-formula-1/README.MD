# Formula 1 API

## Descrição

Este projeto é uma API para fornecer informações sobre equipes e pilotos de Fórmula 1. A API é construída usando o framework Fastify e está configurada para permitir requisições CORS de qualquer origem.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Fastify**: Framework web rápido e de baixa sobrecarga para Node.js.
- **@fastify/cors**: Plugin para habilitar CORS no Fastify.

## Estrutura de Pastas

```
└── 📁node-formula-1
    ├── 📁.github
    │   └── 📁assets
    │       └── blue-saiyan-bg.png
    ├── 📁src
    │   └── server.ts
    ├── .env
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    ├── README.MD
    └── tsconfig.json

```

- **.env**: Arquivo de configuração de variáveis de ambiente.
- **.github/**: Diretório para configurações e assets do GitHub.
- **.gitignore**: Arquivo para especificar quais arquivos e diretórios devem ser ignorados pelo Git.
- **package.json**: Arquivo de configuração do npm, contendo scripts e dependências do projeto.
- **README.MD**: Arquivo de documentação do projeto.
- **src/**: Diretório contendo o código-fonte do projeto.
  - **server.ts**: Arquivo principal do servidor Fastify.
- **tsconfig.json**: Arquivo de configuração do TypeScript.

## Endpoints

### GET /teams

Retorna uma lista de todas as equipes de Fórmula 1.

**Resposta:**

```json
{
  "teams": [
    {
      "id": 1,
      "name": "Team Ferrari",
      "base": "Maranello, Italy"
    },
    ...
  ]
}
```

### GET /drivers

Retorna uma lista de todos os pilotos de Fórmula 1.

**Resposta:**

```json
{
  "drivers": [
    {
      "id": 1,
      "name": "Driver Michael Schumacher",
      "team": "Team Ferrari"
    },
    ...
  ]
}
```

### GET /drivers/:id

Retorna informações sobre um piloto específico com base no ID.

**Parâmetros:**

- `id` (number): ID do piloto.

**Resposta:**

```json
{
  "driver": {
    "id": 1,
    "name": "Driver Michael Schumacher",
    "team": "Team Ferrari"
  }
}
```

**Resposta de erro:**

```json
{
  "message": "Driver not found"
}
```

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado
- npm instalado

### Passos

1. Clone o repositório:

   ```sh
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_REPOSITORIO>
   ```

2. Instale as dependências:

   ```sh
   npm install
   ```

3. Execute o servidor em modo de desenvolvimento:

   ```sh
   npm run start:dev
   ```

4. O servidor estará rodando em `http://localhost:3000`.

### Scripts Disponíveis

- `npm run dist`: Compila o código TypeScript para JavaScript.
- `npm run start:dev`: Inicia o servidor em modo de desenvolvimento.
- `npm run start:watch`: Inicia o servidor em modo de desenvolvimento com hot-reload.
- `npm run start:dist`: Compila o código e inicia o servidor a partir do código compilado.

## Licença

Este projeto está licenciado sob a licença ISC.
