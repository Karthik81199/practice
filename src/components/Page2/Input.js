import React, { useState, useRef } from "react";

function Input() {
	const [isPopupVisible, setPopupVisible] = useState(false);
	const [isBlurred, setBlurred] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		setPopupVisible(true);
		setBlurred(true);
	};

	const handleClosePopup = () => {
		setPopupVisible(false);
		setBlurred(false);
	};
	const fileInputRef = useRef(null);

	const handleButtonClick = () => {
		fileInputRef.current.click();
	};

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			console.log("Selected file:", file);
			// Handle file upload logic here
		}
	};
	return (
		<div className="container max-w-xs md:max-w-lg lg:max-w-[1440px] ">
			<div className="flex heading mt-3 ml-2">
				<h3 className="font-nunito text-lg font-semibold">
					Heading for the Content
				</h3>
			</div>
			<form method="post" onSubmit={handleSubmit}>
				<div className="flex justify-evenly flex-wrap mt-7 ml-7 max-w-lg">
					<div className="flex-1 mb-4">
						<label
							htmlFor="input1"
							className="block text-sm font-semibold text-labelCl"
						>
							Input field 1
						</label>
						<input
							type="text"
							id="input1"
							name="input1"
							className="mt-1 max-w-sm md:max-w-lg lg:max-w-xl gap-3 border-[2px] pt-2.5 pr-0 pb-2.5 pl-4 rounded-[12px]"
							placeholder="Enter the value"
							required
						/>
					</div>
					<div className="flex-1">
						<label
							htmlFor="input2"
							className="block text-sm font-semibold text-labelCl"
						>
							Input field 2
						</label>
						<input
							type="text"
							id="input2"
							name="input2"
							className="mt-1 max-w-sm md:max-w-lg lg:max-w-xl gap-3 border-[2px] pt-2.5 pr-0 pb-2.5 pl-4 rounded-[12px]"
							placeholder="Enter the value"
							required
						/>
					</div>
					<div className="flex-1">
						<label
							htmlFor="input3"
							className="block text-sm font-semibold text-labelCl"
						>
							Input field 3
						</label>
						<input
							type="text"
							id="input3"
							name="input3"
							className="mt-1 max-w-sm md:max-w-lg lg:max-w-2xl gap-3 border-[2px] pt-2.5 pr-0 pb-2.5 pl-4 rounded-[12px]"
							placeholder="Enter the value"
							required
						/>
					</div>
					<div className="flex-1">
						<label
							htmlFor="input4"
							className="block text-sm font-semibold text-labelCl"
						>
							Input field 4
						</label>
						<input
							type="text"
							id="input4"
							name="input4"
							className="mt-1 max-w-sm md:max-w-lg lg:max-w-2xl gap-3 border-[2px] pt-2.5 pr-0 pb-2.5 pl-4 rounded-[12px]"
							placeholder="Enter the value"
							required
						/>
					</div>
				</div>
				<div className="flex-col mt-4 ml-2">
					<h3 className="font-nunito text-lg font-semibold text-labelCl">
						Heading for the Content
					</h3>
					<input
						type="file"
						ref={fileInputRef}
						onChange={handleFileChange}
						style={{ display: "none" }}
					/>
					<button
						type="Button"
						className="w-28 mt-5 h-10 border-[2px] border-buttonCl rounded-2xl"
						onClick={handleButtonClick}
					>
						Browse
					</button>
				</div>
				<input
					type="submit"
					className="mt-5 ml-2 w-20 h-10 bg-submitbtn text-submitxt rounded-2xl"
				/>
			</form>
			{isPopupVisible && (
				<div className="fixed inset-0 flex items-center justify-center z-50">
					<div className="bg-white p-6 rounded-lg shadow-lg relative w-[517px] h-[222px] flex flex-col justify-evenly">
						<div className="w-10 h-10 bg-green-500 mx-auto rounded-full ">
							<svg
								width="33"
								height="32"
								viewBox="0 0 33 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12.4995 21.5572L7.87288 16.9305C7.62357 16.6812 7.28544 16.5411 6.93288 16.5411C6.58031 16.5411 6.24218 16.6812 5.99288 16.9305C5.74357 17.1798 5.60352 17.5179 5.60352 17.8705C5.60352 18.0451 5.6379 18.2179 5.70471 18.3792C5.77151 18.5405 5.86943 18.6871 5.99288 18.8105L11.5662 24.3838C12.0862 24.9038 12.9262 24.9038 13.4462 24.3838L27.5529 10.2772C27.8022 10.0279 27.9422 9.68974 27.9422 9.33717C27.9422 8.98461 27.8022 8.64648 27.5529 8.39717C27.3036 8.14787 26.9654 8.00781 26.6129 8.00781C26.2603 8.00781 25.9222 8.14787 25.6729 8.39717L12.4995 21.5572Z"
									fill="white"
								/>
							</svg>
						</div>
						<h2 className="text-lg font-semibold text-center">
							Uploaded successfully
						</h2>
						<button
							onClick={handleClosePopup}
							className="absolute top-2 right-2 p-1 bg-gray-200 rounded-full"
						>
							<span className="text-lg">&times;</span>
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default Input;
