var express = require('express')
  , app     = express();

app.use('/', require('./www'));

module.exports = app
