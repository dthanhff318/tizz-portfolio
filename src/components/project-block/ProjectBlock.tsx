import { Files, Folder, File } from "@/components/animate-ui/components/files";
import { Link, Scroll } from "lucide-react";

const ProjectBlock = () => {
	return (
		<div className="p-2 space-y-2">
			<p className="text-text-primary text-xl font-bold">Projects:</p>
			<div className="flex flex-col gap-3">
				<Files className="text-text-primary">
					<Folder name="t1zZote">
						<File
							name="A modern, simpler, all-in-one note-taking platform designed to help individuals and teams organize their thoughts, tasks, and projects seamlessly, inspired by Notion"
							customIcon={<Scroll />}
							classForIcon="items-start"
						/>
						<File
							name={
								(
									<a
										href="https://tizz-note.vercel.app/"
										target="_blank"
										rel="noopener noreferrer"
									>
										https://tizz-note.vercel.app/
									</a>
								) as any
							}
							customIcon={<Link />}
							classForIcon="items-start"
						/>
						<File name="empty.txt" />
					</Folder>
					<Folder name="t1zz-Isme">
						<File name="empty.txt" />
						<File name="empty.txt" />
					</Folder>
				</Files>
			</div>
		</div>
	);
};

export default ProjectBlock;
