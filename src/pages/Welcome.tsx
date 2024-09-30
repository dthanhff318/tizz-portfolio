import { Link } from "react-router-dom";
import type { FunctionComponent } from "../common/types";

const Welcome = (): FunctionComponent => {
	// const { t, i18n } = useTranslation();

	// const onTranslateButtonClick = async (): Promise<void> => {
	// 	if (i18n.resolvedLanguage === "en") {
	// 		await i18n.changeLanguage("es");
	// 	} else {
	// 		await i18n.changeLanguage("en");
	// 	}
	// };

	return (
		<div className="bg-blue-300  font-bold w-screen h-screen flex flex-col justify-center items-center">
			<Link to={"/about"}>Go to </Link>
		</div>
	);
};

export default Welcome;
