var fs = require('fs');
var http = require('http');
var size = fs.statSync('demo.txt');

http.createServer(function(req, res) {
	switch (req.url) {
		case '/file':
			fs.readFile('demo.txt', function(err, data){
				res.write('File style: \n');
				res.write(data);
				res.end();
			});
			break;
		case '/stream':
			var stream = fs.createReadStream('demo.txt');
			res.write('Stream style: \n');
			stream.pipe(res);
			break;	
		default:
			if(size.size <= 7000000){
				fs.readFile('demo.txt', function(err, data){
					res.write('File style: \n')
					res.write(data);
					res.end();
				});
			} else {
				var stream = fs.createReadStream('demo.txt');
				res.write('Stream style: \n');
				stream.pipe(res);
			}
	}

}).listen(3000, function(){
	console.log('Server at localhost:3000');
});

