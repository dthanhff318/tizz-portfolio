import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "./../pages/Home";
import EPath from "./path";
import AnimateRouting from "./AnimateRouting";

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
