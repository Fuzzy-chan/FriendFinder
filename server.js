var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);

app.listen(port, function () {
  console.log('Started on Port: ' + port);
});
