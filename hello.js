var http = require('http');
var hello = require("./my-module")

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World! Ok.\n' + hello.myHello());
}).listen(8080);