//Inisialisasi Express Sama Body Parser
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./route/api');
routes(app);

app.listen(3000);
console.log('Jalankan Localhost:3000');