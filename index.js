var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200, {'content-type' : tet/html});
    res.end('Hello World');
}).listen(8080);