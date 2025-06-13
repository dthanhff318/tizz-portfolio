import { useRef, useState } from "react";
import PlayButton from "../playerButton/playButton";
import MusicDisc from "./musicDisc";

const MusicPlayer = () => {
	const [isPlaying, setIsPlaying] = useState(false);

	const handlePlay = () => {
		setIsPlaying((prev) => !prev);
		if (isPlaying) {
			audioRef.current?.pause();
		} else {
			audioRef.current?.play();
		}
	};

	const audioRef = useRef<HTMLAudioElement>(null);
	return (
		<div
			className="h-full w-full rounded-3xl bg-primary-bold flex items-center justify-start"
			style={{
				WebkitMaskImage: `linear-gradient(to right, black 0%, black 70%, transparent 100%)`,
				maskImage: `linear-gradient(to right, black 0%, black 70%, transparent 100%)`,
				WebkitMaskSize: "100% 100%",
				maskSize: "100% 100%",
				WebkitMaskRepeat: "no-repeat",
				maskRepeat: "no-repeat",
			}}
		>
			<MusicDisc
				backgroundImage="/assets/avatar.jpg"
				size={150}
				isPlaying={isPlaying}
				rotationSpeed={10}
			/>
			<div className="flex gap-16 ml-4">
				<div className="flex flex-col gap-3">
					<span className="text-text-primary text-2xl font-bold">
						See you again
					</span>
					<span className="text-text-secondary">With KaliFa</span>
				</div>
				<div>
					<PlayButton
						progress={31}
						isPlaying={isPlaying}
						onClick={handlePlay}
					/>
				</div>
			</div>
			<audio
				ref={audioRef}
				src="/assets/music/see-you-again.mp3"
				className="hidden"
			/>
		</div>
	);
};

export default MusicPlayer;
