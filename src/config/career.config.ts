import { TCareer } from "../types/career";
import intsThumb from "./assets/logoCareer/ints.webp";
import hustThumb from "./assets/logoCareer/hust_university.webp";
import neliThumb from "./assets/logoCareer/nelisoftwares.png";

const careerConfig: TCareer[] = [
	{
		name: "Nelisoftwares",
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
				tags: [
					"Shopify",
					"React",
					"Node.js",
					"TypeScript",
					"Polaris",
					"Redis",
					"Docker",
					"PostgreSQL",
				],
				description:
					"This Shopify app helps merchants run crowdfunding campaigns and sell through limited-time sales initiatives.",
				achievements: [
					"Top 10 Shopify apps for crowdfunding",
					"Partner of UwU Market, Spiceology, Lootbloc, and more",
					"Has Shopify App Store Badge",
				],
			},
		],
	},
	{
		name: "INTS",
		startTime: "2022",
		endTime: "2024",
		thumb: intsThumb,
		link: "https://ints.vn/",
		live: false,
		role: "Frontend developer",
		projects: [
			{
				name: "Golden Egg Wonderland",
				url: "https://golden-egg-wonderland.io/",
				tags: ["Phaser", "React", "Zustand", "TypeScript", "MongoDB"],
				description:
					"Golden Egg Wonderland is a 2D NFT game using Fruits token.",
				achievements: [],
			},
		],
	},
	{
		name: "HUST",
		startTime: "2018",
		endTime: "2023",
		thumb: hustThumb,
		link: "https://hust.edu.vn/",
		live: true,
		role: "University student",
	},
];

export default careerConfig;
