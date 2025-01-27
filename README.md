# API com MongoDB e Prisma

Este projeto é uma API desenvolvida em Node.js utilizando **Express**, **MongoDB** como banco de dados e o **Prisma** como ORM. A API permite gerenciar usuários com as operações básicas de CRUD (Create, Read, Update, Delete).  

## 🚀 Funcionalidades

- **GET `/usuarios`**: Retorna a lista de todos os usuários cadastrados.
- **POST `/usuarios`**: Cadastra um novo usuário. Apenas maiores de 18 anos podem se cadastrar.
- **PUT `/usuarios/:id`**: Atualiza os dados de um usuário específico.
- **DELETE `/usuarios/:id`**: Remove um usuário do banco de dados.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Plataforma para executar JavaScript no servidor.
- **Express**: Framework minimalista para criar APIs em Node.js.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar as informações.
- **Prisma**: ORM para facilitar o gerenciamento de banco de dados.
- **Cors**: Biblioteca para habilitar o Cross-Origin Resource Sharing (CORS).

---

## ⚙️ Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [MongoDB](https://www.mongodb.com/)
- Gerenciador de pacotes: **npm** ou **yarn**

---

## 🚀 Como executar o projeto

Siga os passos abaixo para rodar o projeto localmente:

### 1. Clone o repositório
```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DA_PASTA_DO_PROJETO>
```
## 2. Instale as dependências
```bash 
npm install
# ou
yarn install
```

## 3. Configure o Prisma
1. Crie o arquivo `.env` na raiz do projeto com as seguintes variáveis:
   ```bash
   DATABASE_URL="mongodb+srv://<USUARIO>:<SENHA>@<CLUSTER>.mongodb.net/<DATABASE>?retryWrites=true&w=majority"
   ```
   Substitua <USUARIO>, <SENHA>, <CLUSTER> e <DATABASE> pelos dados do seu banco de dados MongoDB.
   
2. Execute o comando para gerar o cliente Prisma
  ```bash
    npx prisma generate  
```
## 4. Execute as migrações do Prisma (opcional)
Caso esteja utilizando um esquema inicial para o banco:
```bash
npx prisma migrate dev --name init

```
## 5. Inicie o servidor
```bash
npm start
# ou
yarn start 
```
O servidor estará disponível em: `http://localhost:3000`

---

## 📄 Rotas da API
## GET `/usuarios`
Retorna todos os usuários cadastrados.
Exemplo de Resposta:
```json  
[
  {
    "id": "1",
    "name": "João",
    "email": "joao@email.com",
    "age": 25
  },
  {
    "id": "2",
    "name": "Maria",
    "email": "maria@email.com",
    "age": 30
  }
]

```
---
## POST `/usuarios`
Cadastra um novo usuário. Apenas maiores de 18 anos podem se cadastrar.
Requisição:
```json
{
  "name": "João",
  "email": "joao@email.com",
  "age": 25
}
```
Resposta de Sucesso:
```json
{
  "id": "3",
  "name": "João",
  "email": "joao@email.com",
  "age": 25
}
```
erro:
```json
{
  "error": "Apenas maiores de 18 anos podem se cadastrar."
}
```
---
## PUT `/usuarios/:id`
Atualiza os dados de um usuário.
Requisição:
```json
{
  "name": "João Silva",
  "email": "joaosilva@email.com",
  "age": 28
}

```
Resposta:
```json
{
  "id": "3",
  "name": "João Silva",
  "email": "joaosilva@email.com",
  "age": 28
}
```
---
## DELETE `/usuarios/:id` 
Deleta um usuário pelo ID.
Resposta:
```json
{
  "mensage": "Usuário deletado com sucesso!"
}

```
---
# Referências

- [Documentação do Express](https://expressjs.com/)
- [Documentação do Prisma](https://www.prisma.io/docs/)
- [Documentação do MongoDB](https://www.mongodb.com/docs/)

