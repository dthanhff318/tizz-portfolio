import { useEffect, useRef } from "react";
import ProjectCard from "../components/projectCard/ProjectCard";
import projects from "../config/project.config";
import { TProject } from "../types/project";
import Statistic from "../components/statistic/Statistic";
import Career from "../components/career/Career";

const Home = () => {
	return (
		<div className="relative flex flex-col justify-center w-full h-full items-center gap-6 flex-1 px-6 ">
			<div className="flex justify-between w-full">
				<div className="flex gap-2">
					<p className="text-text-secondary text-2xl">Hi,</p>
					<p className="text-text-primary text-2xl">I'm t1zz</p>
				</div>
				<div>
					<p>Icon placeholder</p>
				</div>
			</div>
			<div className="flex gap-4 w-full">
				<div className="flex-1">
					<ProjectCard project={projects[0] as TProject} />
				</div>
				<div className="w-[40%] space-y-4">
					<ProjectCard.Sub project={projects[1] as TProject} />
					<ProjectCard.Sub project={projects[1] as TProject} />
					<ProjectCard.Sub project={projects[1] as TProject} />
				</div>
			</div>
			<div className="flex flex-1 w-full bg-red gap-8">
				<div className="flex-1 h-full overflow-x-auto">
					<Career />
					<div className=""></div>
				</div>
				<div className="w-[40%] h-full">
					<Statistic />
				</div>
			</div>
		</div>
	);
};

export default Home;
