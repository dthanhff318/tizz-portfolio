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
		<React />,
		<NextJs />,
		<JavaScript />,
		<TypeScript />,
		<TailwindCSS />,
		<Redux />,
	];
	const beTechStacks = [
		<ExpressJsDark />,
		<MongoDB />,
		<PostgreSQL />,
		<Redis />,
	];
	const devOpsTechStacks = [<Docker />];
	return (
		<div className="p-2 space-y-4">
			<p className="text-text-primary text-sm font-bold">Tech Stack:</p>
			<div className="flex flex-col gap-3">
				<div className="flex items-center gap-3">
					{feTechStacks.map((tech, index) => (
						<div key={index} className="flex size-8 items-center gap-2">
							{tech}
						</div>
					))}
				</div>
				<div className="flex items-center gap-3">
					{beTechStacks.map((tech, index) => (
						<div key={index} className="flex size-8 items-center gap-2">
							{tech}
						</div>
					))}
				</div>
				<div className="flex items-center gap-3">
					{devOpsTechStacks.map((tech, index) => (
						<div key={index} className="flex size-8 items-center gap-2">
							{tech}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TechStackBlock;
