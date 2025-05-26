import { lazy, Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { FunctionComponent } from "../../common/types";
import Navbar from "../navbar/Navbar";

const Layout = (): FunctionComponent => {
	return (
		<div className="relative w-screen h-screen bg-primary overflow-y-auto overflow-x-hidden px-4 py-6 flex ">
			<Navbar />
			<Outlet />
			<Navbar />
		</div>
	);
};

export default Layout;
