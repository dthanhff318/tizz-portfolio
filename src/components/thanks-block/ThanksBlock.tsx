const ThanksBlock = () => {
	return (
		<div className="min-h-[200px] flex flex-col items-center justify-center bg-center relative p-8 gap-4">
			<img
				src="/assets/thanks.gif"
				alt="Thanks"
				className="max-w-[200px] h-auto rounded-xl"
			/>
			<h2 className="text-lg sm:text-2xl font-bold text-text-primary">Thanks for visiting!</h2>
		</div>
	);
};

export default ThanksBlock;
