// Load HTTP module
const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;

// Create HTTP Server and listen on port 3000 for requests
const server = http.createServer(function (request, response) {

    // Set the response HTTP header with HTTP status and Conent type
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body "Hello First Server!"
    response.end('Hello First Serveer!\n');

})

// Listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
