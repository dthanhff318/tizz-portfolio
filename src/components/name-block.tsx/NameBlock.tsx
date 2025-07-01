import { TypingText } from "@/components/animate-ui/text/typing";
import { SpringElement } from "@/components/animate-ui/components/spring-element";
import { SlidingNumber } from "@/components/animate-ui/text/sliding-number";

const NameBlock = () => {
	return (
		<div className="flex items-end justify-between">
			<div className="flex-1 border-t border-border-secondary p-2">
				<div className="flex items-center gap-2">
					<TypingText
						className="text-xl font-bold text-text-primary"
						text="Dinh Duy Thanh"
						delay={800}
					/>
				</div>
				<div className="flex">
					<SlidingNumber
						number={31}
						className="text-base font-bold text-text-secondary"
						inView
						transition={{ stiffness: 100, damping: 20, mass: 0.1 }}
					/>
					<p className="text-base font-bold text-text-secondary">-</p>
					<SlidingNumber
						number={8}
						className="text-base font-bold text-text-secondary"
						inView
						transition={{ stiffness: 100, damping: 20, mass: 0.1 }}
					/>
					<p className="text-base font-bold text-text-secondary">-</p>
					<SlidingNumber
						number={2000}
						className="text-base font-bold text-text-secondary"
						inView
						transition={{ stiffness: 100, damping: 20, mass: 0.1 }}
					/>
				</div>
			</div>
			<div className="border-l border-border-secondary ">
				<SpringElement springClassName="stroke-0 fill-none">
					<img
						draggable={false}
						src="/assets/avatar.png"
						alt="avatar"
						className="size-32 sm:size-40 cover rounded-[50%] object-cover z-1"
					/>
				</SpringElement>
			</div>
		</div>
	);
};

export default NameBlock;
