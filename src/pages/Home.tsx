import React from "react";
import NameBlock from "@/components/name-block.tsx/NameBlock";
import DescriptionBlock from "@/components/description-block/DescriptionBlock";
import TechStackBlock from "@/components/techstack-block/TechStackBlock";
import LogoBlock from "@/components/logo-block/LogoBlock";

const DynamicRowLayout = () => {
	const contentBlocks = [
		<LogoBlock />,
		<NameBlock />,
		<DescriptionBlock />,
		<TechStackBlock />,
	];

	return (
		<div className="min-h-screen">
			{/* Container  */}
			<div className="grid grid-cols-[30%_40%_30%]">
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
