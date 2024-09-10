const db = require('../../config/database')


// View Users
exports.view = (req, res) => {

  db.query('SELECT Id, title, genre, location, CONCAT(author_firstName, " ", author_lastName) AS author FROM library.books', (err, rows) => {
   
    if (!err) {
      // let removedUser = req.query.removed;
      res.render('home', { rows});
    } else {
      console.log(err);
    }
    // console.log('The data from user table: \n', rows)
  }) 
}
// Find User by Search
exports.find = (req, res) => {
  let searchTerm = req.body.search;
  // User the connection
  db.query('SELECT * FROM library.books WHERE title LIKE ? OR author_lastName LIKE ?', ['%' + searchTerm + '%', '%' + searchTerm + '%'], (err, rows) => {
    if (!err) {
      res.render('edit-book', { rows });
    } else {
      console.log(err);
    }
    // console.log('The data from user table: \n', rows);
  });
}

exports.form = (req, res) => {
  res.render('add-book');
}

// Add new nook
exports.create = (req, res) => {
  const { author_firstName, author_lastName, title, genre, location} = req.body;
  console.log("body", req.body)
  let searchTerm = req.body.search;

  // User the connection
  db.query('INSERT INTO library.books SET author_firstName = ?, author_lastName = ?, title = ?, genre = ?, location = ?', [ author_firstName, author_lastName,  title, genre, location], (err, rows) => {
    if (!err) {
      res.render('add-book', { alert: 'Book added successfully.' });
    } else {
      console.log(err);
    }

    // console.log('The data from book table: \n', rows);
  });
}


// Edit user
exports.edit = (req, res) => {
  
  db.query('SELECT * FROM library.books WHERE id = ?', [req.params.id], (err, rows) => {
    if (!err) {
      res.render('edit-book', { rows });
    } else {
      console.log(err);
    }
    // console.log('The data from books table: \n', rows);
  });
}


// Update User
exports.update = (req, res) => {
  const { author_firstName, author_lastName, title, genre, location} = req.body;
  console.log("body", req.body)
  // User the connection
  db.query('UPDATE library.books SET author_firstName = ?, author_lastName = ?, title = ?, genre = ?, location = ? WHERE id = ?', [author_firstName, author_lastName, title, genre, location, req.params.id], (err, rows) => {

    if (!err) {
      // User the connection
      db.query('SELECT * FROM library.books WHERE id = ?', [req.params.id], (err, rows) => {
        // When done with the connection, release it
        
        if (!err) {
          res.render('edit-book', { rows, alert: `${title} has been updated.` });
        } else {
          console.log(err);
        }
        console.log('The data from books table: \n', rows);
      });
    } else {
      console.log(err);
    }
  //   console.log('The data from books table: \n', rows);
  });
}

// Delete User
exports.delete = (req, res) => {

  // Delete a record

  // User the connection
  db.query('DELETE FROM library.books WHERE id = ?', [req.params.id], (err, rows) => {

    if(!err) {
      res.redirect('/');
    } else {
      console.log(err);
    }
    // console.log('The data from books table: \n', rows);

  });

  // Hide a record

  // db.query('UPDATE usermanag.users SET status = ? WHERE id = ?', ['removed', req.params.id], (err, rows) => {
  //   if (!err) {
  //     let removedUser = encodeURIComponent('User successeflly removed.');
  //     res.redirect('/?removed=' + removedUser);
  //   } else {
  //     console.log(err);
  //   }
  //   console.log('The data from beer table are: \n', rows);
  // });

}

// View Users
exports.viewall = (req, res) => {

  // User the connection
  db.query('SELECT * FROM library.books WHERE id = ?', [req.params.id], (err, rows) => {
    if (!err) {
      res.render('view-user', { rows });
    } else {
      console.log(err,`this is the error`);
    }
    // console.log('The data from books table: \n', rows);
  });

}