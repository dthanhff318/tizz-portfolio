import tizZotePreview from "./assets/projectImage/projectTizZote.png";
import t1zAttentionPreview from "./assets/projectImage/projectT1zAttention.png";
const projects = [
	{
		name: "tizZote",
		thumb: tizZotePreview,
		desc: "A modern, simpler, all-in-one note-taking platform designed to help individuals and teams organize their thoughts, tasks, and projects seamlessly, inspired by Notion.",
		url: "https://tizz-note.vercel.app/",
		tech: ["Next", "TypeScript", "Clerk", "Convex", "Edge Store"],
		tag: "@tizz-note",
	},
	{
		name: "t1z-Attention",
		thumb: t1zAttentionPreview,
		desc: "A simple attention-tracking app that helps you stay focused on your goals by tracking time in short sessions, motivating you to push yourself harder.",
		url: "https://t1z-zatention.vercel.app/",
		tech: ["React", "Supabase", "TypeScript", "Tailwind", "Shadcn", "Zustand"],
		tag: "@t1z-Attention",
	},
];

export default projects;
