var http = require("http");
var url = require("url");

function start (route, handle) {
	
	function onRequest(request, response){
		
		var pathname = url.parse(request.url).pathname;
		
		console.log("Request for " + pathname + " Recieved");
		
		route(handle, pathname, response);
		
		/*response.writeHead(200, {"Content-Type": "text/plain"});
		var content = route(handle, pathname);
		response.write(content);
		response.end();*/
	}
	http.createServer(onRequest).listen(8882);
	console.log( "Server has started." );
	
}

exports.start = start;	