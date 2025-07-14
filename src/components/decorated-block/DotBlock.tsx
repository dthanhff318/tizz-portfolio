const DotBlock = () => {
	return (
		<div
			className="min-h-[50px] w-full h-full"
			style={{
				backgroundImage: `
                  radial-gradient(
                    circle,
                    rgba(83, 83, 83, 0.3) 1px,
                    transparent 1px
                  )
                `,
				backgroundSize: "10px 10px",
				backgroundPosition: "center",
			}}
		></div>
	);
};

export default DotBlock;
