import {
	Accordion,
	AccordionItem,
	AccordionPanel,
	AccordionTrigger,
} from "@/components/animate-ui/base/accordion";
import careerConfig from "@/config/career.config";
import { Hourglass, Code, Dot } from "lucide-react";

const ExperienceBlock = () => {
	return (
		<div className="p-2">
			<p className="text-text-primary text-xl font-bold">Experience:</p>
			<div className="flex flex-col gap-3">
				<Accordion>
					{careerConfig.map((career) => (
						<AccordionItem className="text-text-primary">
							<AccordionTrigger>
								<div className="flex items-center gap-3">
									<img
										src={career.thumb}
										alt={career.name}
										className="size-6 rounded-sm object-cover"
									/>
									<p className="text-text-primary text-base font-bold">
										{career.name}
									</p>
									{career.live && (
										<div className="bg-green-500 size-2 rounded-full"></div>
									)}
								</div>
							</AccordionTrigger>
							<AccordionPanel>
								<div className="flex flex-col gap-3 ">
									<div className="flex gap-2 items-center text-text-primary">
										<div className="bg-muted p-1 rounded-sm">
											<Hourglass className="size-4" />
										</div>
										<p>
											{career.startTime} - {career.endTime}
										</p>
									</div>
									{career.role && (
										<div className="flex gap-2 items-center text-text-primary">
											<div className="bg-muted p-1 rounded-sm">
												<Code className="size-4" />
											</div>
											<p>{career.role}</p>
										</div>
									)}
									<div className="flex gap-2 items-center text-text-primary pl-3">
										<div className="flex items-center gap-2">
											<Dot className="size-4" />
											<p>Working ...</p>
										</div>
									</div>
									<p>
										Ref:{" "}
										<a
											href={career.link}
											target="_blank"
											rel="noopener noreferrer"
											className="font-semibold underline"
										>
											{career.name}
										</a>
									</p>
								</div>
							</AccordionPanel>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</div>
	);
};

export default ExperienceBlock;
