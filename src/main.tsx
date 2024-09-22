import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/tailwind.css";
import "./common/i18n";
import router from "./routes/index.tsx";
import "./global.css";

const rootElement = document.querySelector("#root") as Element;
if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<React.StrictMode>
			<React.Suspense fallback="loading">
				<App router={router} />
			</React.Suspense>
		</React.StrictMode>
	);
}
