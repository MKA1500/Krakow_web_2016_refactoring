var express = require('express');
var socket = require('socket.io');
// app setup:
var app = express();
var server = app.listen(4000, function(){
  console.log('listening to request on port 4000');
});
// static files:
app.use(express.static('./'));
// socket setup:
var io = socket(server);
io.on('connection', function(socket){
  console.log('socket is connected', socket.id);
// handle chat events:
  socket.on('chat-message', function(data){
    // reffering to all sockets connected to the server:
    io.sockets.emit('chat-message', data);
  });
  
  socket.on('typing', function(data){
    socket.broadcast.emit('typing', data);
  });
});
