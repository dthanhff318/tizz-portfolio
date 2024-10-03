import MemoryCard from "../components/memoryCard/MemoryCard";

const Contact = () => {
	return (
		<div className="w-full flex flex-col items-center gap-4">
			<p className="text-text-color text-center text-2xl">Contact me</p>
			<div className="">
				<MemoryCard />
			</div>
		</div>
	);
};

export default Contact;
