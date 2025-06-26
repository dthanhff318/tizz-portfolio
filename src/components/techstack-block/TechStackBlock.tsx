import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/animate-ui/components/tooltip";
import {
	React,
	JavaScript,
	NextJs,
	TypeScript,
	TailwindCSS,
	MongoDB,
	PostgreSQL,
	Redis,
	Redux,
	Docker,
	ExpressJsDark,
} from "developer-icons";
const TechStackBlock = () => {
	const feTechStacks = [
		{
			icon: <React />,
			tooltip: "React",
		},
		{
			icon: <NextJs />,
			tooltip: "Next.js",
		},
		{
			icon: <JavaScript />,
			tooltip: "JavaScript",
		},
		{
			icon: <TypeScript />,
			tooltip: "TypeScript",
		},
		{
			icon: <TailwindCSS />,
			tooltip: "Tailwind CSS",
		},
		{
			icon: <Redux />,
			tooltip: "Redux",
		},
	];
	const beTechStacks = [
		{
			icon: <ExpressJsDark />,
			tooltip: "Express.js",
		},
		{
			icon: <MongoDB />,
			tooltip: "MongoDB",
		},
		{
			icon: <PostgreSQL />,
			tooltip: "PostgreSQL",
		},
		{
			icon: <Redis />,
			tooltip: "Redis",
		},
	];
	const devOpsTechStacks = [
		{
			icon: <Docker />,
			tooltip: "Docker",
		},
	];
	return (
		<div className="p-2 space-y-4">
			<p className="text-text-primary text-xl font-bold">Tech Stack:</p>
			<TooltipProvider openDelay={100}>
				<div className="flex flex-col gap-3">
					<div className="flex items-center gap-3">
						{feTechStacks.map((tech, index) => (
							<Tooltip>
								<TooltipTrigger>
									<div key={index} className="flex size-8 items-center gap-2">
										{tech.icon}
									</div>
								</TooltipTrigger>
								<TooltipContent>{tech.tooltip}</TooltipContent>
							</Tooltip>
						))}
					</div>
					<div className="flex items-center gap-3">
						{beTechStacks.map((tech, index) => (
							<Tooltip>
								<TooltipTrigger>
									<div key={index} className="flex size-8 items-center gap-2">
										{tech.icon}
									</div>
								</TooltipTrigger>
								<TooltipContent>{tech.tooltip}</TooltipContent>
							</Tooltip>
						))}
					</div>
					<div className="flex items-center gap-3">
						{devOpsTechStacks.map((tech, index) => (
							<Tooltip>
								<TooltipTrigger>
									<div key={index} className="flex size-8 items-center gap-2">
										{tech.icon}
									</div>
								</TooltipTrigger>
								<TooltipContent>{tech.tooltip}</TooltipContent>
							</Tooltip>
						))}
					</div>
				</div>
			</TooltipProvider>
		</div>
	);
};

export default TechStackBlock;
