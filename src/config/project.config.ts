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
		desc: "Fundpop Crowdfunding is a powerful Shopify app that enables merchants to launch and manage professional crowdfunding campaigns directly within their online store. This seamless integration allows store owners to leverage their existing customer base while maintaining their brand identity throughout the fundraising process.",
		url: "https://tizz-note.vercel.app/",
		tech: [ReactIcon, ShopifyIcon, PostgresIcon, RedisIcon],
		preview: fundpopPreview,
		tag: "@fundpop-crowfunding",
	},
	{
		name: "tizZote",
		thumb: tizZotePreview,
		desc: "A modern, simpler, all-in-one note-taking platform designed to help individuals and teams organize their thoughts, tasks, and projects seamlessly.",
		url: "https://tizz-note.vercel.app/",
		tech: [ReactIcon, ShopifyIcon, PostgresIcon, RedisIcon],
		preview: gewPreview,
		tag: "@tizz-note",
	},
	{
		name: "GEW",
		thumb: gewThumb,
		desc: "Taking Play-To-Earn (P2E) web3 gaming to the next level, Golden Egg Wonderland offers a new style of gaming, Play-For-Gold (P4G). Players have the chance to win Golden Egg NFTs which could be traded in for a real gold egg tied with the identical serial number",
		url: "https://www.golden-egg-wonderland.io/",
		tech: [ReactIcon, ShopifyIcon, PostgresIcon, RedisIcon],
		preview: gewPreview,
		tag: "@golden-egg-wonderland",
	},
];

export default projects;
