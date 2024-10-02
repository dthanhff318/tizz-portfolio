import { motion } from "framer-motion";
import { TCareer } from "../../types/career";

type TProps = {
	career: TCareer;
};
const CareerLine = ({ career }: TProps) => {
	return (
		<motion.div className="w-full flex justify-between">
			<p>{career.name}</p>
			<p>{`${career.startTime} - ${career.endTime}`}</p>
		</motion.div>
	);
};
export default CareerLine;
