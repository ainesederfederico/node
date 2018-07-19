
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const engine = require('ejs-locals');
const globalLocals = require('./middlewares/app_data');


const app = express();

// use ejs-locals for all ejs templates:
app.engine('ejs', engine);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//load the global data from config/default.json
app.use(globalLocals);

const homeRouter = require('./routes/home');
const usersRouter = require('./routes/users');
const accountsRouter = require('./routes/accounts');

const apiUsersRouter = require('./routes/api/users');

app.use('/', homeRouter);
app.use('/users', usersRouter);

app.use('/accounts', accountsRouter);

app.use('/api/users', apiUsersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
