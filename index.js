const http = require("http"); 

http 
    .createServer(function (req, res) { 
    res.write("<h1>Hello World!</h1>");
    //write a response to the client 
 
    res.end();
    //end the response 
    }) 
    .listen(80);
    //Server runs on localhost:8080 