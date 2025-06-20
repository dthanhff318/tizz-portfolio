/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#0d1116",
				"primary-bold": "#361617",
				"primary-light": "#c23e3b",
				"text-primary": "#fffafb",
				"text-secondary": "#ae5d66",
				"border-primary": "#c9d1d9",
			},
		},
	},
};
