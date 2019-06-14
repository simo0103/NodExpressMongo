const express = require('express'),
      mongoose = require('mongoose');
var router = express.Router();


// respond with "hello world" when a GET request is made to the homepage
router.get('/', (req, res) => {
  res.render('layout/index', {
      viewTitle: 'ciaone'
  })
});

module.exports = router;