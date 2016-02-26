var port=3000;
express = require('express');
app=express().use(express.static(__dirname + '/'));
http = require('http').Server(app);
var io = require('socket.io')(http);
//var html_dir='./html/';
app.get('/', function(req, res){
	res.sendFile(__dirname + '/Login.html');

});
app.get('/', function(req, res){
	res.sendFile(__dirname + '/login_map.html');

});
app.get('/', function(req, res){
	res.sendFile(__dirname + '/forgotpassword.html');

});

app.get('/', function(req, res){
	res.sendFile(__dirname + '/newuser.html');

});
app.get('/', function(req, res){
	res.sendFile(__dirname + '/Welcome.html');

});
app.get('/', function(req, res){
	res.sendFile(__dirname + '/dashingcar_final.html');

});
app.get('/', function(req, res){
	res.sendFile(__dirname + '/TopScore.html');

});

io.on('connection', function(socket){
	console.log('a user connected');
  socket.on('chat message', function(msg){
  	console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on', http.address().port);
});
