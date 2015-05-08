/// <reference path="typings/node/node.d.ts"/>
var pg = require('pg');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

app.get('/ar', function (req, res) {
  res.send('ar!');
});

  
  var client = new pg.Client({
    user: "jauorvudzcscgc",
    password: "fO-nhI1ooxaSmakEDm9T_3C_Tl",
    database: "da10a1kv8r1ric",
    port: 5432,
    host: "ec2-23-21-96-129.compute-1.amazonaws.com",
    ssl: true
}); 

client.connect( function(err, client) {
    console.log(err);

   var query = client.query('SELECT * FROM fresh_jams');
  

  query.on('row', function(row) {
    console.log(JSON.stringify(row));
  });
  
});


module.exports = app;