/// <reference path="typings/node/node.d.ts"/>
var express = require('express');
var pg = require('pg');
var app = express();

app.get('/', function (req, res) {
  res.render('index.jade');
});

app.get('/ar', function (req, res) {
  res.send('ar!');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
  
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


});