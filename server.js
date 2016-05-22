var express = require("express");
var strftime = require("strftime");
var routes = require("./routes/routes.js");

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(routes);

app.listen(3000);