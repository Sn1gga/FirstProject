
//Задача 1
var http = require('http');
var fs = require('fs');

//var file = fs.readFileSync('index.html');

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
		case 'contact':
			res.writeHeader(200, {"Content-Type": "text/html"});
			fs.createReadStream('index.html').pipe(res);
			///res.write(file);
			//res.end(file);
			break;
		default:
			res.write('Hello World!');
			res.end();

	}
}).listen(3000, function(){
	console.log('Server at localhost:3000');
});

