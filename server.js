var express = require('express')
  , app     = express()
  // , db      = require('./model/db')
  , mustacheExpress = require('mustache-express')
  , bodyParser      = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use('/static', express.static('static'));
app.use(require('./controllers'));

app.engine('html', mustacheExpress(__dirname + '/templates/partials', '.html'));

app.set('view engine', 'html');

//this is bullshit! the express applicaiaton overrides this but setting a 'default'
app.set('views', process.cwd() + '/templates');

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);

});

