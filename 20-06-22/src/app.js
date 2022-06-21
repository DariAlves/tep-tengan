const express = require('express');
const app = express();
const path = require('path');
const appRoutes = require('./routes/appRoutes');

const morgan = require('morgan');
const port = process.env.PORT || 3000;

// Configurar minha view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // informar que mudei o diretório de views

// Middleware
app.use(express.json());
app.use(morgan('tiny'));
app.use(appRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
