var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path')

app.use(express.static(path.join(__dirname, 'public')));

var redis = require('socket.io-redis');
io.adapter(redis({ host: 'localhost', port: 6379 }));

app.get( "/", function( req, res ) {
	res.sendFile( __dirname + "/index.html" );
} );

var c = 0;
io.on( "connection", function (socket){
	console.log("user connected");
	c++;

	socket.on( "disconnect", function () { c--; } );
} );

io.of('/').adapter.clients(function (err, clients) {
  console.log(clients); // an array containing all connected socket ids
});

http.listen(3000);