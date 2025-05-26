import { useLocation } from "react-router-dom";
import useNavbarServices from "./navbar.service";

const Navbar = () => {
	const location = useLocation();
	const { navList } = useNavbarServices();
	return (
		<nav className="z-1 w-[80px] h-full bottom-7 left-2 items-end flex flex-col gap-2 bg-primary-bold p-2 rounded-3xl  transition-all">
			{navList.map((e, i) => (
				<div>
					<div
						key={i}
						className={`${location.pathname === e.path && "fill-primary-light"} flex items-center justify-center rounded-full p-2 transition-all duration-500 w-[60px] h-[60px] cursor-pointer`}
						data-order={i}
						onClick={e.onClick}
					>
						{e.icon}
					</div>
				</div>
			))}
		</nav>
	);
};

export default Navbar;
