import React from "react";

const DynamicRowLayout = () => {
	// Mảng các block content - bạn có thể thêm/bớt block ở đây
	const contentBlocks = [
		{
			id: 1,
			title: "Block 1 - Giới thiệu",
			content:
				"Đây là block đầu tiên với nội dung giới thiệu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			id: 2,
			title: "Block 2 - Dịch vụ",
			content:
				"Block thứ hai mô tả về các dịch vụ. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			id: 3,
			title: "Block 3 - Tính năng",
			content:
				"Block thứ ba giới thiệu tính năng. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
		},
		{
			id: 4,
			title: "Block 4 - Liên hệ",
			content:
				"Block cuối cùng về thông tin liên hệ. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
		},
		// Thêm block mới ở đây để tạo row mới
		{
			id: 5,
			title: "Block 5 - Thêm nội dung",
			content:
				"Block mới được thêm vào sẽ tạo row mới. Excepteur sint occaecat cupidatat non proident.",
		},
	];

	return (
		<div className="min-h-screen bg-orange-50">
			{/* Container chính */}
			<div className="grid grid-cols-3">
				{/* Tạo row cho mỗi content block */}
				{contentBlocks.map((block, index) => (
					<React.Fragment key={block.id}>
						{/* Cột trái - trống */}
						<div className="border-r border-b border-black bg-orange-50 min-h-[200px]"></div>

						{/* Cột giữa - chứa content block */}
						<div className="border-r border-b border-black bg-white p-8 min-h-[200px] flex items-center">
							<div className="w-full">
								<h2 className="text-2xl font-bold text-gray-800 mb-4">
									{block.title}
								</h2>
								<p className="text-gray-600 leading-relaxed mb-4">
									{block.content}
								</p>

								{/* Thêm một số element khác nếu cần */}
								<div className="flex items-center justify-between">
									<span className="text-sm text-gray-400">
										Block #{block.id}
									</span>
									<button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm transition-colors">
										Xem thêm
									</button>
								</div>
							</div>
						</div>

						{/* Cột phải - trống */}
						<div className="border-b border-black bg-orange-50 min-h-[200px]"></div>
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

// Component để thêm block mới dễ dàng
const ContentBlock = ({ title, children, blockNumber }) => (
	<React.Fragment>
		{/* Cột trái */}
		<div className="border-r border-b border-black bg-orange-50 min-h-[200px]"></div>

		{/* Cột giữa - content */}
		<div className="border-r border-b border-black bg-white p-8 min-h-[200px] flex items-center">
			<div className="w-full">
				<h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
				<div className="text-gray-600">{children}</div>
				<div className="mt-4 flex items-center justify-between">
					<span className="text-sm text-gray-400">Block #{blockNumber}</span>
				</div>
			</div>
		</div>

		{/* Cột phải */}
		<div className="border-b border-black bg-orange-50 min-h-[200px]"></div>
	</React.Fragment>
);

export default DynamicRowLayout;
