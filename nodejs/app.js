var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var port = 8000;
var app = express();


// on the request to root
app.get('/', function (req, res) {
    res.send('<b>My</b> first express http server running on port: ' + port);
});

app.listen(port);
console.log('Server is running on port: ' + port);
