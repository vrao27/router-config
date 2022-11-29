const { Pool } = require("pg");

const pool = new Pool({
    connectionString: process.env.creds
  });


  module.export = pool;


