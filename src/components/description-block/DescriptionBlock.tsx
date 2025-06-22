import { Hammer, SendHorizontal } from "lucide-react";

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
	];
	return (
		<div className="space-y-2">
			<div className="p-2">
				<p className="text-text-secondary text-sm font-bold">
					Hi-am a web developer
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
						<div className="flex items-center gap-2">
							<div
								key={index}
								className="flex bg-border-secondary p-1 rounded-md items-center justify-center"
							>
								{config.icon}
							</div>
							{config.text}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default DescriptionBlock;
