/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				"background-light": "var(--background-light)",
				"text-color": "var(--text-color)",
				"text-primary": "var(--text-primary)",
				"text-green": "var(--text-green)",
			},
		},
	},
	plugins: [require("daisyui")],
};
