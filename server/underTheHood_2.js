const http = require("http");

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.end("<h1>Home Page</h1>");
	} else if (req.url === "/about") {
		res.end("<h1>About Page </h1>");
		let i = 0;
		do {
			i++;
		} while (i < 10000000000); //will be executed synchronously, so if someone accesses the about page, all servers will be blocked for other users
	} else {
		res.end("Page not found");
	}
});

const port = 5000;
server.listen(port, "localhost", () => {
	console.log(`Server is listening at localhost on ${port}`);
});

