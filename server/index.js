const express = require('express');
const logger = require('morgan');
const users = require('./routes/user.route');
const bodyParser = require('body-parser');
const mongoose = require('./config/database'); //database configuration
const fs = require('fs')
require('dotenv').config('./.env')
const jwt = require('jsonwebtoken');
const app = express();
const cors = require('cors');
const fileRoute = require('./routes/file.route');
app.set('secretKey', 'libraryjsonwebtoken'); // jwt secret token
// This help convert the id from string to ObjectId for the _id.
// connection to mongodb
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(logger('dev'));
app.use(cors({
  'origin': '*'
}))
const mongooseDefault = require("mongoose");
const multer = require("multer");
const {
  GridFsStorage
} = require("multer-gridfs-storage");

require("dotenv")
  .config('.env');

const mongouri = process.env.ATLAS_URI;
// try {
//   mongooseDefault.connect(mongouri, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
//   });
// } catch (error) {
//   handleError(error);
// }
process.on('unhandledRejection', error => {
  console.log('unhandledRejection', error.message);
});

//creating bucket
let bucket;
mongooseDefault.connection.on("connected", () => {
  var client = mongooseDefault.connections[0].client;
  var db = mongooseDefault.connections[0].db;
  bucket = new mongooseDefault.mongo.GridFSBucket(db, {
    bucketName: "pdffiles"
  });
  console.log(bucket);
});

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

const storage = new GridFsStorage({
  url: mongouri,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      const filename = file.originalname;
      const fileInfo = {
        filename: filename,
        bucketName: "pdffiles"
      };
      resolve(fileInfo);
    });
  }
});

const upload = multer({
  storage
});

app.get("/pdffile/:filename", (req, res) => {
  const file = bucket
    .find({
      filename: req.params.filename
    })
    .toArray((err, files) => {
      if (!files || files.length === 0) {
        return res.status(404)
          .json({
            err: "no files exist"
          });
      }
      res.set({
        contentType: 'application/pdf',
        'eransfer-encoding': 'gzip'
      })
      // console.log(res)
      bucket.openDownloadStreamByName(req.params.filename)
        .pipe(res);
    });
});

app.post("/uploadFile", upload.single("file"), (req, res) => {
  res.status(200)
    .send("File uploaded successfully");
});

app.get('/', function (req, res) {
  res.json({ "message": "Can't get any data from this route!!!" });
});
// public route
app.use('/users', users);
// File upload or download routes
app.use('/file', fileRoute);
// categories routes
const categoryRoute = require('./routes/categories.route');
const { fsync } = require('fs');
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