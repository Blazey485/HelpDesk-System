const { DatabaseSync } = require("node:sqlite");

const db = new DatabaseSync("tickets.db");

db.exec(
	`
   CREATE TABLE IF NOT EXISTS tickets (
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   created TEXT NOT NULL,
   sent_by TEXT NOT NULL,
   topic TEXT NOT NULL,
   emergency TEXT NOT NULL,
   description TEXT NOT NULL,
   image TEXT
   )   
`
);

const { n } = db
	.prepare("SELECT COUNT(*) AS n FROM tickets")
	.get();

if (n === 0) {
	const insert = db.prepare(`
    INSERT INTO tickets (created, sent_by, topic, emergency, description, image)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

	insert.run(
		"09:20",
		"Blazey",
		"Skjerm",
		"medium",
		"GREIA IKKE FUNKA KA BOOM",
		"img.png"
	);
	insert.run(
		"09:20",
		"Blazey",
		"Wifi",
		"medium",
		"GREIA IKKE FUNKA KA BOOM",
		"img.png"
	);
	insert.run(
		"19:20",
		"jason",
		"Display",
		"medium",
		"GREIA IKKE FUNKA KA BOOM",
		"img.png"
	);
}

module.exports = db;
