var express = require('express')
  , router  = express.Router()
  , config  = require('config');

router.get('/', function (req, res) {
    res.json( {'example':'here is a version 2'} );
});

module.exports = router
