import { motion } from "framer-motion";
import { TContact } from "../../types/contact";

type TProps = {
	contact: TContact;
};
const ContactLine = ({ contact }: TProps) => {
	return (
		<motion.div className="w-full flex items-center md:justify-center gap-3 md:gap-5 text-text-color text-sm md:text-base">
			<div className="hidden sm:block size-[30px]">{contact.icon}</div>
			<p>{contact.name}: </p>
			<a
				className="hover:underline text-link"
				href={contact.value}
				target="_blank"
			>
				{contact.value}
			</a>
		</motion.div>
	);
};
export default ContactLine;
