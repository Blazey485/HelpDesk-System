import { useState, useEffect } from "react";

function App() {
	return (
		<div>
			<div className="tittel"><p className="archivo">Trenger du hjelp?</p></div>

			<div className="logIn">
				<input className="brukerBoks archivo" type="text" placeholder="Brukernavn"/>
				<input className="passordBoks archivo" type="password" placeholder="Passord"></input>
				<button className="loggInnKnapp"><p className="archivo">Logg inn</p></button>
			</div>

		</div>
	);
}

export default App;

