const express = require('express'); //! módulo de terceiros (NPM)
const path = require('path'); //! módulo nativo Node.js
const livros = require('./database/livros.json'); //! módulo local

const app = express();

const port = process.env.PORT || 3000;

//! Setar nossa template engine
app.set('view engine', 'ejs');

//! Arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

//! Homepage
app.get('/', (request, response) => {
  return response.render('index', { title: 'Home' });
});

//! Listar todos os livros
app.get('/livros', (request, response) => {
  console.log(livros);

  return response.render('livros', { livros, title: 'Livros' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port} 😎`);
});
