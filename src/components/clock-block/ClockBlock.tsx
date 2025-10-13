import React, { useState, useEffect, useRef } from "react";
import "./style.css";

const H = { h: 0, m: 180 },
	V = { h: 270, m: 90 },
	TL = { h: 180, m: 270 },
	TR = { h: 0, m: 270 },
	BL = { h: 180, m: 90 },
	BR = { h: 0, m: 90 },
	E = { h: 135, m: 135 };

const digits = [
	[
		BR,
		H,
		H,
		BL,
		V,
		BR,
		BL,
		V,
		V,
		V,
		V,
		V,
		V,
		V,
		V,
		V,
		V,
		TR,
		TL,
		V,
		TR,
		H,
		H,
		TL,
	],
	[
		BR,
		H,
		BL,
		E,
		TR,
		BL,
		V,
		E,
		E,
		V,
		V,
		E,
		E,
		V,
		V,
		E,
		BR,
		TL,
		TR,
		BL,
		TR,
		H,
		H,
		TL,
	],
	[
		BR,
		H,
		H,
		BL,
		TR,
		H,
		BL,
		V,
		BR,
		H,
		TL,
		V,
		V,
		BR,
		H,
		TL,
		V,
		TR,
		H,
		BL,
		TR,
		H,
		H,
		TL,
	],
	[
		BR,
		H,
		H,
		BL,
		TR,
		H,
		BL,
		V,
		E,
		BR,
		TL,
		V,
		E,
		TR,
		BL,
		V,
		BR,
		H,
		TL,
		V,
		TR,
		H,
		H,
		TL,
	],
	[
		BR,
		BL,
		BR,
		BL,
		V,
		V,
		V,
		V,
		V,
		TR,
		TL,
		V,
		TR,
		H,
		BL,
		V,
		E,
		E,
		V,
		V,
		E,
		E,
		TR,
		TL,
	],
	[
		BR,
		H,
		H,
		BL,
		V,
		BR,
		H,
		TL,
		V,
		TR,
		H,
		BL,
		TR,
		H,
		BL,
		V,
		BR,
		H,
		TL,
		V,
		TR,
		H,
		H,
		TL,
	],
	[
		BR,
		H,
		H,
		BL,
		V,
		BR,
		H,
		TL,
		V,
		TR,
		H,
		BL,
		V,
		BR,
		BL,
		V,
		V,
		TR,
		TL,
		V,
		TR,
		H,
		H,
		TL,
	],
	[
		BR,
		H,
		H,
		BL,
		TR,
		H,
		BL,
		V,
		E,
		E,
		V,
		V,
		E,
		E,
		V,
		V,
		E,
		E,
		V,
		V,
		E,
		E,
		TR,
		TL,
	],
	[
		BR,
		H,
		H,
		BL,
		V,
		BR,
		BL,
		V,
		V,
		TR,
		TL,
		V,
		V,
		BR,
		BL,
		V,
		V,
		TR,
		TL,
		V,
		TR,
		H,
		H,
		TL,
	],
	[
		BR,
		H,
		H,
		BL,
		V,
		BR,
		BL,
		V,
		V,
		TR,
		TL,
		V,
		TR,
		H,
		BL,
		V,
		BR,
		H,
		TL,
		V,
		TR,
		H,
		H,
		TL,
	],
];

const normalizeAngle = (next: number, prev: number) => {
	const delta = (((next - prev) % 360) + 360) % 360;
	return prev + delta;
};

const getTimeDigits = () => {
	const now = new Date();
	return [now.getHours(), now.getMinutes(), now.getSeconds()].flatMap((val) =>
		String(val).padStart(2, "0").split("").map(Number)
	);
};

const randomAngle = () => Math.floor(Math.random() * 360);

const Clock = ({
	h,
	m,
	initial,
}: {
	h: number;
	m: number;
	initial: boolean;
}) => {
	const prev = useRef<{ h: number; m: number }>({ h: 0, m: 0 });
	const hourAngle = normalizeAngle(h, prev.current.h);
	const minuteAngle = normalizeAngle(m, prev.current.m);
	prev.current = { h: hourAngle, m: minuteAngle };

	return (
		<div
			className="clock"
			style={
				{
					"--hour-angle": initial ? randomAngle() : hourAngle,
					"--minute-angle": initial ? randomAngle() : minuteAngle,
					"--dur": initial ? 1 : 0.4,
				} as React.CSSProperties
			}
		/>
	);
};

const ClockBlock = () => {
	const [time, setTime] = useState(Array(6).fill(0));
	const [initial, setInitial] = useState(true);
	const [isFullscreen, setIsFullscreen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let updateTimerId: NodeJS.Timeout;
		let initialTimerId: NodeJS.Timeout;
		const updateTime = () => {
			setTime(getTimeDigits());
			const now = Date.now();
			const delay = 1000 - (now % 1000);
			updateTimerId = setTimeout(updateTime, delay);
		};

		initialTimerId = setTimeout(() => {
			setInitial(false);
			updateTime();
		}, 600);

		return () => {
			clearTimeout(updateTimerId);
			clearTimeout(initialTimerId);
		};
	}, []);

	useEffect(() => {
		const handleFullscreenChange = () => {
			setIsFullscreen(!!document.fullscreenElement);
		};

		document.addEventListener("fullscreenchange", handleFullscreenChange);
		return () => {
			document.removeEventListener("fullscreenchange", handleFullscreenChange);
		};
	}, []);

	const toggleFullscreen = async () => {
		if (!containerRef.current) return;

		try {
			if (!document.fullscreenElement) {
				await containerRef.current.requestFullscreen();
			} else {
				await document.exitFullscreen();
			}
		} catch (error) {
			console.error("Error toggling fullscreen:", error);
		}
	};

	return (
		<div className="clock-block-container" ref={containerRef}>
			<div className="clock-block">
				{time.map((t, i) => (
					<div key={i}>
						{digits[t]?.map(({ h, m }, j) => (
							<Clock key={j} h={h} m={m} initial={initial} />
						))}
					</div>
				))}
			</div>
			<button
				className="fullscreen-button"
				onClick={toggleFullscreen}
				aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
				title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
			>
				{isFullscreen ? (
					<svg viewBox="0 0 24 24" fill="currentColor">
						<path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
					</svg>
				) : (
					<svg viewBox="0 0 24 24" fill="currentColor">
						<path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
					</svg>
				)}
			</button>
		</div>
	);
};

export default ClockBlock;
