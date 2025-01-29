# Podcast Manager

## Descrição

Um app ao estilo Netflix, onde é possível centralizar diferentes episódios de podcasts separados por categoria.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento para execução do JavaScript no servidor.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática e outros recursos.
- **HTTP**: Protocolo de comunicação utilizado para as requisições e respostas.
- **File System (fs)**: Módulo do Node.js utilizado para leitura e escrita de arquivos.
- **Path**: Módulo do Node.js utilizado para manipulação de caminhos de arquivos e diretórios.

## Arquitetura

O projeto segue uma arquitetura de camadas, dividida em:

- **Controllers**: Responsáveis por receber as requisições HTTP, chamar os serviços apropriados e retornar as respostas.
- **Services**: Contêm a lógica de negócio e interagem com os repositórios.
- **Repositories**: Responsáveis por acessar os dados, seja de um banco de dados ou de arquivos.
- **Models**: Definem as interfaces e tipos utilizados no projeto.
- **Utils**: Contêm utilitários e constantes usadas em todo o projeto.

## Estrutura de Pastas

```
└── 📁node-ts-webapi-without-frameworks-podcast-menager
    ├── 📁docs
    │   ├── app.md
    │   └── 📁arch
    │       └── Untitled.png
    ├── 📁src
    │   ├── app.ts
    │   ├── 📁controllers
    │   │   └── podcasts-controller.ts
    │   ├── 📁models
    │   │   ├── filter-podcast-model.ts
    │   │   └── podcast-model.ts    │
    │   ├── 📁repositories
    │   │   ├── podcasts-repository.ts
    │   │   └── podcasts.json
    │   ├── 📁routes
    │   │   └── routes.ts
    │   ├── server.ts
    │   ├── 📁services
    │   │   ├── filter-episodes-service.ts
    │   │   └── podcasts-service.ts
    │   └── 📁utils
    │       ├── charset.ts
    │       ├── http-content-type.ts
    │       ├── http-methods.ts
    │       └── http-status-code.ts
    ├── .env
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── tsconfig.json
```

### Descrição das Pastas

- **docs/**: Contém a documentação do projeto.
- **src/**: Contém o código-fonte do projeto.
  - **controllers/**: Contém os controladores que lidam com as requisições HTTP.
  - **models/**: Contém as interfaces e tipos utilizados no projeto.
  - **repositories/**: Contém os repositórios que acessam os dados.
  - **routes/**: Contém as definições de rotas.
  - **services/**: Contém os serviços que implementam a lógica de negócio.
  - **utils/**: Contém utilitários e constantes usadas em todo o projeto.
- **.env**: Arquivo de configuração de variáveis de ambiente.
- **.gitignore**: Arquivo que especifica quais arquivos e diretórios devem ser ignorados pelo Git.
- **package.json**: Arquivo de configuração do npm, contendo as dependências e scripts do projeto.
- **tsconfig.json**: Arquivo de configuração do TypeScript.

## Configuração do Ambiente

1. Clone o repositório:

   ```sh
   git clone https://github.com/williamlimasilva/dio-node.js-fundamentals/tree/main/desafios/desafio4/node-ts-webapi-without-frameworks-podcast-menager.git
   cd podcast-manager
   ```

2. Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente necessárias:

   ```env
   PORT=3000
   ```

3. Instale as dependências:

   ```sh
   npm install
   ```

## Como Executar o Projeto

1. Inicie o servidor em modo de desenvolvimento:

   ```sh
   npm run start:dev
   ```

2. O servidor estará rodando na porta especificada no arquivo `.env` (por padrão, porta 3000).

## Testes

Para executar os testes, utilize o comando:

```sh
npm test
```

## Endpoints

- **GET /api/episodes**: Retorna a lista de todos os episódios de podcasts.
- **GET /api/episode?name={podcastName}**: Retorna a lista de episódios filtrados pelo nome do podcast.

## Exemplo de Resposta

```json
[
  {
    "name": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "categories": ["saúde", "esporte", "bodybuilder"]
  },
  {
    "name": "flow",
    "episode": "RUBENS BARRICHELLO - Flow #339",
    "videoId": "4KDGTdiOV4I",
    "categories": ["esporte", "corrida"]
  }
]
```

## Contribuição

Sinta-se à vontade para contribuir com este projeto. Para isso, siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`).
4. Faça push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
