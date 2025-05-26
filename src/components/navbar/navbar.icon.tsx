const HomeIcon = (
	<svg
		aria-hidden="true"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		className="text-[#7e7e7e]"
	>
		<path
			opacity="0.25"
			d="M20 18.8V6.63998L13.6514 2.81501L13.6514 2.815C13.0511 2.45333 12.751 2.2725 12.4304 2.20186C12.1469 2.13938 11.8531 2.13938 11.5696 2.20186C11.249 2.2725 10.9489 2.45334 10.3486 2.81501L4 6.64001V18.8C4 19.9201 4 20.4802 4.21799 20.908C4.40973 21.2843 4.71569 21.5903 5.09202 21.782C5.51984 22 6.0799 22 7.2 22H16.8C17.9201 22 18.4802 22 18.908 21.782C19.2843 21.5903 19.5903 21.2843 19.782 20.908C20 20.4802 20 19.9201 20 18.8Z"
		></path>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M1.14251 9.5145C1.42665 9.98808 2.04091 10.1416 2.51449 9.85749L12 4.16619L21.4855 9.85749C21.9591 10.1416 22.5733 9.98808 22.8575 9.5145C23.1416 9.04092 22.9881 8.42666 22.5145 8.14251L13.029 2.45121C12.3956 2.07119 11.6044 2.07119 10.971 2.45121L1.4855 8.14251C1.01192 8.42666 0.858357 9.04092 1.14251 9.5145Z"
		></path>
		<path d="M9 16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16V22H9V16Z"></path>
	</svg>
);

const FolderIcon = (
	<svg
		aria-hidden="true"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		className="text-[#7e7e7e]"
	>
		<path
			d="M8 20C8 19.4477 8.44772 19 9 19H15C15.5523 19 16 19.4477 16 20V21C16 22.6569 14.6569 24 13 24H11C9.34315 24 8 22.6569 8 21V20Z"
			fill="currentColor"
		></path>
		<path
			opacity="0.25"
			d="M20 8C20 10.5264 18.8289 12.7793 17 14.2454V15C17 16.1046 16.1046 17 15 17C10.8358 17 15.5135 17 9 17C7.89543 17 7 16.1046 7 15V14.2454C5.17107 12.7793 4 10.5264 4 8C4 3.58172 7.58172 0 12 0C16.4183 0 20 3.58172 20 8Z"
			fill="currentColor"
		></path>
		<path
			d="M10.7071 8.29289C10.3166 7.90237 9.68342 7.90237 9.29289 8.29289C8.90237 8.68342 8.90237 9.31658 9.29289 9.70711L11 11.4142V17H13V11.4142L14.7071 9.70711C15.0976 9.31658 15.0976 8.68342 14.7071 8.29289C14.3166 7.90237 13.6834 7.90237 13.2929 8.29289L12 9.58579L10.7071 8.29289Z"
			fill="currentColor"
		></path>
	</svg>
);

const GithubIcon = (
	<svg
		viewBox="0 0 24 24"
		width="24"
		height="24"
		className="text-[#7e7e7e]"
		fill="currentColor"
	>
		<path fill="none" d="M0 0h24v24H0z"></path>
		<path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"></path>
	</svg>
);

const LightIcon = (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		color="var(--colors-gray10)"
		fill="none"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke="currentColor"
		className="text-[#7e7e7e] transition-all rotate-90 duration-700"
	>
		<mask id="myMask2">
			<rect x="0" y="0" width="100%" height="100%" fill="white"></rect>
			<circle r="9" fill="black" cx="100%" cy="0%"></circle>
		</mask>
		<circle
			cx="12"
			cy="12"
			fill="var(--colors-gray10)"
			className="fill-[#7e7e7e]"
			mask="url(#myMask2)"
			r="5"
		></circle>
		<g stroke="currentColor" opacity="1">
			<line x1="12" y1="1" x2="12" y2="3"></line>
			<line x1="12" y1="21" x2="12" y2="23"></line>
			<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
			<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
			<line x1="1" y1="12" x2="3" y2="12"></line>
			<line x1="21" y1="12" x2="23" y2="12"></line>
			<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
			<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
		</g>
	</svg>
);

const DarkIcon = (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		color="var(--colors-gray10)"
		fill="none"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke="currentColor"
		className="text-[#7e7e7e] rotate-45 transition-all duration-700"
	>
		<mask id="myMask2">
			<rect x="0" y="0" width="100%" height="100%" fill="white"></rect>
			<circle r="9" fill="black" cx="50%" cy="23%"></circle>
		</mask>
		<circle
			cx="12"
			cy="12"
			fill="var(--colors-gray10)"
			className="fill-[#7e7e7e]"
			mask="url(#myMask2)"
			r="9"
		></circle>
		<g stroke="currentColor" opacity="0">
			<line x1="12" y1="1" x2="12" y2="3"></line>
			<line x1="12" y1="21" x2="12" y2="23"></line>
			<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
			<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
			<line x1="1" y1="12" x2="3" y2="12"></line>
			<line x1="21" y1="12" x2="23" y2="12"></line>
			<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
			<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
		</g>
	</svg>
);

const GmailIcon = (
	<svg
		aria-hidden="true"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		className="text-[#7e7e7e]"
	>
		<path
			opacity="0.25"
			d="M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6Z"
			fill="currentColor"
		></path>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M5.23177 7.35981C5.58534 6.93553 6.2159 6.87821 6.64018 7.23177L11.3598 11.1648C11.7307 11.4738 12.2693 11.4738 12.6402 11.1648L17.3598 7.23177C17.7841 6.87821 18.4147 6.93553 18.7682 7.35981C19.1218 7.78409 19.0645 8.41465 18.6402 8.76822L13.9205 12.7012C12.808 13.6284 11.192 13.6284 10.0794 12.7012L5.35981 8.76822C4.93553 8.41465 4.87821 7.78409 5.23177 7.35981Z"
			fill="currentColor"
		></path>
	</svg>
);

const TargetIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		className="text-[#7e7e7e]"
	>
		<circle fill="currentColor" cx="12" cy="12" r="3"></circle>
		<path
			fill="currentColor"
			d="M13 4.069V2h-2v2.069A8.008 8.008 0 0 0 4.069 11H2v2h2.069A8.007 8.007 0 0 0 11 19.931V22h2v-2.069A8.007 8.007 0 0 0 19.931 13H22v-2h-2.069A8.008 8.008 0 0 0 13 4.069zM12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"
		></path>
	</svg>
);

export {
	DarkIcon,
	FolderIcon,
	GithubIcon,
	GmailIcon,
	HomeIcon,
	LightIcon,
	TargetIcon,
};
