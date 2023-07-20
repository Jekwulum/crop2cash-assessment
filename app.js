require('dotenv').config();

const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const PoolConnector = require('./services/connector.service');
const { databaseCreateQuery } = require('./services/queries.service');
const farmerRouter = require('./routes/farmer.route');

PoolConnector.query(databaseCreateQuery, (err, results) => {
  if(err) console.error(`Error creating database and tables: ${err}`);
  else console.log(`Database and tables for ${appName} created successfully`)
});

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Accept", "application/json");
  res.header("Access-Control-Allow-Credentials", 'true');
  next();
});

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));

app.use("/farmers", farmerRouter);

module.exports = app;