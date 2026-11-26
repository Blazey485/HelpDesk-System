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

			setApiData(json.tickets);
		} catch (err) {
			console.log(
				"myslkket for å skaffe dataene, error kode",
				err
			);
		}
	};
	return (
		<div className="bg-black">
			<h1 className="bg-amber-900">ADMIN PANEL</h1>

			<div>
				{apiData.map((data) => (
					<div key={data.ticketId}>
						<h2 className="bg-amber-200">{data.created}</h2>

						<div>
							<h2 className="bg-amber-200">
								{data.sentBy}
							</h2>
						</div>

						<div>
							<h2 className="bg-amber-200">
								{data.forum?.topic}
							</h2>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AdminPanel;
