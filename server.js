const http = require("http");
function handler(req, res) {
    if (req.url ==="/") {
        res.write("Welcome to the server side");
        res.end();
    }
}
const server = http.createServer(handler);
server.listen(5000);
