var express = require('express')
  , app     = express();

app.use('/api/v1', require('./api/v1'));
app.use('/api/v2', require('./api/v2'));
app.use('/api', require('./api/v2'));
app.use('/', require('./www'));

module.exports = app
