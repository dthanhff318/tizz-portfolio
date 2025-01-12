import { TContact } from "../types/contact";

const contactConfig: TContact[] = [
	{
		name: "Facebook",
		value: "https://www.facebook.com/tizz3182/",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 36 36"
				fill="url(#a)"
			>
				<defs>
					<linearGradient x1="50%" x2="50%" y1="97.078%" y2="0%" id="a">
						<stop offset="0%" stop-color="#0062E0" />
						<stop offset="100%" stop-color="#19AFFF" />
					</linearGradient>
				</defs>
				<path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z" />
				<path
					fill="#FFF"
					d="m25 23 .8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
				/>
			</svg>
		),
	},
	{
		name: "Gmail",
		value: "dthanhff318@gmail.com",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 49.4 512 399.42">
				<g fill="none" fill-rule="evenodd">
					<g fill-rule="nonzero">
						<path
							fill="#4285f4"
							d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z"
						/>
						<path
							fill="#34a853"
							d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z"
						/>
						<path
							fill="#fbbc04"
							d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z"
						/>
					</g>
					<path
						fill="#ea4335"
						d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z"
					/>
					<path
						fill="#c5221f"
						fill-rule="nonzero"
						d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z"
					/>
				</g>
			</svg>
		),
	},
];

export default contactConfig;
