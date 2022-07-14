var http = require('http');
var events = require('events');

var ee = new events.EventEmitter();   //attach listener, emit the event

ee.on('received',function(){ console.log("req received")});
ee.on('log',function(){});
ee.on('read',function(){});
ee.on('generate',function(){});


http.createServer(function(req,res){
     //check - req received
     //log -req info
     // read the file content
     // write the contents
     ee.emit('received');   //firing the event
}).listen(9000,function(){ console.log("server started")});