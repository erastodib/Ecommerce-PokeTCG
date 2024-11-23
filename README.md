PokéTCG Store (E-Commerce) <br/>

Instalação e Configuração <br/>

1. Clonar o Repositório <br/>

git clone https://github.com/erastodib/Ecommerce-PokeTCG.git <br/>
cd nome-do-repositorio <br/>


2. Instalação das Dependências <br/>

Frontend: <br/>

cd client <br/>
npm i <br/>

Backend: <br/>
cd .. <br/>
cd server <br/>
npm i <br/>


3.Variáveis de Ambiente: <br/>
Configure as variáveis necessárias no arquivo .env: <br/>

JWT_SECRET: Chave secreta para autenticação JWT. <br/>

DB_URL: Caminho para o arquivo do SQLite (./database.sqlite). <br/>

Exemplo: <br/>

JWT_SECRET=123 <br/>
DB_URL=./database.sqlite <br/>

Execução: <br/>

1. Rodar o Backend: <br/>

npm run dev <br/>

2. Rodar o Frontend: <br/>

npm run dev <br/>
