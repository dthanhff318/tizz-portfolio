import { motion } from "framer-motion";
import { TProject } from "../../types/project";

type TProps = {
	project: TProject;
};
const ProjectCard = ({ project }: TProps) => {
	return (
		<div className="p-2 w-[260px] h-fit min-h-[320px] bg-background-card rounded-xl flex flex-col gap-3">
			<div className="rounded-md h-[150px] w-full overflow-hidden">
				<motion.img
					src={project.thumb}
					whileHover={{ scale: 1.2 }}
					transition={{ duration: 0.3 }}
					alt=""
					className="w-full h-full object-cover hover:scale-110"
				/>
			</div>
			<p className="text-text-color truncate font-semibold">{project.name}</p>
			<p className="text-text-color line-clamp-4 text-sm font-light tracking-wide">
				{project.desc}
			</p>
		</div>
	);
};

export default ProjectCard;
