import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import AdminPanel from "./Admin.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
		<AdminPanel></AdminPanel>
	</StrictMode>
);
