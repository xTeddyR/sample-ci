var express = require('express');
var api = express();
var DEFAULT_PORT = 3000;

// configure static server
api.use(express.static('public'));

require('./models')(api); // load models
require('./methods')(api); // load methods

var port = process.env.PORT || DEFAULT_PORT;
console.log('Server started on port ' + port);
api.listen(port);

module.exports = api;