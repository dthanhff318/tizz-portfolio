import tizZotePreview from "./assets/projectImage/projectTizZote.png";
// import yMelodyPreview from "./assets/projectImage/gewPreview.png";

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
		name: "yMelody",
		thumb: "",
		desc: "A voice-based social platform where users can record audio, host live voice streaming rooms, and share their content with the community.",
		url: "https://ymelody.vercel.app/",
		tech: ["React", "TypeScript", "Supabase"],
		tag: "@ymelody",
	},
];

export default projects;
