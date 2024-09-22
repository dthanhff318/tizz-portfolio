export const getPublicFile = (path: string) => {
	return `${import.meta.env.BASE_URL}public/assets/${path}`;
};
