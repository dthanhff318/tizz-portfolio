const CrossBlock = () => {
	return (
		<div
			className="min-h-[50px] w-full"
			style={{
				backgroundImage: `
                  repeating-linear-gradient(
                    45deg, 
                    transparent, 
                    transparent 9px, 
                    rgba(83, 83, 83, 0.2) 9px, 
                    rgba(83, 83, 83, 0.2) 10px
                  )
                `,
				backgroundPosition: "center",
			}}
		></div>
	);
};

const CrossRightToLeftBlock = () => {
	return (
		<div
			className="min-h-[50px] w-full"
			style={{
				backgroundImage: `
                  repeating-linear-gradient(
                    -45deg, 
                    transparent, 
                    transparent 9px, 
                    rgba(83, 83, 83, 0.2) 9px, 
                    rgba(83, 83, 83, 0.2) 10px
                  )
                `,
				backgroundPosition: "center",
			}}
		></div>
	);
};

export { CrossBlock, CrossRightToLeftBlock };
