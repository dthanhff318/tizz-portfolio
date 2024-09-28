import { ForwardedRef, forwardRef, ReactNode } from "react";

export const DogSpinner = () => (
	<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 loading loading-ring loading-lg scale-x-110"></span>
);

type TProps = {
	children: ReactNode;
};

type TForwardedRef = ForwardedRef<HTMLDivElement>;

export const DogContainer = forwardRef(
	({ children }: TProps, ref: TForwardedRef) => (
		<div
			ref={ref}
			className="flex justify-center -mt-20"
			id="dog-three-container"
		>
			{children}
		</div>
	)
);

const Loader = () => {
	return (
		<DogContainer>
			<DogSpinner />
		</DogContainer>
	);
};

export default Loader;
