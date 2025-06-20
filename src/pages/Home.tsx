import React from "react";
import NameBlock from "../components/name-block.tsx/NameBlock";

const DynamicRowLayout = () => {
	// Mảng các block content - bạn có thể thêm/bớt block ở đây
	const contentBlocks = [
		<NameBlock />,
		<NameBlock />,
		<NameBlock />,
		<NameBlock />,
	];

	return (
		<div className="min-h-screen">
			{/* Container  */}
			<div className="grid grid-cols-[30%_40%_30%]">
				{/* Each block */}
				{contentBlocks.map((Block, index) => (
					<React.Fragment key={index}>
						{/* Left column */}
						<div className="border-r border-b border-border-primary min-h-[150px]"></div>

						{/* Middle column */}
						<div className="border-r border-b border-border-primary p-8 min-h-[200px] flex items-center">
							<div className="w-full">
								<>{Block}</>
							</div>
						</div>

						{/* Right column */}
						<div className="border-b border-border-primary  min-h-[150px]"></div>
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default DynamicRowLayout;
