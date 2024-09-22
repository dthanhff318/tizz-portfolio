import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { getPublicFile } from "../helpers/functions";

const Home = () => {
	const [time, setTime] = useState<string>("");
	const avatarFile = getPublicFile("avatar.jpg");
	console.log(avatarFile);

	useEffect(() => {
		const intervalId = setInterval(() => {
			const timeNow = dayjs(Date.now()).format("hh:mm:ss A");
			setTime(timeNow);
		}, 1000);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className="relative bg-background w-full h-full">
			<div className="absolute font-semibold top-4 left-4 text-text-color">
				{time}
			</div>
			<div className="absolute text-center top-10 left-1/2 -translate-x-1/2 text-text-color space-y-3">
				<h2 className="text-3xl font-bold">Hi am Duy Thanh ( f ) 😎</h2>
				<p className="font-semibold">I'm a web developer in Viet Nam.</p>
			</div>
			<div className="flex gap-8 text-text-color absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-full">
				<div className="flex flex-col gap-4">
					<span className="text-5xl">Dinh Duy Thanh</span>
					<span className="text-xl">
						Working as
						{` <h8> `}
						<span className="text-text-primary"> Frontend </span>
						{` </h8>`}
					</span>
					<span className="text-xl">
						and res.status(318).send({" "}
						{<span className="text-text-green">Backend</span>} ) developer
					</span>
				</div>
				<img
					src={avatarFile}
					alt="me"
					className="w-[100px] h-[100px] rounded-[50%] object-cover"
				/>
			</div>
		</div>
	);
};

export default Home;
