const LogoBlock = () => {
	return (
		<div
			className="min-h-[150px] flex items-center justify-center bg-center"
			style={{
				backgroundImage: `
			  linear-gradient(to right, rgba(83, 83, 83, 0.2) 1px, transparent 1px),
			  linear-gradient(to bottom, rgba(83, 83, 83, 0.2) 1px, transparent 1px)
			`,
				backgroundSize: "10px 10px",
			}}
		>
			<span className="text-text-primary text-4xl font-bold">t1zz</span>
		</div>
	);
};

export default LogoBlock;
