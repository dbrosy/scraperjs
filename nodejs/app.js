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

// using cheerio
app.get('/api', function (req, res) {
    request(url, function (error, response, html) {
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(html, { normalizeWhitespace: false, xmlMode: false, decodeEntities: true });
            var list = [];
            $('div[class="cats catl"]').each(function (i, element) {
                var mpn = $(this).next().next().text();
                var desc = $(this).next().next().next().text();

                // Our parsed meta data object
                var metadata = {
                    mpn: mpn,
                    desc: desc
                };
                // Push meta-data into parsedResults array
                list.push(metadata);
            });

            // Log our finished parse results in the terminal
            console.log(list);
        } else {
            console.log('error - status not 200');
        }
    });
    res.send(list);
});

// start the server in the port 8000 !
app.listen(8000, function () {
    console.log('App listening on port: ' + port);
});
