import React from "react";

function Heading() {
	return (
		<div className="container max-w-xs sm:max-w-sm md:max-w-md bg-white mt-4 rounded-[20px] ml-2 mr-9 shadow-custom-blue">
			<div className="heading-svg-con flex mt-3 justify-between">
				<h3 className="font-nunito text-lg ml-4 font-semibold">Heading 1 </h3>
				<div className="flex items-center rounded-full circle w-11 h-11 bg-pageHeading justify-center mr-6">
					<svg
						width="24"
						height="25"
						viewBox="0 0 24 25"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M24 24C24 24.2652 23.8946 24.5196 23.7071 24.7071C23.5196 24.8946 23.2652 25 23 25H1C0.734784 25 0.48043 24.8946 0.292893 24.7071C0.105357 24.5196 0 24.2652 0 24C0 23.7348 0.105357 23.4804 0.292893 23.2929C0.48043 23.1054 0.734784 23 1 23H23C23.2652 23 23.5196 23.1054 23.7071 23.2929C23.8946 23.4804 24 23.7348 24 24ZM13 19V7C13 6.46957 13.2107 5.96086 13.5858 5.58579C13.9609 5.21071 14.4696 5 15 5H20C20.5304 5 21.0391 5.21071 21.4142 5.58579C21.7893 5.96086 22 6.46957 22 7V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H15C14.4696 21 13.9609 20.7893 13.5858 20.4142C13.2107 20.0391 13 19.5304 13 19ZM15 19H20V7H15V19ZM2 19V2C2 1.46957 2.21071 0.960859 2.58579 0.585786C2.96086 0.210714 3.46957 0 4 0H9C9.53043 0 10.0391 0.210714 10.4142 0.585786C10.7893 0.960859 11 1.46957 11 2V19C11 19.5304 10.7893 20.0391 10.4142 20.4142C10.0391 20.7893 9.53043 21 9 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19ZM4 19H9V2H4V19Z"
							fill="#F5831F"
						/>
					</svg>
				</div>
			</div>
			<div>
				<h3 className="font-nunito ml-4 font-normal">
					content under heading 1
				</h3>
			</div>
		</div>
	);
}

export default Heading;
