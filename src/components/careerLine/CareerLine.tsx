import { motion } from "framer-motion";
import { TCareer } from "../../types/career";

type TProps = {
	career: TCareer;
};
const CareerLine = ({ career }: TProps) => {
	return (
		<motion.div className="w-full grid grid-cols-[1fr_auto_1fr] gap-5 text-text-color">
			<p>{career.name}</p>
			<span className="hidden md:inline-block">
				- - - - - - - - - - - - - - - - - - - - - - - - - - -
			</span>
			<span className="md:hidden">- - - - -</span>
			<p className="text-right">{`${career.startTime} - ${career.endTime}`}</p>
		</motion.div>
	);
};
export default CareerLine;
