import { Sequelize, DataTypes } from 'sequelize';
import { config } from '../config/db.config.js';

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);

export { sequelize, DataTypes };
