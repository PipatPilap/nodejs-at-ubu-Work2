var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World! Pipat Pilap');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1 style="color:red;">Hello World! From Kewalee</h1>');
}).listen(8080);
