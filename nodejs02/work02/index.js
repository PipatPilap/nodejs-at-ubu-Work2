var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1 style="color:white;background-color:blue;">Hello World! Pipat Pilap<h1>'+'\n');
    res.write('<h2 style="color:red;background-color:black;">Hello World! From Kewalee</h2>');
    res.end();
}).listen(8080);
