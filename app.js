var express = require('express');
var app = express();
require('dotenv').config();
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const port = process.env.PORT || 5000;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'frontend/build')));

app.use(require('./routes'));
app.listen(port);