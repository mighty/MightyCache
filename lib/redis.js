var net = require('net');

var server = net.createServer(function (socket) {

	socket.on('connect', function () {
		console.info('Client connected');
	});

	socket.on('data', function (data) {
		console.info('Client sent: %s', data);
		socket.write(data);
	});

	socket.on('end', function () {
		console.info('Client disconnected');
	});

	socket.on('timeout', function () {
		console.info('Client timeout');
	});

	socket.on('error', function (exception) {
		console.info('Client error: %s', exception);
	});

	socket.on('close', function () {
		console.info('Client closed');
	});

});

server.listen(11211, '127.0.0.1', function(){
	console.log('Server bound at http://127.0.0.1:6379/');
});