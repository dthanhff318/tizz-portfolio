import gewThumb from "./assets/projectGew.jpg.webp";
import { RedisIcon, ShopifyIcon } from "./assets/logoTech";
import { ReactIcon } from "./assets/logoTech";
import { PostgresIcon } from "./assets/logoTech";
import gewPreview from "./assets/projectImage/gewPreview.png";
import tizZotePreview from "./assets/projectImage/projectTizZote.png";
import fundpopPreview from "./assets/projectImage/fundpopPreview.png";

const projects = [
	{
		name: "Fundpop Crowdfunding",
		thumb: tizZotePreview,
		desc: "Fundpop empowers merchants to run professional crowdfunding campaigns directly on their store. Choose between instant payments or pre-orders with flexible funding options.",
		url: "https://tizz-note.vercel.app/",
		tech: [ReactIcon, ShopifyIcon, PostgresIcon, RedisIcon],
		preview: fundpopPreview,
	},
	{
		name: "tizZote",
		thumb: tizZotePreview,
		desc: "A modern, simpler, all-in-one note-taking platform designed to help individuals and teams organize their thoughts, tasks, and projects seamlessly.",
		url: "https://tizz-note.vercel.app/",
		tech: [ReactIcon, ShopifyIcon, PostgresIcon, RedisIcon],
		preview: gewPreview,
	},
	{
		name: "GEW",
		thumb: gewThumb,
		desc: "In GEW - Golden egg wonderland, nurture enchanted birds to produce golden eggs and earn exclusive NFT rewards. Hatch, collect, and trade your treasures!",
		url: "https://www.golden-egg-wonderland.io/",
		tech: [ReactIcon, ShopifyIcon, PostgresIcon, RedisIcon],
		preview: gewPreview,
	},
];

export default projects;
