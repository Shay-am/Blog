"use strict";

var _home = require("./routes/home");

var express = require('express');

var path = require('path');

var bodyParser = require('body-parser');

var app = express();

var mongoose = require('mongoose');

var flash = require('connect-flash');

var cookieParser = require('cookie-parser');

var session = require('express-session'); //import midlleware routes
// const homePageRouter = require('../routes/home');


var newJokePageRouter = require('./routes/new');

var authRouter = require('./routes/auth');

//mongoose Connect
mongoose.connect('mongodb://localhost:27017/jokes', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function () {
  console.log('connect db');
}); //view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); //midlleware

app.use(express["static"]('./public'));
app.use(express.json()); //flash mieddleware

app.use(session({
  secret: 'shay',
  name: 'Blog',
  resave: false,
  saveUninitialized: true,
  cookie: {}
}));
app.use(flash());
app.use(function (req, res, next) {
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
}); //bodyParser middleware

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
// app.use('/', _home);
app.use('/', newJokePageRouter);
app.use('/', authRouter);
var port = process.env.PORT || 3000;
app.listen(port, function () {
  return console.log("Server started on port ".concat(port));
});