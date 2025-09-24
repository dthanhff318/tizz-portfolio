import { HoleBackground } from "@/components/animate-ui/components/backgrounds/hole";
import { GradientText } from "@/components/animate-ui/text/gradient";

const LogoBlock = () => {
	return (
		<div className="min-h-[150px] flex items-center justify-center bg-center relative">
			<HoleBackground
				className="absolute inset-0 flex items-center justify-center rounded-xl"
				strokeColor="white"
				particleRGBColor={[255, 255, 255]}
			>
				<GradientText
					className="text-4xl font-bold"
					text="t1zz"
					neon
					gradient="linear-gradient(90deg, #ffffff 0%, #bbbbbb 20%, #727070 50%, #bbbbbb 80%, #ffffff 100%)"
				/>
			</HoleBackground>
		</div>
	);
};

export default LogoBlock;
