/// <reference path="typings/node/node.d.ts"/>
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var pg = require('pg');



var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
  
  pg.connect(process.env.DATABASE_URL, function(err, client) {
    if (err) {
      throw err;
    }else{
  var query = client.query('SELECT * FROM your_table');

  query.on('row', function(row) {
    console.log(JSON.stringify(row));
  });
  }
});

});