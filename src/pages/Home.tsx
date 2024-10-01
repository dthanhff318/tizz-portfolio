import { useEffect, useRef } from "react";
import CodeIcon from "../components/ui/icons/CodeIcon";
import { getPublicFile } from "../helpers/functions";
import { motion } from "framer-motion";
import TextWriting from "../components/animation/TextWriting";

const Home = () => {
	const avatarFile = getPublicFile("avatar.jpg");
	const titleRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const dogContainer = document.querySelector("#dog-three-container");
		if (dogContainer && titleRef.current) {
			const rectDogContainer = dogContainer.getBoundingClientRect().top;
			titleRef.current.style.top = `${rectDogContainer}px`;
		}
	}, []);

	return (
		<div className="relative flex justify-center bg-background w-full h-full text-center flex-col items-center gap-12">
			<div
				ref={titleRef}
				className="absolute text-center left-1/2 -translate-x-1/2 text-text-color space-y-3 "
			>
				<TextWriting
					text="I'm a web developer in Viet Nam 😎 !"
					className="sm:text-md xl:text-xl"
				/>
			</div>
			<div className="flex flex-col sm:flex-row items-center gap-8 text-text-color">
				<div className="flex flex-col gap-4">
					<span className="text-3xl md:text-4xl xl:text-5xl">
						Dinh Duy Thanh
					</span>
					<div className="text-base md:text-xl flex gap-2 items-center">
						Working as
						<div className="flex items-center gap-2">
							<CodeIcon />
							<motion.span
								drag
								dragConstraints={{
									top: -50,
									left: -50,
									right: 50,
									bottom: 50,
								}}
								dragSnapToOrigin
								className="text-text-primary"
							>
								Frontend{" "}
							</motion.span>
							<CodeIcon />
						</div>
					</div>
					<span className="text-base md:text-xl">
						and res.status(318).send({" "}
						{<span className="text-text-green">Backend</span>} ) developer
					</span>
				</div>
				<img
					className="mask mask-squircle size-[65%] sm:size-[140px] object-cover"
					src={avatarFile}
					alt="Tizz is me"
				/>
			</div>

			{/* Introduce */}
			<motion.div
				initial={{ opacity: 0, translateX: "-50%" }}
				whileInView={{ opacity: 1, translateX: "0" }}
				viewport={{ once: false }}
				className="mockup-code w-[100%] sm:w-[80%] xl:w-[60%]"
			>
				<div className="px-4 text-left">
					<pre data-prefix="#" className="text-success uppercase">
						<code>✨✨✨ Sth about me:</code>
					</pre>
					<pre data-prefix="*" className="text-warning">
						<code>Name: Đinh Duy Thành</code>
					</pre>
					<pre data-prefix=">" className="text-success">
						<code>Birthday: 31/08/2000</code>
					</pre>
					<pre data-prefix="$" className="text-success">
						<code>
							Gmail:{" "}
							<a className="hover:underline" href="dthanhff318@gmail.com">
								dthanhff318@gmail.com
							</a>
						</code>
					</pre>
				</div>
			</motion.div>

			{/* Techstack */}
			<motion.div
				initial={{ opacity: 0, translateX: "-50%" }}
				whileInView={{ opacity: 1, translateX: "0" }}
				viewport={{ once: false }}
				className="mockup-code w-[100%] sm:w-[80%] xl:w-[60%]"
			>
				<div className="px-4 text-left">
					<pre data-prefix="#" className="text-success uppercase">
						<code>✨✨✨ Tech stack:</code>
					</pre>
					<pre data-prefix=">" className="text-warning">
						<code>FE: ReactJS , NextJS</code>
					</pre>
					<pre data-prefix=">" className="text-rose-500">
						<code>BE: ExpressJS, NestJS</code>
					</pre>
					<pre data-prefix=">" className="text-cyan-400">
						<code>Database: MongoDB, PostgreSQL</code>
					</pre>
				</div>
			</motion.div>
		</div>
	);
};

export default Home;
