let Van = require('../models/van');
// List of all vans
exports.van_list = function(req, res) {
res.send('NOT IMPLEMENTED: van list');
};
// for a specific van.
exports.van_detail = function(req, res) {
res.send('NOT IMPLEMENTED: van detail: ' + req.params.id);
};
// Handle van create on POST.
exports.van_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: van create POST');
};
// Handle van delete form on DELETE.
exports.van_delete = function(req, res) {
res.send('NOT IMPLEMENTED: van delete DELETE ' + req.params.id);
};
// Handle van update form on PUT.
exports.van_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: van update PUT' + req.params.id);
};
// List of all vans
exports.van_list = async function(req, res) {
try{
theVan = await Van.find();
res.send(theVan);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
// VIEWS
// Handle a show all view
exports.van_view_all_Page = async function(req, res) {
    try{
    theVan = await Van.find();
    res.render('van', { title: 'van Search Results', results: theVan });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // Handle Costume create on POST.
exports.van_create_post = async function(req, res) {
console.log(req.body)
let document = new Van();
document.vancolor = req.body.vancolor;
document.vanmodel = req.body.vanmodel;
document.vanprice = req.body.vanprice;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

