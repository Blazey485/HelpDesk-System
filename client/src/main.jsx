import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Forum from "./forum.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router";
import App from "./App.jsx";


const RootApp = () => {
  return(
    <div>

    </div>
  )
}


const routing = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/forum",
    element: <Forum></Forum>,
  }
])


const rootLayout = createRoot(
  document.getElementById("root")
);

rootLayout.render(<RouterProvider router={routing}></RouterProvider>)
