import { Outlet } from "react-router-dom";
import { FunctionComponent } from "../../common/types";
import Navbar from "../navbar/Navbar";
import DogAnimation from "../dogAnimation/DogAnimation";
import { ReactNode } from "react";

type TProps = {
	children: ReactNode;
};

const Layout = (): FunctionComponent => {
	return (
		<div className="w-screen h-screen">
			<Navbar />
			<DogAnimation />
			<Outlet />
		</div>
	);
};

export default Layout;
