const express = require("express");
const app = express();

app.get("/api", (req, res) => {
	res.json({ fruits: ["apple", "mango", "banana"] });
});

app.listen(8080, () => {
	console.log("Server is up and going");
});
