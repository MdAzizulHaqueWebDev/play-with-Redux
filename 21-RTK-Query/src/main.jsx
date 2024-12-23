import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./Home.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import { store } from "./store/index.js";
import { Provider } from "react-redux";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			// <ApiProvider api={api} >
			// 	<App />
			// </ApiProvider>
			<Provider store={store}>
				<App />
			</Provider>
		),
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/contact",
				element: <p>Contact Us</p>,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />,
);
