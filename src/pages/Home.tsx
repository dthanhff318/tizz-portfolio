import React from "react";
import DescriptionBlock from "@/components/description-block/DescriptionBlock";
import TechStackBlock from "@/components/techstack-block/TechStackBlock";
import LogoBlock from "@/components/logo-block/LogoBlock";
import {
	CrossBlock,
	CrossRightToLeftBlock,
} from "@/components/decorated-block/CrossBlock";
import ProjectBlock from "@/components/project-block/ProjectBlock";
import ExperienceBlock from "@/components/experience-block/ExperienceBlock";
import DotBlock from "@/components/decorated-block/DotBlock";

const DynamicRowLayout = () => {
	const contentBlocks = [
		<LogoBlock />,
		<DescriptionBlock />,
		<CrossBlock />,
		<TechStackBlock />,
		<CrossRightToLeftBlock />,
		<ExperienceBlock />,
		<DotBlock />,
		<ProjectBlock />,
		<DotBlock />,
	];

	return (
		<div className="min-h-screen">
			{/* Container  */}
			<div className="grid grid-cols-[8%_84%_8%] sm:grid-cols-[15%_70%_15%] lg:grid-cols-[20%_60%_20%]">
				{/* Each block */}
				{contentBlocks.map((Block, index) => (
					<React.Fragment key={index}>
						{/* Left column */}
						<div className="border-r border-b border-border-primary"></div>

						{/* Middle column */}
						<div className="border-r border-b border-border-primary flex items-center">
							<div className="w-full">
								<>{Block}</>
							</div>
						</div>

						{/* Right column */}
						<div className="border-b border-border-primary "></div>
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default DynamicRowLayout;
