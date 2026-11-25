import { useState, useEffect } from "react";

function App() {
	return (
		<div>
			<div className="tittel"><p className="archivo">Trenger du hjelp?</p></div>

			<div className="logIn">
				<input className="brukerBoks archivo" type="text" placeholder="Brukernavn"/>
				<input className="passordBoks archivo" type="password" placeholder="Passord"></input>
				<button className="loggInnKnapp"><p className="archivo">Logg inn</p></button>

				<select className="tema">
					<option value="tema">Tema</option>
					<option value="lav">Lav</option>
					<option value="middels">Middels</option>
					<option value="Høy">Høy</option>
				</select>
			</div>
			
			<div className="bunn"><p className="archivo">Nettside laget av Niksan og Zulihan 2IMIT</p></div>

		</div>
	);
}

export default App;

