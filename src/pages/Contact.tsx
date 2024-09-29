const Contact = () => {
	return (
		<div className="w-full flex flex-col items-center gap-4">
			<p className="text-text-color text-center text-2xl">Contact me</p>
			<textarea
				className="textarea textarea-success w-[90%] h-[200px] md:w-[60%] xl:w-[50%]"
				placeholder="Bio"
			></textarea>
		</div>
	);
};

export default Contact;
