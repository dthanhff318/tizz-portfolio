import { create } from "zustand";
import { TProject } from "../types/project";
import projects from "../config/project.config";

type TProjectStore = {
	project: TProject;
	setProject: (project: TProject) => void;
};
const projectStore = create<TProjectStore>((set) => ({
	project: projects[0] as TProject,
	setProject: (project: TProject) => {
		return set({ project });
	},
}));

export default projectStore;
