import "./style.css";
import CountUp from "react-countup";
const Statistic = () => {
	return (
		<div className="h-full flex flex-col gap-4">
			<div className="">
				<p className="text-text-primary text-lg md:text-2xl font-semibold">
					My statistic
				</p>
			</div>
			<div className="bg-primary-bold rounded-3xl flex flex-col flex-1 items-center justify-center">
				<div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
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
						<div className="w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-full bg-primary-bold flex flex-col items-center justify-center text-white text-center shadow-lg">
							<p className="text-xs sm:text-sm md:text-base">Experience:</p>
							<p className="text-xl sm:text-2xl md:text-3xl font-bold">
								<CountUp
									start={0}
									end={3}
									duration={4}
									separator=""
									decimals={1}
									formattingFn={(value) => {
										return Number.isInteger(value)
											? value.toString()
											: value.toFixed(1);
									}}
								></CountUp>{" "}
								years
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Statistic;
