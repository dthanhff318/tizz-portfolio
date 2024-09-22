import axios from "axios";

const baseConfig = {
	baseUrl: import.meta.env.BASE_URL,
	timeout: 10000,
	headers: {
		Accept: "application/json, text/plain, */*",
		"Content-Type": "application/json",
		"X-Requested-With": "XMLHttpRequest",
	},
};

const axiosInstance = axios.create({
	...baseConfig,
});

axiosInstance.interceptors.request.use(
	(config) => {
		console.log("Request sent:", config);
		return config;
	},
	(error) => {
		console.error("Response error:", error);
	}
);

axiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		console.error("Response error:", error);
	}
);

export default axiosInstance;
