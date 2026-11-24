import { useState, useEffect } from "react";

const AdminPanel = () => {
	const [apiData, setApiData] = useState([]);

	useEffect(() => {
		fetchAPI();
	}, []);

	const fetchAPI = async () => {
		try {
			const data = await fetch("/api");

			if (!data.ok) {
				console.error(
					`Server error (${data.status}):`,
					await data.text()
				);
				return;
			}
			const json = await data.json();

			console.log(json.tickets);

			setApiData(json);
		} catch (err) {
			console.log(
				"myslkket for å skaffe dataene, error kode",
				err
			);
		}
	};
	return (
		<div className="bg-black">
			<h1 className="bg-amber-900">Try trst</h1>
		</div>
	);
};

export default AdminPanel;
