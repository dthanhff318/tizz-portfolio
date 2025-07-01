import { Files, Folder, File } from "@/components/animate-ui/components/files";
import { Blocks, Link, Scroll } from "lucide-react";
import projects from "@/config/project.config";

const ProjectBlock = () => {
	return (
		<div className="p-2 space-y-2">
			<p className="text-text-primary text-xl font-bold">Projects:</p>
			<div className="flex flex-col gap-3">
				<Files className="text-text-primary">
					{projects.map((project) => (
						<Folder name={project.name}>
							<File
								name={project.desc}
								customIcon={<Scroll />}
								classForIcon="items-start"
							/>
							<File name={project.tech.join(", ")} customIcon={<Blocks />} />
							<File
								name={
									(
										<a
											href={project.url}
											target="_blank"
											rel="noopener noreferrer"
											className="hover:underline"
										>
											@{project.url}
										</a>
									) as any
								}
								customIcon={<Link />}
								classForIcon="items-start"
							/>
						</Folder>
					))}
				</Files>
			</div>
		</div>
	);
};

export default ProjectBlock;
