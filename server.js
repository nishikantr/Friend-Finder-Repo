var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var apiRoute = require('./app/routing/api-routes.js');
var homeRoute = require('./app/routing/html-routes.js');

var app = express();
var PORT = 3000;

//Express app data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Sets up routes
app.get('/api/friends', apiRoute);
app.use('/', homeRoute);

app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})