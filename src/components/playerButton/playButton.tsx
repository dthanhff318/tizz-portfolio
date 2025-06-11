import { useEffect, useState } from "react";

interface PlayButtonProps {
	progress?: number; // Progress percentage (0-100)
	isPlaying?: boolean;
	onClick?: () => void;
}

const PlayButton = ({
	progress = 0,
	isPlaying = false,
	onClick,
}: PlayButtonProps) => {
	const circumference = 2 * Math.PI * 30; // radius of 30px
	const strokeDashoffset = circumference - (progress / 100) * circumference;

	return (
		<button
			onClick={onClick}
			className="relative w-16 h-16 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200"
		>
			{/* Progress ring */}
			<svg
				className="absolute inset-0 w-16 h-16 transform -rotate-90"
				viewBox="0 0 64 64"
			>
				{/* Background ring */}
				<circle
					cx="32"
					cy="32"
					r="30"
					stroke="rgba(239, 68, 68, 0.2)"
					strokeWidth="2"
					fill="none"
				/>
				{/* Progress ring */}
				<circle
					cx="32"
					cy="32"
					r="30"
					stroke="#ef4444"
					strokeWidth="2"
					fill="none"
					strokeDasharray={circumference}
					strokeDashoffset={strokeDashoffset}
					strokeLinecap="round"
					className="transition-all duration-300"
				/>
			</svg>

			{/* Play/Pause Icon */}
			{isPlaying ? (
				// Pause icon - two rectangles
				<svg
					width="32"
					height="32"
					viewBox="0 0 32 32"
					className="transition-opacity duration-200"
				>
					<rect x="10" y="8" width="4" height="16" rx="2" fill="white" />
					<rect x="18" y="8" width="4" height="16" rx="2" fill="white" />
				</svg>
			) : (
				// Play icon - rounded triangle
				<svg
					width="32"
					height="32"
					viewBox="0 0 32 32"
					style={{ marginLeft: "1px" }}
					className="transition-opacity duration-200"
				>
					<path
						d="M11 9 C11 8 12 7.5 12.7 8 L23 15 C23.7 15.5 23.7 16.5 23 17 L12.7 24 C12 24.5 11 24 11 23 Z"
						fill="white"
					/>
				</svg>
			)}
		</button>
	);
};

export default PlayButton;
