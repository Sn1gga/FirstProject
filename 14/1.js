
//Задача 1
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
	switch (req.url) {
		case '/about':
			console.log(req);
			res.end();
			break;
		case '/stop':
			console.log('Server is down');
			req.connection.end();
        	req.connection.destroy;
			res.end();
			break;
		case '/file':
			fs.readFile('data.txt', function(err, data) {
				res.write(data);
			});
			res.end();
			break;
		default:
			res.write('Hello World!');
			res.end();

	}
}).listen(3000, function(){
	console.log('Server at localhost:3000');
});

