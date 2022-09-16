//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://coderz:maak@cluster0.hobon.mongodb.net/library?retryWrites=true&w=majority';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;