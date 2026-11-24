import { useState } from "react";

const App = () => {
	const [count, setCount] = useState(0);

	

	
	return (
		
		<div>
			<div className="tittel"><p className="archivo">Trenger du hjelp?</p></div>

			<div className="logIn">
				<input className="brukerBoks archivo" type="text" placeholder="Brukernavn"/>
				<input className="passordBoks archivo" type="password" placeholder="Passord"></input>
			</div>

		</div>
	);
}

export default App;
