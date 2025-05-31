import { create } from "zustand";
import { TProject } from "../types/project";
import projects from "../config/project.config";

type TProjectStore = {
	project: TProject;
	remainingProjects: TProject[];
	setProject: (project: TProject) => void;
};
const projectStore = create<TProjectStore>((set) => ({
	project: projects[0] as TProject,
	remainingProjects: projects.slice(1),
	setProject: (project: TProject) => {
		const remainingProjects = projects.filter((p) => p.name !== project.name);
		return set({ project, remainingProjects });
	},
}));

export default projectStore;
