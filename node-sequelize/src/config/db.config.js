import dotenv from 'dotenv';
dotenv.config();

const config = {
  username: process.env.USERNAME_DB,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  host: process.env.HOST,
  dialect: process.env.DIALECT,
};

export { config };
