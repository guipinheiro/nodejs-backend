/*
- Streams read/write data piece by piece (chunks) without completing the entire r/w operation and also without keeping all data in memory
- Examples of streams: youtube and netflix. 
- In nodeJS, readable streams can be used to read a file or a http request
- Writable streams, on the otherhand, are the opposite, a file to send or a http response
*/

const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
	// No need to load the entire file to memory
	// fs.readFile('data.txt', (err, data) => {
	//    if (err) console.log(err)
	//    res.end(data);
	// })

	// Creating a readable stream
	const readable = fs.createReadStream("./data/products.json");

	// Pipe the stream chunk to a writable Stream
	readable.pipe(res);
});

server.listen(5000, "127.0.0.1", () => {
	console.log("Waiting for request");
});

