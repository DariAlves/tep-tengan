const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const { randomUUID } = require('crypto');

dotenv.config();
const app = express();
const port = process.env.PORT;

/* Middlewares */
app.use(
  morgan(
    chalk.blue('Method: :method\n') +
      chalk.green('URL: :url\n') +
      chalk.bgRed('Status: :status\n') +
      chalk.yellow('Time: :response-time ms\n')
  )
);

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//! Criar nosso banco de dados
app.get('/', (req, res) => {
  if (!fs.existsSync(path.join(__dirname, 'database', 'usuarios.json'))) {
    fs.writeFile(
      path.join(__dirname, 'database', 'usuarios.json'),
      '[]',
      erro => {
        if (erro) throw erro;
        console.log('Database criado com sucesso!');
      }
    );
  }

  return res.render('index');
});

//! Criar um novo usuário e salvar no banco de dados
app.post('/usuario', (req, res) => {
  const { nome, email } = req.body;

  const usuario = {
    id: randomUUID(),
    nome,
    email,
  };

  const database = require(path.join(__dirname, 'database', 'usuarios.json'));

  database.push(usuario);

  //! Converter para JSON
  const databaseJSON = JSON.stringify(database);

  fs.writeFile(
    path.join(__dirname, 'database', 'usuarios.json'),
    databaseJSON,
    erro => {
      if (erro) throw erro;
      console.log('Usuário criado com sucesso!');
    }
  );

  return res.json(usuario);
});

//! Listar todos os usuários salvos no banco de dados
app.get('/usuarios', (req, res) => {
  const usuarios = require(path.join(__dirname, 'database', 'usuarios.json'));

  return res.render('usuarios', { usuarios });
});

app.listen(port, () => {
  console.log(chalk.bgCyan(`Servidor rodando no  http://localhost:${port}\n`));
});
