import {
	animate,
	createScope,
	createSpring,
	createDraggable,
	stagger,
	waapi,
	utils,
	createTimer,
} from "animejs";
import { useEffect, useRef, useState } from "react";
import reactLogo from "/assets/avatar.jpg";

function MainLoading() {
	const root = useRef(null);
	const scope = useRef(null);
	const [rotations, setRotations] = useState(0);
	const [$time, $count] = utils.$(".tizzTime");
	useEffect(() => {
		scope.current = createScope({ root }).add((scope) => {
			console.log($time);

			createTimer({
				duration: 1000,
				loop: true,
				frameRate: 30,
				onUpdate: (self) => ($time.innerHTML = self.currentTime),
			});
			// Every anime.js instances declared here are now scopped to <div ref={root}>

			// Created a bounce animation loop
			animate(".logo", {
				scale: [
					{ to: 1.25, ease: "inOut(3)", duration: 200 },
					{ to: 1, ease: createSpring({ stiffness: 300 }) },
				],
				loop: true,
				loopDelay: 250,
			});

			// Make the logo draggable around its center
			createDraggable(".logo", {
				container: [0, 0, 0, 0],
				releaseEase: createSpring({ stiffness: 200 }),
			});

			waapi.animate("span", {
				translate: `0 -2rem`,
				delay: stagger(100),
				duration: 600,
				loop: true,
				alternate: true,
				ease: "inOut(2)",
			});

			// Register function methods to be used outside the useEffect
			scope.add("roateZo", (i) => {
				animate(".logo", {
					rotate: i * 360,
					ease: "out(4)",
					duration: 1500,
				});
			});
		});

		// Properly cleanup all anime.js instances declared inside the scope
		return () => scope.current.revert();
	}, []);

	const handleClick = () => {
		const i = rotations + 1;
		setRotations(i);
		// Animate logo rotation on click using the method declared inside the scope
		scope.current.methods.roateZo(i);
	};

	return (
		<div
			ref={root}
			className="w-[100vw] h-[100vh] flex items-center justify-center"
		>
			<div className="large centered row">
				<img
					src={reactLogo}
					className="logo"
					width={130}
					height={130}
					alt="React logo"
				/>
			</div>
			<div className="medium row">
				<fieldset className="controls">
					<button onClick={handleClick}>rotations: {rotations}</button>
				</fieldset>
			</div>

			<span>D</span>
			<span>U</span>
			<span>Y</span>
			<span>T</span>
			<span>H</span>
			<p className="tizzTime"></p>
		</div>
	);
}

export default MainLoading;
