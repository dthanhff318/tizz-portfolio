import { create } from "zustand";
import { ETheme } from "../helpers/enum";

type TAppConfigStore = {
	theme: ETheme;
	setTheme: (theme: ETheme) => void;
};
const appConfigStore = create<TAppConfigStore>((set) => ({
	theme: ETheme.DARK,
	setTheme: (theme: ETheme) => {
		document.body.classList.remove(...document.body.classList);
		document.body.classList.add(theme);
		localStorage.setItem("theme", theme);
		return set({ theme });
	},
}));

export default appConfigStore;
