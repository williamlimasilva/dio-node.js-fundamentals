<!--START_SECTION:header-->
<div align="center">
  <p align="center">
    <img 
      alt="DIO Education" 
      src="https://raw.githubusercontent.com/digitalinnovationone/template-github-trilha/main/.github/assets/logo.webp" 
      width="100px" 
    />
    <h1>Gerador de QRcode para e-commerce</h1>
  </p>
</div>
<!--END_SECTION:header-->

<p align="center">
  <img src="https://img.shields.io/static/v1?label=DIO&message=Education&color=E94D5F&labelColor=202024" alt="DIO Project" />
  <a href="NIVEL"><img  src="https://img.shields.io/static/v1?label=Nivel&message=Basico&color=E94D5F&labelColor=202024" alt="Nivel"></a>

</p>

<!--  -->
<table align="center">
<thead>
<h2>🎓 Technical Specialist</h2>
  <tr>
    <td>        
        <a href="https://github.com/felipeAguiarCode">
        <img src="https://avatars0.githubusercontent.com/u/37452836?v=3&s=115" alt="@felipeAguiarCode"><br>
      </a>
    </td>
    <td colspan="3">
    <p>🎉 10y+ em sistemas comerciais com .NET C# e NODE.JS.
      <br/>
     🌟 Desenvolvedor fullstack - Coordenador de educação na DIO
      <br/>
    👨‍💻 Foco em front-ends SPA com React, Angular e Vue.js
    </p>
      <a 
      href="https://www.linkedin.com/in/felipe-me/" 
      align="center">
           <img 
            align="center" 
            alt="Material de Apoio" 
            src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
            >
        </a>
        <a href="https://www.instagram.com/felipeaguiar.exe/" target="_blank">
            <img 
              align="center" 
              alt="Instagram" 
              src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"
            >
        </a>
    </td>
  </tr>
</thead>
</table>
<!--  -->

<br/>
<br/>

## 💻 Sobre o Projeto

Vamos construir um kit de utilidades para um e-commerce, o projeto deve ser escalável para ter adição de novas features.

## 📚 Pré-requisitos de Habilidades e Níveis de Conhecimento

Antes de ingressar neste conteúdo, é necessário possuir conhecimento prévio nas seguintes áreas:

- Lógica de programação
- Javascript | Básico
- NodeJS | Básico
- Node Modules
- NPM, Packages, Dependencies
- Variáveis ambiente (.env)

## 🛠️ Habilidades e Sub-habilidades que vamos aprender neste conteúdo

- Como gerar qrcode com node
- Como lidar com várias dependências de um projeto
- Como pensar em projetos por camadas

## 🎯 Objetivos e Resultados Esperados

Após a conclusão do curso/projeto, os estudantes estarão aptos a:

- Criar projetos nodejs que gerem multiplas dependências

## 📐 Design Patterns Utilizados

Neste projeto, utilizamos os seguintes design patterns para garantir um código mais limpo, escalável e de fácil manutenção:

- **Singleton**: Para garantir que uma classe tenha apenas uma instância e fornecer um ponto global de acesso a ela.
- **Factory**: Para criar objetos sem expor a lógica de criação ao cliente e referenciar a nova instância através de uma interface comum.
- **Dependency Injection**: Para promover a inversão de controle e facilitar a injeção de dependências nas classes.

## 📂 Estrutura de Pastas

A estrutura de pastas do projeto está organizada da seguinte forma:

```
📁projeto-qrcode
└── 📁docs
│   └── arquitetura.tldr
└── 📁src
│   └── index.js
│   └── 📁prompts-schema
│   │   └── prompt-schema-main.js
│   │   └── prompt-schema-qrcode.js
│   └── 📁services
│       └── 📁password
│       │   └── create.js
│       │   └── handle.js
│       │   └── 📁utils
│       │       └── permitted-characters.js
│       └── 📁qr-code
│           └── create.js
│           └── handle.js
└── .env
└── .gitignore
└── package-lock.json
└── package.json
└── readme.md

```

- **docs/**: Contém a documentação do projeto.
- **src/**: Contém o código-fonte do projeto.
  - **prompts-schema/**: Contém os esquemas de prompts.
  - **services/**: Serviços que contêm a lógica de negócios.
    - **password/**: Serviços relacionados a senhas.
      - **utils/**: Utilitários e funções auxiliares para senhas.
    - **qr-code/**: Serviços relacionados a QR codes.
- **.env**: Arquivo de variáveis de ambiente.
- **.gitignore**: Arquivo para ignorar arquivos e pastas no Git.
- **package-lock.json**: Arquivo de bloqueio de versão do npm.
- **package.json**: Arquivo de configuração do npm.
- **readme.md**: Documentação do projeto.

<!--START_SECTION:footer-->

<br />
<br />

<p align="center">
  <a href="https://www.dio.me/" target="_blank">
    <img align="center" src="https://raw.githubusercontent.com/digitalinnovationone/template-github-trilha/main/.github/assets/footer.png" alt="banner"/>
  </a>
</p>
