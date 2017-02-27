'use strict';

var path =  require('path');
var express = require('express');
var cons = require('consolidate');
var mongoose    =   require("mongoose");
var bodyParser = require('body-parser')
mongoose.connect('mongodb://localhost:27017/db_flairy');
// initialize the server and configure support for ejs templates
const app = new express();

// view engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'src'));
app.set('view engine', 'html');


// define the folder that will be used for static assets
app.use(express.static(__dirname + '/src'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
/**
 * Primary app routes.
 */
  app.get('*', function response(req, res) {
      res.sendFile(path.join(__dirname, 'src/index.html'));
  });

require('./routes/')(app);

// start the server
const port = process.env.PORT || 3004;
const env = process.env.NODE_ENV || 'production';
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});