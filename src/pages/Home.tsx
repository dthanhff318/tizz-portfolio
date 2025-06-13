import { useState } from "react";
import ProjectCard from "../components/projectCard/ProjectCard";
import { TProject } from "../types/project";
import Statistic from "../components/statistic/Statistic";
import Career from "../components/career/Career";
import projectStore from "../store/projectStore";
import MusicPlayer from "../components/musicPlayer/musicPlayer";

const Home = () => {
	const [isCareerAtEnd, setIsCareerAtEnd] = useState(false);
	const { project, remainingProjects, setProject } = projectStore();
	return (
		<div className="relative flex flex-col justify-center w-full h-full items-center gap-6 flex-1 px-6">
			<div className="flex justify-between w-full">
				<div className="flex gap-2">
					<p className="text-text-secondary text-2xl">Hi,</p>
					<p className="text-text-primary text-2xl">I'm t1zz</p>
				</div>
				<div>
					<p></p>
				</div>
			</div>
			<div className="grid grid-cols-[1fr_40%] gap-4 w-full">
				<div>
					<ProjectCard project={project} />
				</div>
				<div className="space-y-4">
					{remainingProjects.map((project, index) => (
						<ProjectCard.Sub
							key={index}
							selectProject={setProject}
							project={project as TProject}
						/>
					))}
				</div>
			</div>
			<div className="grid grid-cols-[1fr_40%] flex-1 w-full gap-8 h-full relative">
				<div className="h-full overflow-x-auto flex flex-col gap-4 relative career-container">
					<Career onScrollChange={setIsCareerAtEnd} />
					<div
						className={`absolute top-0 bottom-0 right-0 w-20 h-full bg-gradient-to-l from-primary to-transparent pointer-events-none transition-opacity duration-300 ${
							isCareerAtEnd ? "opacity-0" : "opacity-100"
						}`}
					></div>
					<div className="h-full">
						<MusicPlayer />
					</div>
				</div>
				<div className="flex-1">
					<Statistic />
				</div>
			</div>
		</div>
	);
};

export default Home;
