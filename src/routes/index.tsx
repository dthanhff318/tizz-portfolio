import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Projects from "../pages/Projects";
import Home from "./../pages/Home";
import EPath from "./path";
import AnimateRouting from "./AnimateRouting";
import Career from "../pages/Career";

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
				element: (
					<AnimateRouting key={EPath.Home}>
						<Home />
					</AnimateRouting>
				),
			},
		],
	},
]);

export default router;
