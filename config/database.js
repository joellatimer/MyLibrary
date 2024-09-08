const mysql = require('mysql')



let db = mysql.createConnection({
    host:process.env.DB_HOST,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    port:process.env.DB_PORT,
    user:process.env.DB_USER
    
    
  });

  module.exports = db