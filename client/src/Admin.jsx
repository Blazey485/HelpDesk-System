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
						<main className="flex bg-purple-50 font-bold text-xl gap-2 flex-col">
							<div className=" border-2 w-2xl">
								<h2 className="bg-amber-200">
									{data.forum?.emergancy}
								</h2>
								<h2 className="bg-amber-200">
									{data.sentBy}
								</h2>
								<h2 className="bg-amber-200">
									{data.created}
								</h2>
								<h2 className="bg-amber-200">
									{data.forum?.topic}
								</h2>
								<h2 className="bg-amber-200">
									{data.forum?.desc}
								</h2>
								<h2 className="bg-amber-200">
									{data.forum?.bilde}
								</h2>
							</div>
						</main>
					</div>
				))}
			</div>
		</div>
	);
};

export default AdminPanel;
