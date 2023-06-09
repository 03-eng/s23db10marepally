const van = require('../models/van');
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
    // Handle van create on POST.
exports.van_create_post = async function(req, res) {
console.log(req.body)
let document = new Van();666
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

// for a specific van.
exports.van_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await van.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };


//Handle van update form on PUT.
exports.van_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await van.findById( req.params.id)
// Do updates of properties
if(req.body.vancolor)
toUpdate.vancolor = req.body.vancolor;
if(req.body.vanmodel) toUpdate.vanmodel = req.body.vanmodel;
if(req.body.vanprice) toUpdate.vanprice = req.body.vanprice;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};

// Handle van delete on DELETE.
exports.van_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await van.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };

// Handle a show one view with id specified by query
exports.van_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await van.findById( req.query.id)
    res.render('vandetail',
    { title: 'van Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle building the view for creating a van.
// No body, no in path parameter, no query.
// Does not need to be async
exports.van_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('vancreate', { title: 'van Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle building the view for updating a van.
// query provides the id
exports.van_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await van.findById(req.query.id)
    res.render('vanupdate', { title: 'van Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle a delete one view with id from query
exports.van_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await van.findById(req.query.id)
    res.render('vandelete', { title: 'van Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    

