var debug = require('debug')('erp:controllers');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  debug('Home page was called!')

  res.render('index', { title: 'Erp' });
});

module.exports = router;
