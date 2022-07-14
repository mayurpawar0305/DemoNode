var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res){
	var url_p = url.parse(req.url,true);  //decode and then parse
	//console.log(url_p);			
	//console.log(url_p.pathname);
	//console.log(url_p.query.uid);
	var nm = url_p.query.uid;
	res.writeHead(200,{'content-type':'text/html'});
	res.write("<h1> Welcome "+nm+"</h1>");
	res.end();
});

server.listen(9000,function(){console.log("server at 9000")});
