import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './database/database.js';
// import { Usuario } from './models/Usuario.js';
import chalk from 'chalk';
import { usuarioRouter } from './routes/usuario.routes.js';
dotenv.config();

const app = express();

app.use('/usuarios', usuarioRouter);

const port = process.env.PORT || 3030;

// Conexão com o banco de dados
async function run() {
  try {
    await sequelize.authenticate();
    console.log(chalk.bgGreen(`Conexão com sucesso!`));
    // await Usuario.sync({ force: true });
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
