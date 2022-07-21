import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './database/database.js';
import { config } from './config/db.config.js';
import chalk from 'chalk';
dotenv.config();

console.log(config);

const app = express();

const port = process.env.PORT || 3030;

// Conexão com o banco de dados
async function run() {
  try {
    await sequelize.authenticate();
    console.log(chalk.bgGreen(`Conexão com sucesso!`));

    app.listen(port, () => {
      console.log(
        chalk.bgCyan(`Servidor rodando na porta http://localhost:${port}`)
      );
    });
  } catch (erro) {
    console.log(chalk.bgRed(`Error: ${erro}`));
  }
}

run();
