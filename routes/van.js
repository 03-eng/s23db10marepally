var express = require('express');
var router = express.Router();
var van_controlers= require('../controllers/van');
/* GET vans */
router.get('/', van_controlers.van_view_all_Page );
router.get('/van/:id', van_controlers.van_detail)
module.exports = router;
/* GET detail van page */
router.get('/detail', van_controlers.van_view_one_Page);
/* GET create van page */
router.get('/create', van_controlers.van_create_Page);