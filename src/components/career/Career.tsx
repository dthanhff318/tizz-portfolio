import careerConfig from "../../config/career.config";
import { TCareer } from "../../types/career";
const Career = () => {
	return (
		<div className="h-full w-full flex flex-col gap-4">
			<div className="">
				<p className="text-text-primary text-2xl font-semibold">My career</p>
			</div>
			<div className="flex gap-6">
				{careerConfig.map((item) => (
					<Career.Card key={item.name} {...item} />
				))}
			</div>
		</div>
	);
};

Career.Card = ({ name, startTime, endTime }: TCareer) => {
	return (
		<div className="group aspect-square h-[240px] rounded-3xl relative">
			<div
				className="absolute inset-0 z-0 aspect-square h-[240px] rounded-3xl"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='24' ry='24' stroke='%23ae5d66' stroke-width='4' stroke-dasharray='6%2c 9' stroke-dashoffset='23' stroke-linecap='square'/%3e%3c/svg%3e")`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
			></div>
			<div
				className="relative z-1 w-full h-full rounded-3xl hover:transition-transform hover:duration-1000 hover:transform hover:rotate-[-6deg]"
				style={{
					transformOrigin: "left bottom",
				}}
			>
				<img
					className="w-full h-full rounded-3xl object-cover object-center brightness-50 group-hover:brightness-75 transition-all duration-300"
					src="https://static1.srcdn.com/wordpress/wp-content/uploads/2024/08/valorant-neon.jpg"
					alt=""
				/>
				<div className="absolute top-0 left-0 bottom-0 flex flex-col justify-between gap-2 p-4">
					<button className=" relative w-14 h-14 bg-[#be3f3a] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-[75deg] transition-all duration-300">
						<svg
							className="mb-1"
							xmlns="http://www.w3.org/2000/svg"
							width="29"
							height="29"
						>
							<path
								className="fill-text-primary"
								stroke="none"
								d="M11.035898384862 3.7775681356645a4 4 0 0 1 6.9282032302755 0l10.071796769724 17.444863728671a4 4 0 0 1 -3.4641016151378 6l-20.143593539449 0a4 4 0 0 1 -3.4641016151378 -6"
							></path>
						</svg>
					</button>
					<div className="flex flex-col justify-end-end gap-2">
						<p className="text-text-primary text-2xl font-semibold group-hover:translate-y-0 translate-y-3 transition-all duration-300">
							{name}
						</p>
						<p className="text-[#cf675b] text-sm opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-3 transition-all duration-300">
							{startTime} - {endTime}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Career;
