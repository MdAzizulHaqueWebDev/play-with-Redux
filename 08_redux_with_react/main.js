import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/index";
console.dir(Provider);
createRoot(document.querySelector("#root")).render(
	<>
		<Provider store={store}>
			<App />
		</Provider>
	</>,
);
