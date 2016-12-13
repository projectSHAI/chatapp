var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){

  io.emit('connected', 'A new user connected!');	

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

  socket.on('disconnect', function(){
  	io.emit('disconnected', 'A user left the chat');
  });

});

app.use(express.static(__dirname + '/public'));

http.listen(3000, function(){
	console.log('Listening on port 3000');
});
