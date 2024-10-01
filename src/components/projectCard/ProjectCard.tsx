import { TProject } from "../../types/project";

type TProps = {
	project: TProject;
};
const ProjectCard = ({ project }: TProps) => {
	return (
		<div className="p-2 w-[260px] h-fit min-h-[320px] bg-background-card rounded-xl flex flex-col gap-3">
			<img
				src={project.thumb}
				alt=""
				className="rounded-md h-[150px] w-full object-cover"
			/>
			<p className="text-text-color truncate font-semibold">{project.name}</p>
			<p className="text-text-color line-clamp-4 text-sm font-light tracking-wide">
				{project.desc}
			</p>
		</div>
	);
};

export default ProjectCard;
