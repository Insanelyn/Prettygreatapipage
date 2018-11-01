var express = require('express');
var router = express.Router();
const Article = require('../models/Article');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
