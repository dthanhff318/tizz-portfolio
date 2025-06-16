import { TProject } from "../../types/project";

type TProps = {
	project: TProject;
	selectProject?: (project: TProject) => void;
};
const ProjectCard = ({ project }: TProps) => {
	return (
		<div className="relative w-full h-full mx-auto text-white flex">
			<div
				className="p-3 lg:p-6 flex-1 bg-gradient-to-b from-[#c44242] to-[#d06a5d] rounded-2xl"
				style={{
					WebkitMaskImage: `linear-gradient(to right, black 0%, black 70%, transparent 100%)`,
					maskImage: `linear-gradient(to right, black 0%, black 70%, transparent 100%)`,
					WebkitMaskSize: "100% 100%",
					maskSize: "100% 100%",
					WebkitMaskRepeat: "no-repeat",
					maskRepeat: "no-repeat",
				}}
			>
				<div className="flex gap-2">
					<span className="bg-[#fffcc0] text-gray-800 flex items-center justify-center px-2 lg:px-3 py-1 rounded-full text-xs lg:text-base">
						#productivity
					</span>
					<span className="bg-[#fffcc0] text-gray-800 flex items-center justify-center px-2 lg:px-3 py-1 rounded-full text-xs lg:text-base">
						#notes
					</span>
				</div>

				<h2 className="text-base lg:text-3xl text-text-primary font-bold mt-4 mb-2">
					{project.name}
				</h2>
				<p className="text-sm lg:text-base w-[90%] lg:w-[70%] leading-relaxed text-text-primary">
					{project.desc}
				</p>
				<div className="flex items-center gap-1 mt-4">
					{project.tech?.map((techIcon, index) => (
						<div
							key={index}
							className="w-8 h-8 rounded-full bg-white/40 backdrop-blur-sm flex items-center justify-center p-1.5"
						>
							<img
								src={techIcon}
								alt="tech icon"
								className="w-full h-full object-contain"
							/>
						</div>
					))}
					<span className="ml-2 text-sm text-white"></span>
				</div>
			</div>

			<img
				src={project.preview}
				alt={project.name}
				className="absolute hidden sm:block h-[280px] right-0 bottom-[-10px] object-contain z-20 pointer-events-none"
			/>
		</div>
	);
};

ProjectCard.Sub = ({ project, selectProject }: TProps) => {
	return (
		<div
			className="group flex items-center bg-primary-bold rounded-2xl p-2 w-full cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-[1.02]"
			onClick={() => selectProject?.(project)}
		>
			<img
				src={project.thumb}
				alt="Avatar"
				className="size-[50px] rounded-2xl mr-4 object-cover"
			/>
			<div className="flex-1">
				<div className="text-text-primary font-semibold text-sm sm:text-lg">
					{project.name}
				</div>
				<div className="hidden md:block text-text-secondary text-sm">
					(Standard Edition + Starter Pass)
				</div>
			</div>
			<div className="ml-4 transition-transform duration-300 group-hover:translate-x-1">
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
