import { useRef, useEffect, useState } from "react";
import careerConfig from "../../config/career.config";
import { TCareer } from "../../types/career";

type CareerProps = {
	onScrollChange?: (isAtEnd: boolean) => void;
};

const Career = ({ onScrollChange }: CareerProps = {}) => {
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);

	const handleMouseDown = (e: React.MouseEvent) => {
		if (!scrollContainerRef.current) return;
		setIsDragging(true);
		setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
		setScrollLeft(scrollContainerRef.current.scrollLeft);
		scrollContainerRef.current.style.cursor = "grabbing";
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!isDragging || !scrollContainerRef.current) return;
		e.preventDefault();
		const x = e.pageX - scrollContainerRef.current.offsetLeft;
		const walk = (x - startX) * 2; // Adjust scroll speed
		scrollContainerRef.current.scrollLeft = scrollLeft - walk;
		checkScrollEnd();
	};

	const handleMouseUp = () => {
		if (!scrollContainerRef.current) return;
		setIsDragging(false);
		scrollContainerRef.current.style.cursor = "grab";

		// Snap to nearest card
		snapToNearestCard();
	};

	const handleTouchStart = (e: React.TouchEvent) => {
		if (!scrollContainerRef.current) return;
		setIsDragging(true);
		setStartX(
			(e.touches[0]?.pageX ?? 0) - scrollContainerRef.current.offsetLeft
		);
		setScrollLeft(scrollContainerRef.current.scrollLeft);
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		if (!isDragging || !scrollContainerRef.current) return;
		const x =
			(e.touches[0]?.pageX ?? 0) - scrollContainerRef.current.offsetLeft;
		const walk = (x - startX) * 2;
		scrollContainerRef.current.scrollLeft = scrollLeft - walk;
		checkScrollEnd();
	};

	const handleTouchEnd = () => {
		setIsDragging(false);
		snapToNearestCard();
	};

	const checkScrollEnd = () => {
		if (!scrollContainerRef.current) return;

		const container = scrollContainerRef.current;
		const isAtEnd =
			container.scrollLeft + container.clientWidth >=
			container.scrollWidth - 10;
		onScrollChange?.(isAtEnd);
	};

	const snapToNearestCard = () => {
		if (!scrollContainerRef.current) return;

		const container = scrollContainerRef.current;
		// Adjust card width based on screen size
		const screenWidth = window.innerWidth;
		let cardWidth = 184; // 160px + 24px gap for mobile
		if (screenWidth >= 640) cardWidth = 204; // 180px + 24px gap for sm
		if (screenWidth >= 768) cardWidth = 224; // 200px + 24px gap for md
		if (screenWidth >= 1024) cardWidth = 264; // 240px + 24px gap for lg

		const currentScroll = container.scrollLeft;
		const nearestCardIndex = Math.round(currentScroll / cardWidth);
		const targetScroll = nearestCardIndex * cardWidth;

		container.scrollTo({
			left: targetScroll,
			behavior: "smooth",
		});

		// Check scroll position after snapping
		setTimeout(checkScrollEnd, 300);
	};

	useEffect(() => {
		const handleMouseLeave = () => {
			if (isDragging) {
				setIsDragging(false);
				if (scrollContainerRef.current) {
					scrollContainerRef.current.style.cursor = "grab";
				}
				snapToNearestCard();
			}
		};

		const container = scrollContainerRef.current;
		if (container) {
			container.addEventListener("mouseleave", handleMouseLeave);
		}
		return () => container?.removeEventListener("mouseleave", handleMouseLeave);
	}, [isDragging]);

	useEffect(() => {
		const handleScroll = () => {
			checkScrollEnd();
		};

		const container = scrollContainerRef.current;
		if (container) {
			container.addEventListener("scroll", handleScroll);
			// Check initial state
			checkScrollEnd();
		}
		return () => container?.removeEventListener("scroll", handleScroll);
	}, [onScrollChange]);

	return (
		<div className="h-fit w-full flex flex-col gap-4 overflow-visible group/career pb-4">
			<div className="">
				<p className="text-text-primary text-lg md:text-2xl font-semibold">
					My career
				</p>
			</div>
			<div
				ref={scrollContainerRef}
				className="flex gap-6 overflow-x-auto overflow-y-visible scrollbar-hide cursor-grab select-none -ml-4 -my-4 py-4 pl-4 transition-all duration-300 group-hover/career:ml-0"
				style={{
					scrollbarWidth: "none",
					msOverflowStyle: "none",
					WebkitOverflowScrolling: "touch",
				}}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
			>
				{careerConfig.map((item, index) => (
					<Career.Card key={`${item.name}-${index}`} {...item} />
				))}
			</div>
		</div>
	);
};

Career.Card = ({ name, startTime, endTime, thumb }: TCareer) => {
	return (
		<div className="group aspect-square h-[160px] w-[160px] sm:size-[180px] size-[200px] rounded-3xl relative flex-shrink-0 hover:z-10">
			<div
				className="absolute inset-0 z-0 aspect-square rounded-3xl"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='24' ry='24' stroke='%23ae5d66' stroke-width='4' stroke-dasharray='6%2c 9' stroke-dashoffset='23' stroke-linecap='square'/%3e%3c/svg%3e")`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
			></div>
			<div
				className="relative z-1 w-full h-full rounded-3xl hover:transition-transform hover:duration-1000 hover:transform hover:rotate-[-4deg]"
				style={{
					transformOrigin: "left bottom",
				}}
			>
				<img
					className="w-full h-full rounded-3xl object-cover object-center brightness-50 group-hover:brightness-75 transition-all duration-300"
					src={thumb}
					alt=""
					draggable={false}
				/>
				<div className="absolute top-0 left-0 bottom-0 flex flex-col justify-between gap-2 p-3 sm:p-4">
					<button className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-[#be3f3a] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-[75deg] transition-all duration-300">
						<svg
							className="mb-1 w-5 h-5 sm:w-6 sm:h-6 lg:w-[29px] lg:h-[29px]"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 29 29"
						>
							<path
								className="fill-text-primary"
								stroke="none"
								d="M11.035898384862 3.7775681356645a4 4 0 0 1 6.9282032302755 0l10.071796769724 17.444863728671a4 4 0 0 1 -3.4641016151378 6l-20.143593539449 0a4 4 0 0 1 -3.4641016151378 -6"
							></path>
						</svg>
					</button>
					<div className="flex flex-col justify-end-end gap-1 sm:gap-2">
						<p className="text-text-primary text-lg sm:text-xl lg:text-2xl font-semibold group-hover:translate-y-0 translate-y-3 transition-all duration-300">
							{name}
						</p>
						<p className="text-[#cf675b] text-xs sm:text-sm opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-3 transition-all duration-300">
							{startTime} - {endTime}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Career;
