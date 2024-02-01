const http = require("http"); 

http 
    .createServer(function (req, res) { 
    res.write("<h1>Hello World! index</h1>");
    //write a response to the client 
 
    res.end();
    //end the response 
    }) 
    .listen(8080);
    //Server runs on localhost:8080 