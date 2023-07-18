const Pool = require('pg').Pool;
const DB_CONFIGS = require('./config.services');
const PoolConnector = new Pool(DB_CONFIGS);

PoolConnector.query("SELECT NOW();", error => {
  if (error) console.error(`Connection to ${appName}'s database. [Issue]: ${error}`);
  else {
    console.log(`[Database connection]: Connected correctly to ${appName} database`);
  };
});

module.exports = PoolConnector;