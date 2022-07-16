import { sequelize, DataTypes } from '../database/connection.js';

const Livro = sequelize.define('livros', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  paginas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  preco: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export { Livro };
