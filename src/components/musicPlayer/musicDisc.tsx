import { useEffect, useRef } from "react";

interface MusicDiscProps {
	backgroundImage?: string;
	size?: number; // Size in pixels, default 256
	isPlaying?: boolean; // New prop for rotation
	rotationSpeed?: number; // RPM (rotations per minute), default 33.33
}
const MusicDisc = ({
	backgroundImage,
	size = 256,
	isPlaying = false,
	rotationSpeed = 33.33,
}: MusicDiscProps) => {
	const discRef = useRef<HTMLDivElement>(null);
	const animationRef = useRef<Animation | null>(null);
	const rotationAngle = useRef(0);
	const lastTime = useRef(Date.now());

	const discStyle = {
		backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
	};

	const holeSize = size * 0.15; // Hole is 25% of disc size
	const grooveInsets = [
		size * 0.0625, // inset-4 equivalent
		size * 0.125, // inset-8 equivalent
		size * 0.1875, // inset-12 equivalent
		size * 0.25, // inset-16 equivalent
	];

	// Degrees per millisecond
	const degreesPerMs = (rotationSpeed * 360) / (60 * 1000);

	useEffect(() => {
		if (!discRef.current) return;

		// Cancel existing animation
		if (animationRef.current) {
			console.log("cancel", animationRef.current);

			animationRef.current.cancel();
			animationRef.current = null;
		}

		if (isPlaying) {
			// Update last time when starting
			lastTime.current = Date.now();

			const animate = () => {
				const currentTime = Date.now();
				const deltaTime = currentTime - lastTime.current;
				lastTime.current = currentTime;

				// Update rotation angle
				rotationAngle.current += degreesPerMs * deltaTime;
				rotationAngle.current = rotationAngle.current % 360;

				// Apply rotation
				if (discRef.current) {
					discRef.current.style.transform = `rotate(${rotationAngle.current}deg)`;
				}

				// Continue animation if still playing
				if (isPlaying) {
					animationRef.current = requestAnimationFrame(animate) as any;
				}
			};

			animate();
		} else {
			// When paused, just maintain current rotation
			if (discRef.current) {
				discRef.current.style.transform = `rotate(${rotationAngle.current}deg)`;
			}
		}

		// Cleanup function
		return () => {
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current as unknown as number);
				animationRef.current = null;
			}
		};
	}, [isPlaying, degreesPerMs]);

	return (
		<div className="flex items-center justify-center p-4 lg:p-8">
			<div
				className="relative size-20 sm:size-24 md:size-32 lg:size-40"
				// style={{ width: `${size}px`, height: `${size}px` }}
			>
				{/* Main disc */}
				<div
					ref={discRef}
					className={`size-20 sm:size-24 md:size-32 lg:size-40 w-full h-full rounded-full shadow-2xl transition-none ${
						!backgroundImage
							? "bg-gradient-to-br from-gray-900 via-gray-800 to-black"
							: ""
					}`}
					style={discStyle}
				>
					{/* Overlay for darkening when using background image */}
					{backgroundImage && (
						<div className="absolute inset-0 bg-black bg-opacity-20 rounded-full"></div>
					)}

					{/* Grooves/rings on the disc */}
					{grooveInsets.map((inset, index) => (
						<div
							key={index}
							className="absolute border border-gray-600 rounded-full"
							style={{
								top: `${inset}px`,
								left: `${inset}px`,
								right: `${inset}px`,
								bottom: `${inset}px`,
								opacity: 0.3 - index * 0.05,
							}}
						></div>
					))}

					{/* Reflective highlight */}
					<div
						className="absolute bg-gradient-to-br from-white to-transparent opacity-20 rounded-full blur-sm"
						style={{
							top: `${size * 0.125}px`,
							left: `${size * 0.125}px`,
							width: `${size * 0.25}px`,
							height: `${size * 0.25}px`,
						}}
					></div>
				</div>

				{/* Center hole - stays stationary */}
				<div
					className="absolute top-1/2 left-1/2 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-inner z-10"
					style={{
						width: `${holeSize}px`,
						height: `${holeSize}px`,
					}}
				>
					{/* Inner shadow for depth */}
					<div className="w-full h-full rounded-full shadow-[inset_0_0_8px_rgba(0,0,0,0.8)]"></div>
				</div>
			</div>
		</div>
	);
};
export default MusicDisc;
