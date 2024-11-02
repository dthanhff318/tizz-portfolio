import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { FunctionComponent } from "../../common/types";
import DogAnimation from "../dogAnimation/DogAnimation";
import Navbar from "../navbar/Navbar";
import ClockIcon from "../ui/icons/ClockIcon";

const Layout = (): FunctionComponent => {
	const [time, setTime] = useState<Date | undefined>(undefined);
	const [location, setLocation] = useState<string>("");

	useEffect(() => {
		const intervalId = setInterval(() => {
			const currentTime = new Date();
			setTime(currentTime);
		}, 1000);
		return () => clearInterval(intervalId);
	}, []);

	const getLocation = () => {
		navigator.geolocation.getCurrentPosition((cur) => {
			fetch(
				`https://nominatim.openstreetmap.org/reverse?format=json&lat=${cur.coords.latitude}&lon=${cur.coords.longitude}`
			)
				.then((response) => response.json())
				.then((data: any) => {
					const address = data?.address ?? {};
					setLocation(`${address?.city} - ${address?.country}, `);
				})
				.catch((error) => console.error("Error fetching location:", error));
		});
	};

	useEffect(() => {
		getLocation();
	}, []);

	return (
		<div className="relative w-screen h-screen bg-background overflow-y-auto overflow-x-hidden p-4">
			<Navbar />
			<DogAnimation />
			<div className="absolute font-semibold top-4 left-4 text-text-color flex gap-4 items-center">
				{location ? location : <div className="skeleton h-4 w-20"></div>}
				{time ? (
					<div className="countdown font-semibold">
						<span
							style={{ "--value": time?.getHours() } as React.CSSProperties}
						></span>
						:
						<span
							style={{ "--value": time?.getMinutes() } as React.CSSProperties}
						></span>
						:
						<span
							style={{ "--value": time?.getSeconds() } as React.CSSProperties}
						></span>
					</div>
				) : (
					<div className="skeleton h-4 w-20"></div>
				)}
				<ClockIcon />
			</div>
			<div className="relative w-full h-fit -mt-32 flex items-center z-10 mb-28">
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
