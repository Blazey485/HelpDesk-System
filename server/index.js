const express = require("express");
const app = express();
const PORT = 65507;
app.use(express.json());

const getTicketsWithFruits = () => {
	return [
		{
			Ticket_ID: "1",
			Sent_By: "Blazey",
			forum: {
				Topic: "Mango",
				Emergancy: "medium",
				Desc: "GREIA IKKE FUNKA KA BOOM",
				Bilde: "img.png"
			}
		},

		{
			Ticket_ID: "1",
			Sent_By: "Blazey",
			forum: {
				Topic: "Mango",
				Emergancy: "medium",
				Desc: "GREIA IKKE FUNKA KA BOOM",
				Bilde: "img.png"
			}
		},

		{
			Ticket_ID: "2",
			Sent_By: "jason",
			forum: {
				id: "f3",
				name: "Strawberry",
				quantity: 1,
				price: 4.0
			}
		}
	];
};

app.get("/api", async (req, res) => {
	try {
		const tickets = await getTicketsWithFruits();
		return res.status(200).json({ tickets });
	} catch (err) {
		console.error("Failed to load tickets:", err);
		return res
			.status(500)
			.json({ error: "Internal Server Error" });
	}
});

app.listen(PORT, () => {
	console.log(
		`Server listening on http://localhost:${PORT}`
	);
});
