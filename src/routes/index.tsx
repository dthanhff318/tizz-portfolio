import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Contact from "../pages/Contact";
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
			{
				path: EPath.Projects,
				element: (
					<AnimateRouting key={EPath.Projects}>
						<Projects />
					</AnimateRouting>
				),
			},
			{
				path: EPath.Career,
				element: (
					<AnimateRouting key={EPath.Career}>
						<Career />
					</AnimateRouting>
				),
			},
			{
				path: EPath.Contact,
				element: (
					<AnimateRouting key={EPath.Contact}>
						<Contact />
					</AnimateRouting>
				),
			},
		],
	},
]);

export default router;
