import type { FunctionComponent } from "./common/types";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import MainLoading from "./components/loading/MainLoading.tsx";

type AppProps = { router: ReturnType<typeof createBrowserRouter> };

const App = ({ router }: AppProps): FunctionComponent => {
	const [loading] = useState<boolean>(false);

	return <>{loading ? <MainLoading /> : <RouterProvider router={router} />}</>;
};

export default App;
