const db = require("./database");

const express = require("express");
const app = express();
app.use(express.json());
const PORT = 8080;


// const getTicketsWithFruits = () => {
// 	return [
// 		{
// 			Ticket_ID: "1",
// 			Created: "09:20",
// 			Sent_By: "Blazey",
// 			forum: {
// 				Topic: "Mango",
// 				Emergancy: "medium",
// 				Desc: "GREIA IKKE FUNKA KA BOOM",
// 				Bilde: "img.png"
// 			}
// 		},

// 		{
// 			Ticket_ID: "2",
// 			Created: "09:20",

// 			Sent_By: "Blazey",
// 			forum: {
// 				Topic: "Wifi",
// 				Emergancy: "medium",
// 				Desc: "GREIA IKKE FUNKA KA BOOM",
// 				Bilde: "img.png"
// 			}
// 		},

// 		{
// 			Ticket_ID: "3",
// 			Created: "19:20",
// 			Sent_By: "jason",
// 			forum: {
// 				Topic: "Display",
// 				Emergancy: "medium",
// 				Desc: "GREIA IKKE FUNKA KA BOOM",
// 				Bilde: "img.png"
// 			}
// 		}
// 	];
// };

app.get("/api", (req, res) => {
	try {
		const rows = db.prepare("SELECT * FROM tickets").all();

		const tickets = rows.map((data) => ({
			Ticket_ID: String(data.id),
			Created: data.created,
			Sent_By: data.sent_by,
			forum: {
				Topic: data.topic,
				Emergancy: data.emergency,
				Desc: data.description,
				Bilde: data.image
			}
		}));

		return res.status(200).json({ tickets });
	} catch (err) {
		console.error("Failed to load tickets:", err);
		return res.status(500).json({ error: " Server Error" });
	}
});

// app.get("/api", async (req, res) => {
// 	try {
// 		const tickets = await getTicketsWithFruits();
// 		return res.status(200).json({ tickets });
// 	} catch (err) {
// 		console.error("Failed to load tickets:", err);
// 		return res
// 			.status(500)
// 			.json({ error: "Internal Server Error" });
// 	}
// });

app.listen(PORT, () => {
	console.log(
		`Server listening on http://localhost:${PORT}`
	);
});
