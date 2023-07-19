require('dotenv').config();

const DB_CONFIGS = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: 5432
};

module.exports = DB_CONFIGS;