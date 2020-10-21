const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser')
const session = require('express-session')
//import midlleware routes
// const homePageRouter = require('../routes/home');
const newJokePageRouter = require('./routes/new');
const authRouter = require('./routes/auth');
import { homePageRouter } from '../routes/home';


//mongoose Connect
mongoose.connect('mongodb://localhost:27017/jokes', {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('connect db')
});


//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//midlleware
app.use(express.static('./public'))
app.use(express.json());

//flash mieddleware
app.use(session({
    secret: 'shay',
    name: 'Blog',
    resave: false,
    saveUninitialized: true,
    cookie: {},
}));

app.use(flash());
app.use((req, res, next) => {
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next()
})

//bodyParser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


  



app.use('/', homePageRouter);
app.use('/', newJokePageRouter);
app.use('/', authRouter);






const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
