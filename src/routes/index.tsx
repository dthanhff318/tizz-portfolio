import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "./../pages/Home";
import EPath from "./path";
import AnimateRouting from "./AnimateRouting";
import Login from "@/pages/login";
import AuthCallback from "@/pages/auth";

const router = createBrowserRouter([
	{
		path: EPath.Auth,
		element: <AuthCallback />,
	},
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
	{
		path: EPath.Login,
		element: <Layout />,
		children: [
			{
				path: EPath.Login,
				element: <Login />,
			},
		],
	},
]);

export default router;
