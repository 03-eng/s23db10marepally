var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var van_controller = require('../controllers/van');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/van', van_controller.van_create_post);
// DELETE request to delete Costume.
router.delete('/van/:id', van_controller.van_delete);
// PUT request to update Costume.
router.put('/van/:id', van_controller.van_update_put);
// GET request for one Costume.
router.get('/van/:id', van_controller.van_detail);
// GET request for list of all Costume items.
router.get('/van', van_controller.van_list);
module.exports = router;
