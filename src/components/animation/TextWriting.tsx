import { motion } from "framer-motion";
import { transition } from "three/webgpu";

type TProps = {
	text: string;
	className?: string;
};
const TextWriting = ({ text, className }: TProps) => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				duration: 0.1,
			},
		},
	};

	const letterVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};
	return (
		<motion.p
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			className={className}
		>
			{text.split("").map((letter, index) => (
				<motion.span key={index} variants={letterVariants}>
					{letter}
				</motion.span>
			))}
		</motion.p>
	);
};

export default TextWriting;
