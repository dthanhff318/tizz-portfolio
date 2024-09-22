import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

type TProps = {
	children: ReactNode;
};
const ProtectRoute = ({ children }: TProps) => {
	const auth = false;
	// Impliment logic check auth
	if (!auth) {
		return <Navigate replace to="/welcome" />;
	}
	return children;
};

export default ProtectRoute;
