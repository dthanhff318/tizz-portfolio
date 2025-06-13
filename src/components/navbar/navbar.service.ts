import { useNavigate } from "react-router-dom";
import { ETheme } from "../../helpers/enum";
import EPath from "../../routes/path";
import appConfigStore from "../../store/appConfigStore";
import { DarkIcon, HomeIcon, LightIcon } from "./navbar.icon";

const useNavbarServices = () => {
	const { theme, setTheme } = appConfigStore();
	const navigate = useNavigate();

	const changeTheme = (theme: ETheme) => () => {
		setTheme(theme);
	};

	const navList = [
		{
			key: "home",
			title: "Home",
			icon: HomeIcon,
			path: EPath.Home,
			onClick: () => navigate(EPath.Home),
		},
		// {
		// 	key: "project",
		// 	title: "Project",
		// 	path: EPath.Projects,
		// 	icon: FolderIcon,
		// 	onClick: () => navigate(EPath.Projects),
		// },
		// {
		// 	key: "career",
		// 	title: "Career",
		// 	icon: TargetIcon,
		// 	path: EPath.Career,
		// 	onClick: () => navigate(EPath.Career),
		// },
		// {
		// 	key: "github",
		// 	title: "Github",
		// 	icon: GithubIcon,
		// 	onClick: () => window.open("https://github.com/dthanhff318"),
		// },
		// {
		// 	key: "contact",
		// 	title: "Contact",
		// 	icon: GmailIcon,
		// 	path: EPath.Contact,
		// 	onClick: () => navigate(EPath.Contact),
		// },
		{
			key: "light",
			title: "Light mode",
			icon: theme === ETheme.DARK ? DarkIcon : LightIcon,
			onClick:
				theme === ETheme.DARK
					? changeTheme(ETheme.LIGHT)
					: changeTheme(ETheme.DARK),
		},
	];

	return { navList };
};

export default useNavbarServices;
