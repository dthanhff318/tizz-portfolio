import { Github, Hammer, MapPin, SendHorizontal } from "lucide-react";

const DescriptionBlock = () => {
	const configs = [
		{
			icon: <Hammer className="size-4 text-text-primary" />,
			text: (
				<p className="text-text-secondary text-sm">
					Web developer at{" "}
					<a
						href="https://nelisoftwares.com"
						target="_blank"
						className="text-text-primary"
					>
						@Nelisoftwares
					</a>
				</p>
			),
		},
		{
			icon: <SendHorizontal className="size-4 text-text-primary" />,
			text: (
				<a
					href="mailto:dthanhff318@gmail.com"
					className="text-text-secondary text-sm"
				>
					dthanhff318@gmail.com
				</a>
			),
		},
		{
			icon: <MapPin className="size-4 text-text-primary" />,
			text: <p className="text-text-secondary text-sm">Ha Noi, Vietnam</p>,
		},
		{
			icon: <Github className="size-4 text-text-primary" />,
			text: (
				<a
					href="https://github.com/dthanhff318"
					className="text-text-secondary text-sm font-bold"
					target="_blank"
				>
					@github.com/dthanhff318
				</a>
			),
		},
	];
	return (
		<div className="space-y-2">
			<div className="p-2 space-y-3">
				<p className="text-text-secondary text-sm font-semibold">
					Hi-am a web developer with 3 years of experience in developing, and
					maintaining websites and web applications. I am passionate about
					building interesting, impressive, and efficient web applications for
					users.
				</p>
				<p className="text-text-secondary text-sm italic">
					-I learn from the failures of people who took my advice 🤷‍♂️
				</p>
			</div>
			<div
				className="min-h-[31px] w-full"
				style={{
					backgroundImage: `
                  linear-gradient(to right, rgba(83, 83, 83, 0.2) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(83, 83, 83, 0.2) 1px, transparent 1px)
                `,
					backgroundSize: "10px 10px",
					backgroundPosition: "center",
				}}
			></div>
			<div className="flex items-center mt-4 p-2">
				<div className="w-full flex flex-col gap-2">
					{configs.map((config, index) => (
						<div key={index} className="flex items-center gap-2">
							<div className="bg-muted p-1 rounded-sm">{config.icon}</div>
							{config.text}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default DescriptionBlock;
