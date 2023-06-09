var express = require('express');
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
var router = express.Router();
var van_controlers= require('../controllers/van');
/* GET vans */
router.get('/', van_controlers.van_view_all_Page );
router.get('/van/:id', van_controlers.van_detail)
module.exports = router;
/* GET detail van page */
router.get('/detail', van_controlers.van_view_one_Page);
/* GET create van page */
router.get('/create',secured, van_controlers.van_create_Page);
/* GET create update page */
router.get('/update',secured, van_controlers.van_update_Page);
/* GET delete van page */
router.get('/delete',secured, van_controlers.van_delete_Page);
//router.get('/update', secured, van_controlers.van_update_Page);