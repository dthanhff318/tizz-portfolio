import { TCareer } from "../types/career";
import neliThumb from "./assets/logoCareer/nelisoftwares.png";
import intsThumb from "./assets/logoCareer/ints.webp";
import hustThumb from "./assets/logoCareer/hust_university.webp";

const careerConfig: TCareer[] = [
	{
		name: "Nelisoftwares Company",
		startTime: "08/2024",
		thumb: neliThumb,
		endTime: "Now",
		link: "https://nelisoftwares.com/",
		live: true,
		role: "Frontend, Backend developer",
		projects: [
			{
				name: "Fundpop Crowdfunding",
				url: "https://apps.shopify.com/fundpop-crowdfunding",
			},
		],
	},
	{
		name: "INTS Company",
		startTime: "2022",
		endTime: "2024",
		thumb: intsThumb,
		link: "https://ints.vn/",
		live: false,
		role: "Frontend developer",
	},
	{
		name: "HUST",
		startTime: "2018",
		endTime: "2023",
		thumb: hustThumb,
		link: "https://hust.edu.vn/",
		live: true,
	},
];

export default careerConfig;
