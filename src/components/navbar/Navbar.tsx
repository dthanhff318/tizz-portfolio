import { useLocation } from "react-router-dom";
import useNavbarServices from "./navbar.service";

const Navbar = () => {
	const location = useLocation();
	const { navList, handleMouseEnter, handleMouseOut, handleMouseOutNav } =
		useNavbarServices();
	return (
		<nav
			className="z-50 fixed bottom-7 left-2/4 -translate-x-1/2 items-end flex gap-2 bg-slate-200 p-2 w-fit rounded-3xl h-fit max-h-[60px] transition-all"
			onMouseLeave={handleMouseOutNav}
		>
			{navList.map((e, i) => (
				<div className="tooltip" data-tip={e.title}>
					<div
						key={i}
						className={`${location.pathname === e.path && "border-gray-400 border-[1px]"} bg-slate-300 nav-item flex items-center justify-center rounded-full p-2 transition-all duration-500 w-[45px] h-[45px] cursor-pointer`}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseOut}
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
