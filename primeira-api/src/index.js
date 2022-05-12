const express = require('express');
const { randomUUID } = require('crypto');

const app = express();
app.use(express.json());

const port = 3030;

/**
 * CRUD
 *
 * * Create - POST
 * ? Read - GET
 * + Update - PUT
 * ! Delete - DELETE
 *
 */

/* Simular um banco de dados */
const produtos = [];

/* Criar um novo produto  */
app.post('/paes', (request, response) => {
  const { tipo, preco, peso } = request.body;

  const pao = {
    id: randomUUID(),
    tipo,
    preco,
    peso,
  };

  produtos.push(pao);

  return response.status(201).json(pao);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
