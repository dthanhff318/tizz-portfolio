import { Files, Folder, File } from "@/components/animate-ui/components/files";

const ProjectBlock = () => {
	return (
		<div className="p-2 space-y-2">
			<p className="text-text-primary text-xl font-bold">Projects:</p>
			<div className="flex flex-col gap-3">
				<Files className="text-text-primary">
					<Folder name="t1zZote">
						<File name="file1.txt" />
						<File name="file2.txt" />
					</Folder>
					<Folder name="t1zz-Isme">
						<File name="file3.txt" />
						<File name="file4.txt" />
					</Folder>
				</Files>
			</div>
		</div>
	);
};

export default ProjectBlock;
