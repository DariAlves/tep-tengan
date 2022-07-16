import { Sequelize, DataTypes } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const database = {
  db: process.env.DB_NAME,
  db_user: process.env.DB_USERNAME,
  db_password: process.env.DB_PASSWORD,
  db_host: process.env.DB_HOST,
};

const sequelize = new Sequelize(
  database.db,
  database.db_user,
  database.db_password,
  {
    host: database.db_host,
    dialect: 'mysql',
  }
);

export { sequelize, DataTypes };
