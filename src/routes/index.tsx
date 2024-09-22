import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import ProtectRoute from "./ProtectRoute";
import Projects from "../pages/Projects";
import Welcome from "../pages/Welcome";
import EPath from "./path";
import Home from "./../pages/Home";

const router = createBrowserRouter([
	// {
	// 	path: EPath.Index,
	// 	element: (
	// 		<Layout>
	// 			<Home />
	// 		</Layout>
	// 	),
	// },
	// {
	// 	path: EPath.Projects,
	// 	element: <Projects />,
	// },
	// {
	// 	path: EPath.Welcome,
	// 	element: <Welcome />,
	// },
	{
		path: EPath.Home,
		element: (
			// <ProtectRoute>
			<Layout />
			// </ProtectRoute>
		),
		children: [
			{
				path: EPath.Home,
				element: <Home />,
			},
			{
				path: EPath.Projects,
				element: <Projects />,
			},
			{
				path: EPath.Welcome,
				element: <Welcome />,
			},
		],
	},
]);

export default router;
