const express = require("express");
const app = express();
const PORT = 65507;
const getTicketsWithFruits = () => {
	// Nested array of fruit detail objects under each ticket entry:
	// tickets -> [ [ { ...fruit }, ... ], [ { ...fruit }, ... ] ]
	return [
		[
			{ id: "f1", name: "Mango", quantity: 2, price: 3.5 },
			{ id: "f2", name: "Banana", quantity: 6, price: 1.2 }
		],
		[
			{
				id: "f3",
				name: "Strawberry",
				quantity: 1,
				price: 4.0
			},
			{ id: "f4", name: "Apple", quantity: 4, price: 2.4 }
		]
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
		"Server listening on http://localhost:65507/"
	);
});
