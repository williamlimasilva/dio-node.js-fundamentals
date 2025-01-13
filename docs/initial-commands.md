# Inicializa um novo projeto Javascript Node.js

npm init -y

# Inicializa um novo projeto TypeScript Node.ts

npm init -y typescript

# Instala as dependências

npm i typescript tsx tsup

# Cria a pasta src

mkdir src

# Cria o arquivo inicial

echo 'console.log("hello world");' > src\dado.ts

# Cria o arquivo tsconfig

npx tsc --init

# Scripts para JavaScript

"scripts": {
"start": "node src/index.js",
"start:watch": "node --watch src/index.js",
"test": "jest",
"build": "webpack --config webpack.config.js",
"lint": "eslint . --ext .js"
},

# Scripts para TypeScript

"scripts": {
"dist": "tsup src",
"start:dev": "tsx src/index.ts",
"start:watch": "tsx watch src/index.ts",
"start:dist": "npm run dist && node dist/index.js",
"build": "tsc",
"lint": "eslint . --ext .ts"
},
