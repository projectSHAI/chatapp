var socket = io();
$('form').submit(function(){
  socket.emit('chat message', $('#m').val());
  $('#m').val('');
  return false;
});
socket.on('connected', function(msg){
  $('#messages').append($('<li>').text(msg));
});
socket.on('chat message', function(msg){
  $('#messages').append($('<li>').text(msg));
});
socket.on('disconnected', function(msg){
  $('#messages').append($('<li>').text(msg));
});