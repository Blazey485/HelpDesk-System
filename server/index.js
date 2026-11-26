const db = require("./database");

const express = require("express");
const app = express();
app.use(express.json());
const PORT = 8080;

app.get("/api", (req, res) => {
	try {
		const rows = db.prepare("SELECT * FROM tickets").all();

		//destructureing the data.
		const tickets = rows.map((data) => ({
			ticketId: String(data.id),
			created: data.created,
			sentBy: data.sent_by,
			forum: {
				topic: data.topic,
				emergancy: data.emergency,
				desc: data.description,
				bilde: data.image
			}
		}));

		//error handle
		return res.status(200).json({ tickets });
	} catch (err) {
		console.error("Failed to load tickets:", err);
		return res.status(500).json({ error: " Server Error" });
	}
});

app.listen(PORT, () => {
	console.log(
		`Server listening on http://localhost:${PORT}`
	);
});
