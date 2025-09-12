import type { FunctionComponent } from "./common/types";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import MainLoading from "./components/loading/MainLoading.tsx";
import ReactGA from "react-ga4";

// Analyze using Google Analytics
ReactGA.initialize("G-6SHWN9NK16");

type AppProps = { router: ReturnType<typeof createBrowserRouter> };

const App = ({ router }: AppProps): FunctionComponent => {
	const [loading] = useState<boolean>(false);

	return <>{loading ? <MainLoading /> : <RouterProvider router={router} />}</>;
};

export default App;
