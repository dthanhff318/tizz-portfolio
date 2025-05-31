/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#61272d",
				"primary-bold": "#361617",
				"primary-light": "#c23e3b",
				"text-primary": "#fffafb",
				"text-secondary": "#ae5d66",
			},
		},
	},
};
