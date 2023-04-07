var express = require('express');
var router = express.Router();

/* GET Notebook details */
router.get('/', function(req, res, next) {
  res.render('van', { title: 'Search Results of van' });
});

module.exports = router;