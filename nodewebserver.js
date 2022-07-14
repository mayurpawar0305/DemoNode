var h = require('http');  //http - node module name

//node app - behaving as web server
var server = h.createServer(function(req,res){
	console.log("req received");
	res.writeHead(200,{'content-type':'text/html'});
	res.write("<h1>Hello from web server</h1>");
	res.end();   //sends response back to client
});

server.listen(9000, function(){
	console.log("server started at 9000");
})



