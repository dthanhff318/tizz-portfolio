import useNavbarServices from "./navbar.service";

const Navbar = () => {
	const { navList } = useNavbarServices();
	return (
		<nav className="w-[50px] lg:w-[80px] h-full bottom-7 left-2 items-center flex flex-col gap-2 bg-primary-bold p-2 rounded-3xl  transition-all">
			{navList.map((e, i) => (
				<div></div>
			))}
		</nav>
	);
};

export default Navbar;
