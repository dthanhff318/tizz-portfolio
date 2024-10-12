import CareerLine from "../components/careerLine/CareerLine";
import careerConfig from "../config/career.config";

const Career = () => {
	return (
		<div className="w-full flex flex-col items-center gap-8">
			<p className="text-text-color text-center text-2xl">Career</p>
			<div className="w-[90%] md:w-[70%] lg:w-[60%] flex flex-col gap-6">
				{careerConfig.map((e) => (
					<CareerLine career={e} key={e.name} />
				))}
			</div>
		</div>
	);
};

export default Career;
