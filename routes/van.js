var express = require('express');
var router = express.Router();
var van_controlers= require('../controllers/van');
/* GET costumes */
router.get('/', van_controlers.van_view_all_Page );
router.get('/van/:id', van_controlers.van_detail)
module.exports = router;