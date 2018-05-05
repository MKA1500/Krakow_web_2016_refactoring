// make connection:
var frontEndSocket = io.connect('http://localhost:4000/');
// Query DOM:
var message = $('#Message'),
    handle = $('#Handle'),
    btn = $('#Send'),
    output = $('#Output'),
    feedback = $('#Feedback');
// Emit events
console.log('message: ' + message);
console.log('handle: ' + handle);
console.log('btn: ' + btn);
console.log('output: ' + output);

btn.click(function(){
  frontEndSocket.emit('chat-message', {
    message: message.val(),
    handle: handle.val()
  });
});

message.keypress(function(){
  frontEndSocket.emit('typing', handle.val());
});

// Listen for events:
frontEndSocket.on('chat-message', function(data){
  output.append(
    '<p><strong>' + data.handle + ': </strong>' +
    data.message + '</p>');
    feedback.html('');
});

frontEndSocket.on('typing', function(data){
  feedback.html(
    '<p><em>' + data + ' is typing a message... </em></p>');
});
