const http = require("http"); 
const port = process.env.PORT || 80;

http 
    .createServer(function (req, res) { 
    res.write("<h1>Hello World! index</h1>");
    //write a response to the client 
 
    res.end();
    //end the response 
    }) 
    .listen(port);
    //Server runs on localhost:8080 