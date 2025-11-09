AUTORES
Dhiogo Gurgel - 03343732
Victor Icaro - 03344774
TechManage CRUD
API RESTful para gerenciamento de usuários, projetos e tarefas usando Node.js, Express e Sequelize com MySQL.

Tecnologias
Node.js
Express
Sequelize
MySQL
Dotenv
Pré-requisitos
Node.js instalado
MySQL rodando (ex: Laragon, XAMPP)
Git instalado
Instalação
Clone o repositório:
git clone https://github.com/Icaro304/techmanage_crud.git
cd seu-repositorio


Instale as dependências:
com npm install

Configure o arquivo .env com suas credenciais do banco de dados:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=techmanage_db
DB_PORT=3306
PORT=3000

Inicie o servidor:

npm run dev

Rotas principais

POST /users - Criar usuário

GET /users - Listar usuários

GET /users/:id - Buscar usuário por ID

PUT /users/:id - Atualizar usuário

DELETE /users/:id - Deletar usuário

Uso

Use uma ferramenta como Thunder Client, Postman ou Insomnia para testar as rotas.
