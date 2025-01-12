import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { FunctionComponent } from "./common/types";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import appConfigStore from "./store/appConfigStore";
import { ETheme } from "./helpers/enum";
import SplashCursor from "./blocks/Animations/SplashCursor/SplashCursor.tsx";
const queryClient = new QueryClient();

type AppProps = { router: ReturnType<typeof createBrowserRouter> };

const App = ({ router }: AppProps): FunctionComponent => {
	const { setTheme } = appConfigStore();

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

	return (
		<QueryClientProvider client={queryClient}>
			<SplashCursor />
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
};

export default App;
