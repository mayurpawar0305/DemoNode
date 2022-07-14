var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res){
	var url_p = url.parse(req.url,true);
	var nm = url_p.query.uid;
	res.writeHead(200,{'content-type':'text/html'});
	res.write("<h1> Have a great day, "+nm+"</h1>");
	res.end();
});

server.listen(9000,function(){console.log("server at 9000")});

//http://localhost:9000/home?uid=mayur