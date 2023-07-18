require('dotenv').config();

const databaseCreateQuery = `
    CREATE TABLE IF NOT EXISTS farmers (
      id SERIAL PRIMARY KEY,
      first_name VARCHAR(255) NOT NULL,
      last_name VARCHAR(255) NOT NULL,
      age INT,
      address VARCHAR(255),
      phone VARCHAR(20),
      crops JSON
    );
  `;

module.exports = { databaseCreateQuery };