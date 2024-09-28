import { useEffect, useRef } from "react";
import CodeIcon from "../components/ui/icons/CodeIcon";
import { getPublicFile } from "../helpers/functions";

const Home = () => {
	const avatarFile = getPublicFile("avatar.jpg");
	const titleRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const dogContainer = document.querySelector("#dog-three-container");
		if (dogContainer && titleRef.current) {
			const rectDogContainer = dogContainer.getBoundingClientRect().top;
			titleRef.current.style.top = `${rectDogContainer - 60}px`;
		}
	}, []);

	return (
		<div className="relative flex justify-center bg-background w-full h-full text-center flex-col items-center gap-12">
			<div
				ref={titleRef}
				className="absolute text-center left-1/2 -translate-x-1/2 text-text-color space-y-3"
			>
				<p className="sm:text-md xl:text-xl">
					I'm a web developer in Viet Nam 😎 !
				</p>
			</div>
			<div className="flex gap-8 text-text-color">
				<div className="flex flex-col gap-4">
					<span className="text-5xl">Dinh Duy Thanh</span>
					<div className="text-xl flex gap-2 items-center">
						Working as
						<div className="flex items-center gap-2">
							<CodeIcon />
							<span className="text-text-primary"> Frontend </span>
							<CodeIcon />
						</div>
					</div>
					<span className="text-xl">
						and res.status(318).send({" "}
						{<span className="text-text-green">Backend</span>} ) developer
					</span>
				</div>
				<img
					className="mask mask-squircle w-[140px] h-[140px]  object-cover"
					src={avatarFile}
					alt="me"
				/>
			</div>
			<div className="mockup-code w-[60%]">
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
			</div>
		</div>
	);
};

export default Home;
