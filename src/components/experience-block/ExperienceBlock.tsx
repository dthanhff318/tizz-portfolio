import {
	Accordion,
	AccordionItem,
	AccordionPanel,
	AccordionTrigger,
} from "@/components/animate-ui/base/accordion";
import careerConfig from "@/config/career.config";
import { Hourglass, Code, Globe, Award, BadgeCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
										<p className="font-semibold">
											{career.startTime} - {career.endTime}
										</p>
									</div>
									{career.role && (
										<div className="flex gap-2 items-center text-text-primary">
											<div className="bg-muted p-1 rounded-sm">
												<Code className="size-4" />
											</div>
											<p className="font-semibold">{career.role}</p>
										</div>
									)}
									{career.projects && (
										<>
											<div className="flex gap-2 items-center text-text-primary">
												<div className="bg-muted p-1 rounded-sm">
													<Award className="size-4" />
												</div>
												<p className="font-semibold">Products</p>
											</div>
											<div className="flex flex-col gap-2 pl-4">
												{career.projects?.map((project, index) => (
													<div className="space-y-2" key={project.name}>
														<div className="flex items-center gap-2">
															<a
																href={project.url}
																target="_blank"
																rel="noopener noreferrer"
																className="text-sm hover:underline font-semibold text-text-secondary"
															>
																{index + 1}. {project.name}
															</a>
															<BadgeCheck className="size-4 text-sky-400" />
														</div>
														<div className="flex gap-2 flex-wrap">
															{project.tags?.map((tag) => (
																<Badge
																	className="text-text-secondary bg-muted hover:bg-muted"
																	variant="secondary"
																>
																	{tag}
																</Badge>
															))}
														</div>
													</div>
												))}
											</div>
										</>
									)}

									<div className="flex items-center gap-2">
										<div className="bg-muted p-1 rounded-sm">
											<Globe className="size-4" />
										</div>
										<a
											href={career.link}
											target="_blank"
											rel="noopener noreferrer"
											className="font-semibold hover:underline"
										>
											{career.name}
										</a>
									</div>
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
