import { TCareer } from "../types/career";
import neliThumb from "./assets/logoCareer/nelisoftwares.png";
import intsThumb from "./assets/logoCareer/ints.webp";
import hustThumb from "./assets/logoCareer/hust_university.webp";

const careerConfig: TCareer[] = [
	{
		name: "Nelisoftwares Company",
		startTime: 2024,
		thumb: neliThumb,
		endTime: "Now",
		link: "https://nelisoftwares.com/",
	},
	{
		name: "INTS Company",
		startTime: 2022,
		endTime: 2024,
		thumb: intsThumb,
		link: "https://ints.vn/",
	},
	{
		name: "HUST",
		startTime: 2018,
		endTime: 2023,
		thumb: hustThumb,
		link: "https://hust.edu.vn/",
	},
];

export default careerConfig;
