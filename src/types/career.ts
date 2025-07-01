export type TCareer = {
	name: string;
	startTime: string;
	endTime: string;
	thumb: string;
	link: string;
	live?: boolean;
	role?: string;
	projects?: {
		name: string;
		url: string;
		tags?: string[];
		description?: string;
		achievements?: string[];
	}[];
};
