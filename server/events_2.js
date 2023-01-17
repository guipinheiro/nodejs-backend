const http = require("http");

const server = http.createServer();

// The logic of the server object
// Create an event called request
server.on("request", (req, res) => {
	// Execute this code when the 'request' event is triggered
	res.end("Request received");
});

// This will loop and wait for events
server.listen(5000, "127.0.0.1", () => {
	console.log("Waiting for request");
});
