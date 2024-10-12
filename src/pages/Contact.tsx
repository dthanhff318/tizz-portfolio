import ContactLine from "../components/contactLine/ContactLine";
import contactConfig from "../config/contact.config";

const Contact = () => {
	return (
		<div className="w-full flex flex-col items-center gap-8">
			<p className="text-text-color text-center text-2xl">Contact</p>
			<div className="w-[90%] md:w-[60%] flex flex-col gap-6">
				{contactConfig.map((e) => (
					<ContactLine contact={e} key={e.name} />
				))}
			</div>
		</div>
	);
};

export default Contact;
