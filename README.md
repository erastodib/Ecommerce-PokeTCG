PokéTCG Store (E-Commerce)

Instalação e Configuração

1. Clonar o Repositório

git clone https://github.com/erastodib/Ecommerce-PokeTCG.git
cd nome-do-repositorio


2. Instalação das Dependências

Frontend:

cd client
npm i

Backend:
cd ..
cd server
npm i


3.Variáveis de Ambiente:
Configure as variáveis necessárias no arquivo .env:

JWT_SECRET: Chave secreta para autenticação JWT.

DB_URL: Caminho para o arquivo do SQLite (./database.sqlite).

Exemplo:

JWT_SECRET=123
DB_URL=./database.sqlite

Execução:

1. Rodar o Backend:

npm run dev

2. Rodar o Frontend:

npm run dev
