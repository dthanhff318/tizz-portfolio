import { TProject } from "../../types/project";

type TProps = {
	project: TProject;
};
const ProjectCard = ({ project }: TProps) => {
	return (
		<div className="relative w-full h-full mx-auto text-white flex">
			<div
				className="p-6 flex-1 bg-gradient-to-b from-[#c44242] to-[#d06a5d] rounded-2xl"
				style={{
					clipPath:
						"polygon(83% 0, 98% 36%, 93% 79%, 83% 100%, 0 100%, 0% 60%, 0 0)",
				}}
			>
				<div className="flex gap-2">
					<span className="bg-[#fffcc0] text-gray-800 text-sm px-3 py-1 rounded-full">
						#productivity
					</span>
					<span className="bg-[#fffcc0] text-gray-800 text-sm px-3 py-1 rounded-full">
						#notes
					</span>
				</div>

				<h2 className="text-3xl text-text-primary font-bold mt-4 mb-2">
					{project.name}
				</h2>
				<p className="text-pink-100 leading-relaxed text-text-primary">
					{project.desc}
				</p>
				<div className="flex items-center gap-2 mt-4">
					<img
						src="/avatar1.png"
						alt="User 1"
						className="w-8 h-8 rounded-full border-2 border-white"
					/>
					<img
						src="/avatar2.png"
						alt="User 2"
						className="w-8 h-8 rounded-full border-2 border-white -ml-2"
					/>
					<span className="ml-2 text-sm text-white">+53 Reviews</span>
				</div>
			</div>

			<img
				src="/assets/jett.png"
				alt="Jett"
				className="absolute h-[250px] right-0 bottom-0 object-contain z-20 pointer-events-none"
			/>
		</div>
	);
};

ProjectCard.Sub = ({ project }: TProps) => {
	return (
		<div className="flex items-center bg-primary-bold rounded-2xl p-2 w-full">
			<img
				src={project.thumb}
				alt="Avatar"
				className="w-[50px] h-[50px] rounded-2xl mr-4 object-cover"
			/>
			<div className="flex-1">
				<div className="text-text-primary font-semibold text-lg">
					{project.name}
				</div>
				<div className="text-text-secondary text-sm">
					(Standard Edition + Starter Pass)
				</div>
			</div>
			<div className="ml-4">
				<svg
					className="w-6 h-6 text-text-primary"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					viewBox="0 0 24 24"
				>
					<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
				</svg>
			</div>
		</div>
	);
};

export default ProjectCard;
