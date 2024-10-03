import { useState } from "react";
import FlipCard from "./FlipCard";

enum EGameStatus {
	idle = "idle",
	setup = "setup",
	playing = "playing",
}

const MemoryCard = () => {
	const [status, setStatus] = useState<EGameStatus>(EGameStatus.playing);
	const [arrFlip, setArrFlip] = useState<number[]>([]);
	const [success, setSuccess] = useState<number[]>([]);

	const [level] = useState(4);
	const arrGame = [
		{
			key: 1,
		},
		{
			key: 2,
		},
		{
			key: 2,
		},
		{
			key: 1,
		},
	];

	const handleFlip = (index: number) => {
		if ([...arrFlip, ...success].includes(index)) return;
		if (arrFlip.length === 1) {
			const newArr = [...arrFlip, index];
			setArrFlip([...arrFlip, index]);
			console.log(newArr.length === 2);

			if (
				newArr.length === 2 &&
				arrGame[newArr[0] ?? 0]?.key === arrGame[newArr[1] ?? 0]?.key
			) {
				setSuccess([...success, ...newArr]);
				setTimeout(() => {
					setArrFlip([]);
				}, 1);
				return;
			}
			setTimeout(() => {
				setArrFlip([]);
			}, 2000);
			return;
		}
		if (arrFlip.length === 0) {
			setArrFlip([...arrFlip, index]);
			return;
		}
		if (arrFlip.length === 2) return;
	};

	return (
		<div className="w-full h-[800px] ">
			{status === EGameStatus.idle && (
				<div>
					<button onClick={() => setStatus(EGameStatus.setup)}>Play</button>
				</div>
			)}
			{status === EGameStatus.setup && (
				<div>
					<span>Choose level: {level}</span>
				</div>
			)}
			{status === EGameStatus.playing && (
				<div className="grid grid-cols-2 grid-rows-2 gap-4">
					{arrGame.map((e, i) => (
						<FlipCard
							arrFlip={arrFlip}
							success={success}
							handleFlip={handleFlip}
							data={e.key}
							index={i}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default MemoryCard;
