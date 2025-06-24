import {
	Accordion,
	AccordionItem,
	AccordionPanel,
	AccordionTrigger,
} from "@/components/animate-ui/base/accordion";
import projects from "@/config/project.config";

const ProjectBlock = () => {
	return (
		<div className="p-2">
			<p className="text-text-primary text-sm font-bold">Projects:</p>
			<div className="flex flex-col gap-3">
				<Accordion>
					{projects.map((project) => (
						<AccordionItem>
							<AccordionTrigger>
								<p className="text-text-primary text-sm font-bold">
									{project.name}
								</p>
							</AccordionTrigger>
							<AccordionPanel>{project.desc}</AccordionPanel>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</div>
	);
};

export default ProjectBlock;
