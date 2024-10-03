import { motion } from "framer-motion";

type TProps = {
	handleFlip: (index: number, data: number) => void;
	data: number;
	arrFlip: number[];
	success: number[];
	index: number;
};
const FlipCard = ({ data, handleFlip, arrFlip, success, index }: TProps) => {
	const arrCheck = [...arrFlip, ...success];
	return (
		<motion.div
			onClick={() => handleFlip(index, data)}
			style={{
				width: "100px",
				height: "100px",
				perspective: "1000px",
				margin: "20px",
			}}
		>
			<motion.div
				style={{
					width: "100%",
					height: "100%",
					position: "relative",
					transformStyle: "preserve-3d",
					transition: "transform 0.8s",
					transform: arrCheck.includes(index)
						? "rotateY(180deg)"
						: "rotateY(0deg)", // Xoay theo Y
				}}
			>
				{/* Front */}
				<div
					style={{
						width: "100%",
						height: "100%",
						backgroundColor: "tomato",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						position: "absolute",
						backfaceVisibility: "hidden", // Ẩn mặt sau
					}}
				>
					<h2 style={{ color: "white" }}>Front</h2>
				</div>

				{/* Mặt sau */}
				<div
					style={{
						width: "100%",
						height: "100%",
						backgroundColor: "skyblue",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						position: "absolute",
						transform: "rotateY(180deg)", // Xoay mặt sau 180 độ
						backfaceVisibility: "hidden", // Ẩn mặt trước
					}}
				>
					<h2 style={{ color: "white" }}>{data}</h2>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default FlipCard;
