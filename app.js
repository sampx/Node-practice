/**
 * Created by Sam on 16/5/12.
 */

//app.js
var http = require('http');
http.createServer(
    function(req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Node.js</h1>');
        res.end('<p>Hello World</p>');
    }
).listen(80);

console.log("HTTP server is listening at port 80.");