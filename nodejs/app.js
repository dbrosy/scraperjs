var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var port = 8000;
var app = express();


// on the request to root
app.get('/', function (req, res) {
    res.send('<b>Express</b> http server running on port: ' + port);
});

/*
// On localhost:8000/welcome
app.get('/welcome', function (req, res) {
    res.send('<b>Hello</b> welcome to my http server made with express');
});

// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

*/
var code = '7C0307';
var url = 'https://www.offroadeq.com/en/caterpillar/' + code;

request(url, function(err, resp, body) {
if(err){
console.log(err);
} else {
console.log(body);
}
})


// start the server in the port 8000 !
app.listen(8000, function () {
    console.log('App listening on port: ' + port);
});
