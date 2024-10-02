import CareerLine from "../components/careerLine/CareerLine";
import careerConfig from "../config/career.config";

const Career = () => {
	return (
		<div className="w-full flex flex-col items-center gap-8">
			<p className="text-text-color text-center text-2xl">Career</p>
			<div className="w-[70%] flex flex-col gap-6">
				{careerConfig.map((e) => (
					<CareerLine career={e} />
				))}
			</div>
		</div>
	);
};

export default Career;
