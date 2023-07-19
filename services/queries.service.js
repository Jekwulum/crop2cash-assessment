require('dotenv').config();

const databaseCreateQuery = `CREATE TABLE IF NOT EXISTS farmers (
                              id SERIAL PRIMARY KEY,
                              first_name VARCHAR(255) NOT NULL,
                              last_name VARCHAR(255) NOT NULL,
                              age INT,
                              address VARCHAR(255),
                              phone_number VARCHAR(20),
                              crops JSON
                            );`;

const createFarmerQuery = `INSERT INTO
                            farmers (first_name, last_name, age, address, phone_number, crops)
                            values ($1, $2, $3, $4, $5, $6) RETURNING *`;

const getFarmerQuery = (columns) => `SELECT ${columns} FROM farmers`;

module.exports = { databaseCreateQuery, createFarmerQuery, getFarmerQuery };