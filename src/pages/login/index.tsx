import React from "react";
import LogoBlock from "@/components/logo-block/LogoBlock";
import DotBlock from "@/components/decorated-block/DotBlock";
import LoginBlock from "@/components/login-block/LoginBlock";

const Login = () => {
	const contentBlocks = [<LogoBlock />, <LoginBlock />, <DotBlock />];

	return (
		<div className="min-h-screen bg-red h-[100vh]">
			{/* Container  */}
			<div className="grid grid-cols-[8%_84%_8%] sm:grid-cols-[15%_70%_15%] lg:grid-cols-[20%_60%_20%] h-full">
				{/* Each block */}
				{contentBlocks.map((Block, index) => (
					<React.Fragment key={index}>
						{/* Left column */}
						<div className="border-r border-b border-border-primary"></div>

						{/* Middle column */}
						<div className="border-r border-b border-border-primary flex items-center">
							<div className="w-full h-full">
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

export default Login;
