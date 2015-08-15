var express = require('express')
  , app     = express()
  , config  = require('config');

app.get('/', function (req, res) {
    res.render('www', { } );
});

module.exports = app
