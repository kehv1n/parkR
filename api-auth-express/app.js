const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const layouts      = require('express-ejs-layouts');
const mongoose     = require('mongoose');
const session      = require('express-session');
const passport     = require('passport');
const cors         = require('cors');

mongoose.connect('mongodb://localhost/api-auth-express');
const app = express();

app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

// uncomment after placing your favicon in /public

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(layouts);
app.use(session({
  secret: 'park on the grass - its free',
  resave: true,
  saveUninitialized: true,
  cookie: { httpOnly: true, maxAge: 2000000}
}));

app.use(passport.initialize());
app.use(passport.session());

//connect the seperate passport file!!
// make sure you export!!!
const passportSetup = require('./config/passport');
passportSetup(passport);
//
// const index = require('./routes/index');
// app.use('/', index);

const authRoutes = require('./routes/auth-routes');
app.use('/', authRoutes);

// if theres no other routes that match, default to the angular html file
app.use((req, res, next ) => {
  res.sendfile(__dirname + '/public/index.html');
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
