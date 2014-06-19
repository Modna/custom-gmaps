
var express = require('express')
var http = require('http')
var path = require('path')
var app = express()

app.use(express.static(__dirname + '/static'));

app.use(express.logger('dev'))

app.set('port', process.env.PORT || 3000);

var server = http.createServer(app).listen(app.get('port'), function (){
  console.log("Server started on: " + app.get('port'))
})
