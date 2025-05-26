import "./style.css";
const Statistic = () => {
	return (
		<div className="h-full flex flex-col gap-4">
			<div className="">
				<p className="text-text-primary text-2xl font-semibold">My statistic</p>
			</div>
			<div className="bg-primary-bold rounded-3xl flex flex-col flex-1 items-center justify-center">
				<div className="relative w-64 h-64">
					{/* Layer 1 */}
					<div className="absolute inset-0 z-10">
						<div
							className="w-full h-full bg-gradient-to-tr from-yellow-500 via-purple-500 to-red-300 animate-blob-1 opacity-100"
							style={{ borderRadius: "42% 58% 70% 30% / 30% 40% 60% 70%" }}
						></div>
					</div>

					{/* Layer 2 */}
					<div className="absolute inset-0 z-0">
						<div
							className="w-full h-full bg-gradient-to-tr from-purple-500 via-red-500 to-yellow-300 animate-blob-2 opacity-60"
							style={{ borderRadius: "50% 50% 60% 40% / 50% 60% 40% 50%" }}
						></div>
					</div>

					{/* Layer 3 */}
					<div className="absolute inset-0 z-0">
						<div
							className="w-full h-full bg-gradient-to-tr from-red-500 via-yellow-500 to-purple-300 animate-blob-3 opacity-30"
							style={{ borderRadius: "45% 55% 65% 35% / 35% 55% 65% 45%" }}
						></div>
					</div>

					{/* Inner Content */}
					<div className="absolute inset-0 flex items-center justify-center z-20">
						<div className="w-48 h-48 rounded-full bg-primary-bold flex flex-col items-center justify-center text-white text-center shadow-lg">
							<p className="text-sm">Total hours</p>
							<p className="text-3xl font-bold">12,340h</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Statistic;
