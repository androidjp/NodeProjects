/** Created by CUIJA on 05-19-2017.*/
var express = require('express');

var app = express();

app.use('/', express.static('static'));///将这个static/目录下所有文件变成静态目录

app.listen(3000);///监听3000