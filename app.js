var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var boardRouter = require('./routes/board');
var Nrouter = require('./routes/van');
var Srouter = require('./routes/selector');
var app = express();
var van = require("./models/van");
var resRouter = require("./routes/resource");
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/board',boardRouter);
app.use('/van',Nrouter);
app.use('/selector',Srouter);
app.use('/resource',resRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// We can seed the collection if needed on
async function recreateDB(){
// Delete everything
await van.deleteMany();
let instance1 = new
van({vancolor:"black", vanmodel:'clean',vanprice:2500});
instance1.save().then( () => {
console.log('first Object is created');
 }).catch( (e) => {
   console.log('There was an error', e.message);
  });
  let instance2 = new van({vancolor:"white", vanmodel:'salvage',vanprice:5040});
instance2.save().then( () => {
console.log('Second Object is created');
 }).catch( (e) => {
   console.log('There was an error', e.message);
  });
  let instance3 = new van({vancolor:"red", vanmodel:'new',vanprice:4000});
  instance3.save().then( () => {
  console.log('third Object is created');
   }).catch( (e) => {
     console.log('There was an error', e.message);
    });
}
let reseed = true;
if (reseed) { recreateDB();}

// 
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
