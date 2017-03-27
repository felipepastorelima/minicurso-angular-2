## Pré requisitos

- Node versão LTS (https://nodejs.org/en/)
- Visual Studio Code (https://code.visualstudio.com/)

Extensões para o Visual Studio Code:
- Angular v4 Typescript Snippets
- EditorConfig for VS Code
- TSLint
- Typescript Hero
- vscode-icons

## Criando novo projeto

Abra o terminal na pasta onde descompactou o projeto e rode os comandos abaixo.

    npm install -g @angular/cli
    ng new crud-durante-o-curso
    cd crud-durante-o-curso

Após criado o projeto, configuramos o serviço de API de mock. Mais detalhes em [json-server](https://github.com/typicode/json-server).

    npm install -g json-server
 
 Crie o arquivo `db.json` com o seguinte conteúdo.

    {
      "users": [
        {
          "name": "Fulano",
          "id": 1
        }
      ]
    }

Abra o arquivo `packange.json` e adicione a seguinte linha:

    {
      ...
      "scripts": {
        ...
        "start:api": "json-server --watch db.json",
        ...
      }
      ...
    }

## Rodando servidor API de mock

Abrir o terminal na pasta do `crud-durante-o-curso` e rodar:

    npm run start:api

Com este comando, a API estará disponível em:

    http://localhost:3000

## Rodando cliente Angular 2

Abrir um **segundo** terminal na pasta do `crud-durante-o-curso` e rodar:

    npm run start    

Com este comando, o angular estará disponível em:

    http://localhost:4200
