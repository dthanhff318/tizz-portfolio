import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ETheme } from "../../helpers/enum";
import EPath from "../../routes/path";
import appConfigStore from "../../store/appConfigStore";
import {
	TargetIcon,
	DarkIcon,
	FolderIcon,
	GithubIcon,
	GmailIcon,
	HomeIcon,
	LightIcon,
} from "./navbar.icon";

const DEFAULT_WiDTH = 65;
const MIN_WIDTH = 45;

const useNavbarServices = () => {
	const { theme, setTheme } = appConfigStore();
	const navigate = useNavigate();
	const triggerRef = useRef<{ timeOut: any }>({
		timeOut: null,
	});

	const changeTheme = (theme: ETheme) => () => {
		setTheme(theme);
	};

	const navList = [
		{
			key: "home",
			title: "Home",
			icon: HomeIcon,
			onClick: () => navigate(EPath.Home),
		},
		{
			key: "project",
			title: "Project",
			icon: FolderIcon,
			onClick: () => navigate(EPath.Projects),
		},
		{
			key: "career",
			title: "Career",
			icon: TargetIcon,
			onClick: () => navigate(EPath.Career),
		},
		{
			key: "github",
			title: "Github",
			icon: GithubIcon,
			onClick: () => window.open("https://github.com/dthanhff318"),
		},
		{
			key: "contact",
			title: "Contact",
			icon: GmailIcon,
			onClick: () => navigate(EPath.Contact),
		},
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

	const handleResizeElement = (index: number) => {
		const loopCountBackward = index;
		const loopCountForward = navList.length - 1 - index;
		const minValue = 45;
		// Backward
		for (let i = 0; i < loopCountBackward; i++) {
			const siblingElement = document.querySelector(
				`[data-order="${index - i - 1}"]`
			) as HTMLDivElement;
			if (siblingElement) {
				const calculateWidth = DEFAULT_WiDTH - 5 * (i + 1);
				const resultWidth =
					calculateWidth > minValue ? calculateWidth : minValue;
				siblingElement.style.width = `${resultWidth}px`;
				siblingElement.style.height = `${resultWidth}px`;
			}
		}
		// Forward
		for (let i = 0; i < loopCountForward; i++) {
			const siblingElement = document.querySelector(
				`[data-order="${index + i + 1}"]`
			) as HTMLDivElement;
			if (siblingElement) {
				const calculateWidth = DEFAULT_WiDTH - 5 * (i + 1);
				const resultWidth =
					calculateWidth > minValue ? calculateWidth : minValue;
				siblingElement.style.width = `${resultWidth}px`;
				siblingElement.style.height = `${resultWidth}px`;
			}
		}
	};
	const handleMouseEnter = (e: any) => {
		if (triggerRef.current.timeOut) {
			clearTimeout(triggerRef.current.timeOut);
		}
		const currentTarget = e.currentTarget;
		const indexData = Number(currentTarget.dataset.order);
		currentTarget.style.width = `${DEFAULT_WiDTH}px`;
		currentTarget.style.height = `${DEFAULT_WiDTH}px`;
		handleResizeElement(indexData);
	};

	const handleMouseOut = () => {
		const timeOut = setTimeout(() => {
			const navElements = document.querySelectorAll(".nav-item");
			navElements.forEach((ele) => {
				(ele as HTMLDivElement).style.width = `${MIN_WIDTH}px`;
				(ele as HTMLDivElement).style.height = `${MIN_WIDTH}px`;
			});
		}, 100);
		triggerRef.current.timeOut = timeOut;
	};

	const handleMouseOutNav = () => {
		const navElements = document.querySelectorAll(".nav-item");
		navElements.forEach((ele) => {
			(ele as HTMLDivElement).style.width = `${MIN_WIDTH}px`;
			(ele as HTMLDivElement).style.height = `${MIN_WIDTH}px`;
		});
	};

	return { navList, handleMouseEnter, handleMouseOut, handleMouseOutNav };
};

export default useNavbarServices;
