var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categoryRouter = require('./routes/category');
var subcategoryRouter = require('./routes/subcategory');
 var brandRouter = require('./routes/brand');
 var productRouter = require('./routes/product');
 var productdetailsRouter = require('./routes/productdetail');
 var productpicturesRouter = require('./routes/productpicture');
  var mainBannerRouter = require('./routes/mainbanner');
  var adOfferRouter = require('./routes/adoffers');
  var bankOfferRouter = require('./routes/bankoffers');
  var adminloginRouter = require('./routes/adminlogin');
  var userInterfaceRouter = require('./routes/userinterface');
  var smsRouter = require('./routes/smsapi');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/category', categoryRouter);
app.use('/subcategory', subcategoryRouter);
 app.use('/brand', brandRouter);
 app.use('/product', productRouter);
app.use('/productdetail', productdetailsRouter);
app.use('/productpicture',productpicturesRouter);
app.use('/mainbanner', mainBannerRouter);
app.use('/adoffers', adOfferRouter);
app.use('/bankoffers', bankOfferRouter);
app.use('/adminlogin', adminloginRouter);
app.use('/userinterface', userInterfaceRouter);
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
