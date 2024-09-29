import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Welcome from "../pages/Welcome";
import Home from "./../pages/Home";
import EPath from "./path";

const router = createBrowserRouter([
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
			{
				path: EPath.Contact,
				element: <Contact />,
			},
		],
	},
]);

export default router;
