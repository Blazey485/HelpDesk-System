import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router";

const routing = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/forum",
    element: <RootApp></RootApp>,
  }
])

const RootApp = () => {
  return(
    <div>

    </div>
  )
}

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
