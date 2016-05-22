var express = require("express");
var strftime = require("strftime");
var routes = require("./routes/routes.js");

var app = express();

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.use(routes);

app.listen(port);