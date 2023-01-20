const http = require("http");
const fs = require("fs").promises;

const requestListener = (req, res) => {
	if (req.url === "/") {
		res.setHeader("Content-Type", "text/html");
		res.writeHead(200);
		res.end("<h1>Home Page</h1>");
	} else if (req.url === "/form") {
		fs.readFile(`../Front/index.html`)
			.then((contents) => {
				res.setHeader("Content-Type", "text/html");
				res.writeHead(200);
				res.end(contents);
			})
			.catch((err) => {
				res.writeHead(500);
				res.end(err);
				return;
			});
	} else {
		res.setHeader("Content-Type", "text/html");
		res.writeHead(500);
		res.end("Page not found");
	}
};

const PORT = 8000;
const host = "localhost";

const server = http.createServer(requestListener);
server.listen(PORT, host, () => {
	console.log(`Servers is on http://${host}:${PORT}`);
});

