import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './database/connection.js';
import { Livro } from './models/Livro.js';
dotenv.config();

const app = express();
const port = process.env.PORT;

console.log(sequelize);

async function run() {
  try {
    app.listen(port, () => {
      console.log(`Servidor rodando no endereço http://localhost:${port}`);
    });

    await sequelize.authenticate();
    console.log('Conexão com banco de dados feita com sucesso!');
    await Livro.sync();
  } catch (err) {
    console.log('Erro', err);
  }
}

run();

/* 
  app.js => routes
  routes => controllers
  controllers => models
*/
