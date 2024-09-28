import { ReactNode } from "react";

type TProps = {
	children: ReactNode;
};
const IconWrapper = ({ children }: TProps) => {
	return <div>{children}</div>;
};

export default IconWrapper;
