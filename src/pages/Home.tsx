import { useEffect, useRef } from "react";
import ProjectCard from "../components/projectCard/ProjectCard";
import projects from "../config/project.config";
import { TProject } from "../types/project";
import Statistic from "../components/statistic/Statistic";
import Career from "../components/career/Career";

const Home = () => {
	return (
		<div className="relative flex flex-col justify-center w-full h-full items-center gap-6 flex-1 px-6">
			<div className="flex justify-between w-full">
				<div className="flex gap-2">
					<p className="text-text-secondary text-2xl">Hi,</p>
					<p className="text-text-primary text-2xl">I'm t1zz</p>
				</div>
				<div>
					<p>Icon placeholder</p>
				</div>
			</div>
			<div className="grid grid-cols-[1fr_40%] gap-4 w-full">
				<div>
					<ProjectCard project={projects[0] as TProject} />
				</div>
				<div className="space-y-4">
					<ProjectCard.Sub project={projects[1] as TProject} />
					<ProjectCard.Sub project={projects[1] as TProject} />
					<ProjectCard.Sub project={projects[1] as TProject} />
				</div>
			</div>
			<div className="grid grid-cols-[1fr_40%] flex-1 w-full gap-8 h-full relative">
				<div className="h-full overflow-x-auto relative career-container">
					<Career />
					<div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-primary to-transparent pointer-events-none"></div>
				</div>
				<div className="h-full">
					<Statistic />
				</div>
			</div>
		</div>
	);
};

export default Home;
