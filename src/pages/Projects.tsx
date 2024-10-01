import ProjectCard from "../components/projectCard/ProjectCard";
import projects from "../config/project.config";

const About = () => {
	return (
		<div className="w-full flex flex-col items-center gap-8">
			<p className="text-text-color text-center text-2xl">
				This is all of my works
			</p>
			<div className="w-full flex justify-center gap-4 flex-wrap">
				{projects.map((e) => (
					<ProjectCard project={e} />
				))}
			</div>
		</div>
	);
};

export default About;
