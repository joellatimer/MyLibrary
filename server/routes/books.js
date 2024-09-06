const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Routes
router.get('/', bookController.view);
router.post('/', bookController.find);
router.get('/addbook', bookController.form);
router.post('/addbook', bookController.create);
router.get('/editbook/:id', bookController.edit);
router.post('/editbook/:id', bookController.update);
router.get('/viewbook/:id', bookController.viewall);
router.get('/:id',bookController.delete);
  
module.exports = router;