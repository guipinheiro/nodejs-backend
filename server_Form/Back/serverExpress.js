const express = require("express");
const app = express();

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`App started and listening on port ${PORT}`);
});

app.use(express.static("../Front"));

app.get("/", (req, res) => {
	res.sendFile("../Front/index.html");
});

