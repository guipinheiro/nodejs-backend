const EventEmitter = require("events");

const myEmitter = new EventEmitter();

// eventEmitter.on = registers a listeners
myEmitter.on("newSale", () => {
	console.log("A new sale occur");
});

myEmitter.on("newBuy", () => {
	console.log("A new buy occur");
});

// eventEmitter.emit triggers the listener and execute the callback function
myEmitter.emit("newSale");
myEmitter.emit("newBuy");

// Pass arguments to listeners
const myEmitter2 = new EventEmitter();

myEmitter2.on("newSale", (total) => {
	console.log(`A new sale occurr total of: $${total}`);
});

myEmitter2.emit("newSale", 599.99);

