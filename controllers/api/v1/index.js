var express = require('express')
  , app     = express();

app.use('/example', require('./example'));

module.exports = app
