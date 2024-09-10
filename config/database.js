const sqlite3 = require('sqlite3')



const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE books (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            author_firstName text, 
			author_lastName text,
            title text UNIQUE, 
            genre text, 
            location text
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
               
            }
        });  
    }
});


module.exports = db