import type { FunctionComponent } from "./common/types";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import appConfigStore from "./store/appConfigStore";
import { ETheme } from "./helpers/enum";
import MainLoading from "./components/loading/MainLoading.tsx";

type AppProps = { router: ReturnType<typeof createBrowserRouter> };

const App = ({ router }: AppProps): FunctionComponent => {
	const { setTheme } = appConfigStore();
	const [loading] = useState<boolean>(false);

	useEffect(() => {
		const themeLocal = JSON.parse(
			JSON.stringify(localStorage.getItem("theme") || "")
		);
		if (!!themeLocal) {
			setTheme(themeLocal as ETheme);
		} else if (window.matchMedia("(prefers-color-schema: dark)")) {
			setTheme(ETheme.DARK);
		} else {
			setTheme(ETheme.LIGHT);
		}
	}, []);

	return <>{loading ? <MainLoading /> : <RouterProvider router={router} />}</>;
};

export default App;
