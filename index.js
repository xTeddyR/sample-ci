var express = require('express');
var api = express();

api.get('/', function (req, res, next) {
    res.send('Hello world');
})

api.listen('3000', function () {
    console.log('Server started on port 3000');
})