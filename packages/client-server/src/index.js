"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.send('Hello tianming');
});
app.listen(9000, function () {
    console.log('Tianming is running on port 9000');
});
