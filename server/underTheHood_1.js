const fs = require("fs");

//Runs firts
console.log("First task started");

//Async code, Event loop from libuv makes the code go to the thread pool, not blocking the rest of the code
fs.readFile("./data/products.json", "utf-8", (err, data) => {
	console.log(data);
	console.log("First task ended"); //will be executed last
});

//Runs second
console.log("Second task started");

