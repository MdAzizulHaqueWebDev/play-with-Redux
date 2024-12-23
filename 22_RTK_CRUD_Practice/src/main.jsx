import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./Home.jsx";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { api } from "./rtk_query/api.js";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<ApiProvider api={api}>
				<App />
			</ApiProvider>
		),
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/contact",
				element: (
					<div style={{ textAlign: "center" }}>
						Contact Us <br />
						<Link to={"/"}>Go HOme</Link>
					</div>
				),
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />,
);
