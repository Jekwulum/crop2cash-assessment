require('dotenv').config();

const databaseCreateQuery = `
    CREATE DATABASE IF NOT EXISTS ${process.env.DB_DATABASE};
    USE ${process.env.DB_DATABASE};
    CREATE TABLE IF NOT EXISTS farmers (
      id INT PRIMARY KEY AUTO_INCREMENT,
      first_name VARCHAR(255) NOT NULL,
      last_name VARCHAR(255) NOT NULL,
      age INT,
      address VARCHAR(255),
      phone_number VARCHAR(20),
      crops JSON
    );
  `;

module.exports = { databaseCreateQuery };