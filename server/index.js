const express = require("express");
const app = express();

// Use environment variable or default to port 3000
const port = process.env.PORT || 5173;

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
