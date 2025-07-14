import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div className="relative w-screen h-screen bg-primary overflow-y-auto overflow-x-hidden flex">
			<div className="flex-1">
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
