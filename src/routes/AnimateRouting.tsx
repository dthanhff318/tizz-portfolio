import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

type TProps = {
	children: ReactNode;
	key: string;
};
const AnimateRouting = ({ key, children }: TProps) => {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={key}
				initial={{ opacity: 0, translateY: "50px" }}
				animate={{ opacity: 1, translateY: 0 }}
				transition={{ duration: 0.7 }}
				exit={{ opacity: 0 }}
				className="w-full h-full"
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
};
export default AnimateRouting;
