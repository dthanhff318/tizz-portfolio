import { useEffect, useState } from "react";
import MemoryCard from "../components/memoryCard/MemoryCard";

const Contact = () => {
	const [shake, setShake] = useState(false);

	useEffect(() => {
		let lastX = 0,
			lastY = 0,
			lastZ = 0,
			threshold = 10;

		const handleMotion = (event: any) => {
			const { accelerationIncludingGravity } = event;
			const { x, y, z } = accelerationIncludingGravity;
			console.log(event);

			if (
				Math.abs(x - lastX) > threshold ||
				Math.abs(y - lastY) > threshold ||
				Math.abs(z - lastZ) > threshold
			) {
				setShake(true);
				setTimeout(() => setShake(false), 1000); // Đặt lại sau khi lắc
			}

			lastX = x;
			lastY = y;
			lastZ = z;
		};

		if (window.DeviceMotionEvent) {
			window.addEventListener("devicemotion", handleMotion);
		}

		return () => {
			window.removeEventListener("devicemotion", handleMotion);
		};
	}, []);

	return (
		<div className="w-full flex flex-col items-center gap-4">
			<p className="text-text-color text-center text-2xl">Contact me</p>
			<div className="">
				<MemoryCard />
				<div>{shake ? <p>Device Shaking!</p> : <p>No Shake</p>}</div>
			</div>
		</div>
	);
};

export default Contact;
