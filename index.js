var express = require('express');
// app setup:
var app = express();
var server = app.listen(4000, function(){
  console.log('listening to request on port 4000');
});
// static files:
app.use(express.static('./'));
