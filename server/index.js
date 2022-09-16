const express = require('express');
const logger = require('morgan');
const users = require('./routes/user.route');
const bodyParser = require('body-parser');
const mongoose = require('./config/database'); //database configuration
require('dotenv').config('./.env')
const jwt = require('jsonwebtoken');
const app = express();
const cors = require('cors');
const fileRoute = require('./routes/file.route');
app.set('secretKey', 'libraryjsonwebtoken'); // jwt secret token
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId
// connection to mongodb
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(logger('dev'));
app.use(cors({
  'origin': '*'
}))
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', function (req, res) {
  res.json({ "message": "Can't get any data from this route!!!" });
});
// public route
app.use('/users', users);
// File upload or download routes
app.use('/file', fileRoute);
// categories routes
const categoryRoute = require('./routes/categories.route')
app.use('/categories', categoryRoute);
// private route
app.get('/favicon.ico', function (req, res) {
  res.sendStatus(204);
});
// error handling
app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// handle 404 error
app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 491;
  next(err);
});
// handle errors
app.use(function (err, req, res, next) {
  console.log(err);

  if (err.status === 404)
    res.status(404).json({ message: "Not found" });
  else
    res.status(500).json({ message: "Something looks wrong :( !!!" });
});
$port = 5000
app.listen($port, function () {
  console.log(`Node server listening on port ${$port}`);
});