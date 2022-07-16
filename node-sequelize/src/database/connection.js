import { Sequelize, DataTypes } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  DB_HOST,
  dialect: 'mysql',
});

export { sequelize, DataTypes };
